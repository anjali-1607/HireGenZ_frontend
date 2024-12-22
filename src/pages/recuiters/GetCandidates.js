import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APIENDPOINT } from "../../utils/api";
import { useItemsFilter } from "../../hooks/actions/app/useItemFilter";
import MatchCandidates from "./MatchCandidates";
import ShortlistedCandidates from "./ShortlistedCandidates";
import ScheduledInterviews from "./ScheduledInterviews";

const GetCandidates = () => {
    const navigate = useNavigate();
    const { jobId } = useParams();

    const { data } = useItemsFilter(`${APIENDPOINT.MATCH_CANDIDATES}${jobId}`);
    const [activeTab, setActiveTab] = useState("matches");

    const tabs = [
        { id: "matches", label: "Match Candidates" },
        { id: "shortlisted", label: "Shortlisted Candidates" },
        { id: "scheduled", label: "Scheduled Interviews" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Header */}
            <header className="flex justify-between items-center p-6 bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-md">
                <h1 className="text-3xl font-bold tracking-tight">Hiregenzo</h1>
                <button
                    className="bg-gray-200 text-gray-800 p-2 rounded-lg hover:bg-gray-300"
                    onClick={() => navigate("/recruiters/dashboard")}>
                    Back to Dashboard
                </button>
            </header>

            {/* Tabs */}
            <div className="flex justify-center mt-6">
                <div className="flex space-x-6 border-b border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`px-6 py-2 font-medium text-gray-600 ${
                                activeTab === tab.id
                                    ? "text-purple-700 border-b-2 border-purple-700"
                                    : "hover:text-purple-700"
                            }`}
                            onClick={() => setActiveTab(tab.id)}>
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
                {activeTab === "matches" && (
                    <MatchCandidates data={data} jobId={jobId} />
                )}
                {activeTab === "shortlisted" && <ShortlistedCandidates />}
                {activeTab === "scheduled" && <ScheduledInterviews />}
            </div>
        </div>
    );
};

export default GetCandidates;
