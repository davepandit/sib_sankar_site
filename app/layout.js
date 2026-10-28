import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Dr. Sib Sankar Mal",
  description: "Chemistry Department Professor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
