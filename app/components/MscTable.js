import React from 'react';

const MscTable = ({ data, title = "MSc Thesis Guided", centered = false }) => (
    <div className="mb-20">
        <h3 className={centered
            ? "text-2xl font-bold text-gray-900 mb-10 flex items-center justify-center"
            : "text-2xl font-bold text-gray-900 mb-10 border-l-4 border-green-500 pl-4"}>
            {title}
        </h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-green-50/50 border-b border-green-100 text-green-800">
                            <th className="p-4 font-semibold w-16 text-center whitespace-nowrap">Sl No.</th>
                            <th className="p-4 font-semibold min-w-[200px]">Name</th>
                            <th className="p-4 font-semibold text-center min-w-[180px]">Academic Year / Thesis Defense (Month)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {data.map((student, index) => (
                            <tr key={student.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="p-4 text-center font-medium text-gray-500 align-top">{index + 1}</td>
                                <td className="p-4 align-top font-bold text-gray-900">{student.name}</td>
                                <td className="p-4 text-gray-700 text-center align-top font-medium">
                                    {student.academicYear}
                                    <div className="text-sm font-normal text-gray-500 mt-1">{student.defense}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

export default MscTable;
