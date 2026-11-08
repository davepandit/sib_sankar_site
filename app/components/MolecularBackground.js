"use client";

import { useEffect, useRef } from "react";

// Cool blues / cyan / silver with the occasional warm highlight
const PALETTE = [
    { weight: 0.34, base: [70, 160, 255], hi: [205, 232, 255] },
    { weight: 0.3, base: [56, 224, 255], hi: [215, 250, 255] },
    { weight: 0.3, base: [186, 202, 222], hi: [246, 249, 253] },
    { weight: 0.06, base: [255, 168, 98], hi: [255, 226, 190] },
];

const WRAP = 700; // clusters drift across [-WRAP, WRAP] and wrap while fully faded out
const FOCAL = 700;

const mulberry32 = (seed) => () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const smooth = (v) => { const c = clamp01(v); return c * c * (3 - 2 * c); };
const rgba = (c, a) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;

const pickColor = (rand) => {
    let r = rand();
    for (const c of PALETTE) { if ((r -= c.weight) <= 0) return c; }
    return PALETTE[0];
};

const buildScene = () => {
    const rand = mulberry32(42);
    const clusters = Array.from({ length: 9 }, () => {
        const count = 5 + Math.floor(rand() * 5);
        const atoms = [{ off: [0, 0, 0], r: 9 + rand() * 7, color: pickColor(rand) }];
        const bonds = [];
        for (let i = 1; i < count; i++) {
            const parent = Math.floor(rand() * atoms.length);
            const th = rand() * Math.PI * 2;
            const ph = Math.acos(2 * rand() - 1);
            const len = 40 + rand() * 20;
            const [px, py, pz] = atoms[parent].off;
            atoms.push({
                off: [px + len * Math.sin(ph) * Math.cos(th), py + len * Math.sin(ph) * Math.sin(th), pz + len * Math.cos(ph)],
                r: 7 + rand() * 7,
                color: pickColor(rand),
            });
            bonds.push([parent, i]);
        }
        // extra bonds between close atoms form ring-like structures
        for (let i = 0; i < atoms.length; i++) {
            for (let j = i + 1; j < atoms.length; j++) {
                if (bonds.some(([a, b]) => a === i && b === j)) continue;
                const d = Math.hypot(...atoms[i].off.map((v, k) => v - atoms[j].off[k]));
                if (d < 66) bonds.push([i, j]);
            }
        }
        return {
            atoms,
            bonds: bonds.map(([a, b]) => ({ a, b, phase: rand() * 6.28, speed: 0.35 + rand() * 0.4 })),
            x0: (rand() * 2 - 1) * WRAP,
            y: (rand() * 2 - 1) * 270,
            z: (rand() * 2 - 1) * 320,
            vx: (rand() < 0.5 ? -1 : 1) * (5 + rand() * 7),
            bob: rand() * 6.28,
            ax: rand() * 6.28, ay: rand() * 6.28,
            wx: 0.06 + rand() * 0.14, wy: 0.08 + rand() * 0.16,
            phase: rand() * 6.28,
        };
    });
    const particles = Array.from({ length: 34 }, () => ({
        a: Math.floor(rand() * clusters.length),
        b: Math.floor(rand() * clusters.length),
        u: rand(),
        speed: 0.05 + rand() * 0.1,
        bend: (rand() * 2 - 1) * 140,
        warm: rand() < 0.12,
    }));
    return { clusters, particles, rand };
};

const MolecularBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const scene = buildScene();
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        let W = 0, H = 0, dpr = 1, raf = 0, visible = true;
        const start = performance.now();

        const resize = () => {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            W = canvas.clientWidth;
            H = canvas.clientHeight;
            canvas.width = Math.round(W * dpr);
            canvas.height = Math.round(H * dpr);
        };

        const clusterPos = (c, t) => {
            const x = ((c.x0 + c.vx * t + WRAP) % (2 * WRAP) + 2 * WRAP) % (2 * WRAP) - WRAP;
            return { x, y: c.y + Math.sin(t * 0.12 + c.bob) * 24, z: c.z + Math.sin(t * 0.07 + c.bob * 1.7) * 40 };
        };
        const edgeFade = (x) => clamp01((WRAP - Math.abs(x)) / 160);

        const draw = (t) => {
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, W, H);
            const u = Math.max(H / 700, W / 1300);
            const camX = Math.sin(t * 0.07) * 45;
            const camY = Math.cos(t * 0.05) * 25;
            const camZ = 700 + Math.sin(t * 0.04) * 30;
            const focal = Math.sin(t * 0.08) * 120;

            const project = (x, y, z) => {
                const s = FOCAL / (z + camZ);
                return { sx: W / 2 + (x - camX) * s * u, sy: H / 2 + (y - camY) * s * u, s: s * u, blur: clamp01(Math.abs(z - focal) / 320) };
            };
            // keep the centre calm so the foreground text stays readable
            const centerFade = (sx, sy) => {
                const dx = (sx - W / 2) / (W * 0.36), dy = (sy - H / 2) / (H * 0.42);
                return 0.28 + 0.72 * smooth(Math.hypot(dx, dy));
            };

            const items = [];
            const centers = scene.clusters.map((c) => clusterPos(c, t));

            scene.clusters.forEach((c, ci) => {
                const { x: cx, y: cy, z: cz } = centers[ci];
                const fade = edgeFade(cx);
                if (fade <= 0) return;
                const breathe = 0.82 + 0.22 * Math.sin(t * 0.3 + c.phase); // molecule assembles / disassembles
                const ay = c.ay + c.wy * t, ax = c.ax + c.wx * t;
                const cosY = Math.cos(ay), sinY = Math.sin(ay), cosX = Math.cos(ax), sinX = Math.sin(ax);
                const pts = c.atoms.map((atom) => {
                    let [ox, oy, oz] = atom.off.map((v) => v * breathe);
                    const x1 = ox * cosY + oz * sinY, z1 = -ox * sinY + oz * cosY;
                    const y2 = oy * cosX - z1 * sinX, z2 = oy * sinX + z1 * cosX;
                    return { ...project(cx + x1, cy + y2, cz + z2), z: cz + z2 };
                });
                c.bonds.forEach((b) => {
                    const p = pts[b.a], q = pts[b.b];
                    const form = 0.5 + 0.5 * Math.sin(t * b.speed + b.phase); // bond forms / breaks
                    const alpha = smooth(form * 1.4 - 0.15) * fade;
                    if (alpha < 0.02) return;
                    const mx = (p.sx + q.sx) / 2, my = (p.sy + q.sy) / 2;
                    items.push({ kind: "bond", z: (p.z + q.z) / 2, p, q, alpha: alpha * centerFade(mx, my), form, blur: (p.blur + q.blur) / 2 });
                });
                pts.forEach((p, i) => {
                    items.push({ kind: "atom", z: p.z, p, atom: c.atoms[i], alpha: fade * centerFade(p.sx, p.sy) });
                });
            });

            items.sort((a, b) => b.z - a.z);

            for (const it of items) {
                if (it.kind === "bond") {
                    const { p, q, alpha, blur, form } = it;
                    const w = Math.max(1, 2.4 * ((p.s + q.s) / 2) * (1 + blur * 0.6));
                    ctx.lineCap = "round";
                    ctx.strokeStyle = `rgba(120,190,255,${0.16 * alpha * (1 - 0.5 * blur)})`;
                    ctx.lineWidth = w * 3.2;
                    ctx.beginPath(); ctx.moveTo(p.sx, p.sy); ctx.lineTo(q.sx, q.sy); ctx.stroke();
                    ctx.strokeStyle = `rgba(190,225,255,${(0.35 + 0.35 * form) * alpha * (1 - 0.5 * blur)})`;
                    ctx.lineWidth = w;
                    ctx.beginPath(); ctx.moveTo(p.sx, p.sy); ctx.lineTo(q.sx, q.sy); ctx.stroke();
                } else {
                    const { p, atom, alpha } = it;
                    const r = atom.r * p.s * (1 + 0.35 * p.blur);
                    const a = alpha * (1 - 0.4 * p.blur);
                    const { base, hi } = atom.color;
                    const glow = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, r * 3);
                    glow.addColorStop(0, rgba(base, 0.22 * a));
                    glow.addColorStop(1, rgba(base, 0));
                    ctx.fillStyle = glow;
                    ctx.beginPath(); ctx.arc(p.sx, p.sy, r * 3, 0, 6.2832); ctx.fill();
                    const g = ctx.createRadialGradient(p.sx - r * 0.35, p.sy - r * 0.35, r * 0.08, p.sx, p.sy, r);
                    g.addColorStop(0, rgba(hi, 0.95 * a));
                    g.addColorStop(0.4, rgba(base, 0.9 * a));
                    g.addColorStop(0.85, rgba(base.map((v) => v * 0.3), 0.85 * a));
                    g.addColorStop(1, rgba(base.map((v) => v * 0.2), (1 - p.blur) * 0.7 * a));
                    ctx.fillStyle = g;
                    ctx.beginPath(); ctx.arc(p.sx, p.sy, r, 0, 6.2832); ctx.fill();
                }
            }

            // particles travelling along curved pathways between molecules
            scene.particles.forEach((pt) => {
                const A = centers[pt.a], B = centers[pt.b];
                if (pt.a === pt.b) return;
                const fade = Math.min(edgeFade(A.x), edgeFade(B.x));
                const k = Math.sin(Math.PI * pt.u);
                const mt = 1 - pt.u;
                const mx = (A.x + B.x) / 2, my = (A.y + B.y) / 2 + pt.bend, mz = (A.z + B.z) / 2;
                for (let tail = 0; tail < 4; tail++) {
                    const uu = Math.max(0, pt.u - tail * 0.012), m = 1 - uu;
                    const x = m * m * A.x + 2 * m * uu * mx + uu * uu * B.x;
                    const y = m * m * A.y + 2 * m * uu * my + uu * uu * B.y;
                    const z = m * m * A.z + 2 * m * uu * mz + uu * uu * B.z;
                    const p = project(x, y, z);
                    const a = k * fade * centerFade(p.sx, p.sy) * (1 - tail * 0.25) * (1 - 0.5 * p.blur);
                    if (a < 0.02) continue;
                    const col = pt.warm ? [255, 190, 120] : [150, 230, 255];
                    const r = Math.max(1.2, 3.2 * p.s * (1 - tail * 0.15));
                    const g = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, r * 3);
                    g.addColorStop(0, rgba([255, 255, 255], 0.9 * a));
                    g.addColorStop(0.3, rgba(col, 0.55 * a));
                    g.addColorStop(1, rgba(col, 0));
                    ctx.fillStyle = g;
                    ctx.beginPath(); ctx.arc(p.sx, p.sy, r * 3, 0, 6.2832); ctx.fill();
                }
            });
        };

        let last = 0;
        const loop = (now) => {
            raf = requestAnimationFrame(loop);
            if (!visible || document.hidden) return;
            const dt = (now - last) / 1000;
            last = now;
            const t = (now - start) / 1000 + 20;
            scene.particles.forEach((pt) => {
                pt.u += pt.speed * Math.min(dt, 0.1);
                if (pt.u >= 1) {
                    pt.u = 0;
                    pt.a = pt.b;
                    pt.b = Math.floor(scene.rand() * scene.clusters.length);
                    pt.bend = (scene.rand() * 2 - 1) * 140;
                }
            });
            draw(t);
        };

        resize();
        const ro = new ResizeObserver(() => { resize(); if (reduceMotion) draw(20); });
        ro.observe(canvas);
        const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
        io.observe(canvas);

        if (reduceMotion) draw(20);
        else raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
            io.disconnect();
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />;
};

export default MolecularBackground;
