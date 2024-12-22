import React, { useState } from "react";
import { FiMail, FiList, FiGrid } from "react-icons/fi";
import { useCreateItem } from "../../hooks/actions/mutation/useCreateItem";
import { APIENDPOINT } from "../../utils/api";
import { toast } from "react-toastify";

const MatchCandidates = ({ data, jobId }) => {
    const [testSent, setTestSent] = useState({});
    const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of candidates per page

    const sendLinkMutatation = useCreateItem(
        `${APIENDPOINT.SEND_LINK}${jobId}/`
    );

    const matches = data?.results?.matches || [];
    const totalMatched = data?.results?.total_matched || 0;

    // Pagination calculations
    const totalPages = Math.ceil(totalMatched / itemsPerPage);
    const paginatedData = matches.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleSendTest = (id) => {
        // Simulate API call to send the test
        const payload = {
            shortlisted_candidates: [id],
        };

        sendLinkMutatation.mutate(payload, {
            onSuccess: () => {
                toast.success("Link Sent Successfully!!");
            },
            onError: () => {
                toast.error("Something Went Wrong");
            },
        });
        // setTestSent((prev) => ({ ...prev, [id]: true }));
    };

    const handlePageChange = (direction) => {
        if (direction === "prev" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (direction === "next" && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    if (totalMatched === 0) {
        return (
            <p className="text-center text-gray-600">
                No matched candidates available.
            </p>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {/* View Toggle */}
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-purple-800">
                    Matched Candidates for {data.results.job_title}
                </h3>
                <div className="flex gap-2">
                    <button
                        onClick={() => setViewMode("grid")}
                        className={`p-2 rounded-lg ${
                            viewMode === "grid"
                                ? "bg-purple-600 text-white"
                                : "bg-gray-200 text-gray-600"
                        } hover:bg-purple-500 hover:text-white transition`}>
                        <FiGrid size={18} />
                    </button>
                    <button
                        onClick={() => setViewMode("list")}
                        className={`p-2 rounded-lg ${
                            viewMode === "list"
                                ? "bg-purple-600 text-white"
                                : "bg-gray-200 text-gray-600"
                        } hover:bg-purple-500 hover:text-white transition`}>
                        <FiList size={18} />
                    </button>
                </div>
            </div>

            {/* Candidate List or Grid */}
            {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paginatedData.map((candidate) => (
                        <div
                            key={candidate.candidate_id}
                            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-200">
                            <h4 className="text-lg font-bold text-purple-800 mb-2">
                                {candidate.name}
                            </h4>
                            <p className="text-gray-600 mb-2">
                                Email: {candidate.email}
                            </p>
                            <a
                                href={candidate.resume_file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-purple-600 underline mb-4 block">
                                View Resume
                            </a>
                            {!testSent[candidate.candidate_id] ? (
                                <button
                                    onClick={() =>
                                        handleSendTest(candidate.candidate_id)
                                    }
                                    className="flex items-center gap-2 mt-4 bg-purple-600 text-white p-2 rounded-lg shadow-md hover:bg-purple-700 transition">
                                    <FiMail size={16} />
                                    {sendLinkMutatation.isLoading
                                        ? "Sending.."
                                        : "Send Test"}
                                </button>
                            ) : (
                                <span className="text-green-600 font-medium mt-4 block">
                                    Test Sent
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                    <table className="w-full table-auto">
                        <thead className="bg-gray-200 text-gray-600">
                            <tr>
                                <th className="p-4 text-left">Name</th>
                                <th className="p-4 text-left">Email</th>
                                <th className="p-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((candidate) => (
                                <tr
                                    key={candidate.candidate_id}
                                    className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="p-4">{candidate.name}</td>
                                    <td className="p-4">{candidate.email}</td>
                                    <td className="p-4">
                                        {!testSent[candidate.candidate_id] ? (
                                            <button
                                                onClick={() =>
                                                    handleSendTest(
                                                        candidate.candidate_id
                                                    )
                                                }
                                                className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition">
                                                <FiMail size={16} /> Send Test
                                            </button>
                                        ) : (
                                            <span className="text-green-600 font-medium">
                                                Test Sent
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => handlePageChange("prev")}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg shadow-md ${
                        currentPage > 1
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}>
                    Previous
                </button>
                <span className="text-gray-600">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => handlePageChange("next")}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg shadow-md ${
                        currentPage < totalPages
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default MatchCandidates;
