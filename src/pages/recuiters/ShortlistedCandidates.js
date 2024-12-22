import React from "react";

const ShortlistedCandidates = () => {
    const shortlistedCandidates = [
        { id: 1, name: "John Doe", score: 90 },
        { id: 2, name: "Jane Smith", score: 85 },
        { id: 3, name: "Alice Johnson", score: 80 },
    ];

    const handleScheduleInterview = (id) => {
        // Simulate API call to schedule interview
        console.log("Interview scheduled for candidate ID:", id);
    };

    if (shortlistedCandidates.length === 0) {
        return (
            <p className="text-center text-gray-600">
                No shortlisted candidates.
            </p>
        );
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <table className="w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 text-left">
                        <th className="p-4">Name</th>
                        <th className="p-4">Score</th>
                        <th className="p-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {shortlistedCandidates
                        .sort((a, b) => b.score - a.score)
                        .map((candidate) => (
                            <tr
                                key={candidate.id}
                                className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="p-4">{candidate.name}</td>
                                <td className="p-4">{candidate.score}</td>
                                <td className="p-4">
                                    <button
                                        onClick={() =>
                                            handleScheduleInterview(
                                                candidate.id
                                            )
                                        }
                                        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                                        Schedule Interview
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShortlistedCandidates;
