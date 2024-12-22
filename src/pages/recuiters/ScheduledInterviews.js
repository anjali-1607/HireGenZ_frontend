import React from "react";

const ScheduledInterviews = () => {
    const scheduledInterviews = [
        { id: 1, name: "John Doe", date: "2024-12-22", time: "10:00 AM" },
        { id: 2, name: "Jane Smith", date: "2024-12-23", time: "02:00 PM" },
    ];

    if (scheduledInterviews.length === 0) {
        return (
            <p className="text-center text-gray-600">
                No candidates scheduled for interviews.
            </p>
        );
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <table className="w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 text-left">
                        <th className="p-4">Name</th>
                        <th className="p-4">Date</th>
                        <th className="p-4">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {scheduledInterviews.map((candidate) => (
                        <tr
                            key={candidate.id}
                            className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="p-4">{candidate.name}</td>
                            <td className="p-4">{candidate.date}</td>
                            <td className="p-4">{candidate.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduledInterviews;
