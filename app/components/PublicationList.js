import React from 'react';

const highlightAuthor = (authors) =>
    authors.split(/(Sib Sankar Mal\*?)/).map((part, i) =>
        part.startsWith('Sib Sankar Mal') ? <strong key={i}>{part}</strong> : part
    );

const PublicationList = ({ publications }) => (
    <ol className="divide-y divide-gray-100">
        {publications.map((pub, index) => (
            <li key={pub.id} className="flex gap-4 p-5 md:p-6 hover:bg-gray-50/50 transition-colors">
                <span className="w-8 shrink-0 text-center font-medium text-gray-500">{index + 1}</span>
                <p className="text-gray-700 leading-relaxed">
                    {pub.title}. {highlightAuthor(pub.authors)}, <em>{pub.journal}</em>
                    {pub.year && <>, <strong>{pub.year}</strong></>}
                    {pub.details && <>, {pub.details}</>}
                    . {pub.note && <>{pub.note} </>}
                    <strong>({pub.impact})</strong>
                </p>
            </li>
        ))}
    </ol>
);

export default PublicationList;
