import React, { useState } from "react";
import {
    FiBell,
    FiUser,
    FiPlusCircle,
    FiUsers,
    FiMail,
    FiCheckCircle,
    FiEye,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useItemsFilter } from "../../hooks/actions/app/useItemFilter";
import { APIENDPOINT } from "../../utils/api";

const Dashboard = () => {
    // const [jobPosts, setJobPosts] = useState([
    //     {
    //         id: 1,
    //         title: "Frontend Developer",
    //         description:
    //             "Looking for an experienced frontend developer skilled in React.",
    //         candidates: 45,
    //     },
    //     {
    //         id: 2,
    //         title: "Backend Developer",
    //         description:
    //             "Hiring a backend developer proficient in Node.js and MongoDB.",
    //         candidates: 30,
    //     },
    // ]);

    const [selectedJob, setSelectedJob] = useState(null);
    const [candidates, setCandidates] = useState([]);
    const [testResults, setTestResults] = useState([]);

    const navigate = useNavigate();

    const { data } = useItemsFilter(APIENDPOINT.POST_A_JOB);
    console.log("data", data);

    const getCandidates = (jobId) => {
        // const selectedJob = jobPosts.find((post) => post.id === jobId);
        // const candidatesData = [
        //     {
        //         id: 1,
        //         name: "John Doe",
        //         email: "john.doe@example.com",
        //         resume: "Resume.pdf",
        //     },
        //     {
        //         id: 2,
        //         name: "Jane Smith",
        //         email: "jane.smith@example.com",
        //         resume: "Resume.pdf",
        //     },
        // ];

        navigate(`/recruiters/get-candidates/${jobId}`);
    };

    const getTestResults = () => {
        // Simulate fetching test results
        setTestResults([
            {
                id: 1,
                name: "John Doe",
                score: 95,
                rank: 1,
            },
            {
                id: 2,
                name: "Jane Smith",
                score: 88,
                rank: 2,
            },
        ]);
    };

    const getCurrentGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Top Bar */}
            <header className="flex justify-between items-center p-6 bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-md">
                <div className="flex items-center gap-4">
                    <h1 className="text-3xl font-bold tracking-tight">
                        Hiregenzo
                    </h1>
                </div>
                <div className="flex items-center space-x-6">
                    <button className="flex items-center gap-2 p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-md transition">
                        <FiBell size={20} />
                    </button>
                    <button className="flex items-center gap-2 p-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 shadow-md transition">
                        <FiUser size={20} />
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gray-50 p-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-4xl font-extrabold text-purple-800">
                            {getCurrentGreeting()}, Recruiter!
                        </h2>
                        <p className="text-gray-600 text-lg mt-2">
                            Manage your job posts and find the best candidates
                            for your team.
                        </p>
                    </div>
                    <button
                        className="flex items-center gap-2 bg-purple-600 text-white p-3 rounded-lg shadow-md hover:bg-purple-700 transition"
                        onClick={() => navigate("/recruiters/job-description")}>
                        <FiPlusCircle size={20} /> Create Job Post
                    </button>
                </div>
            </section>

            {/* Main Content */}
            <main className="flex-grow p-8">
                {/* Job Posts Section */}
                <section className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                    <h3 className="text-xl font-semibold text-gray-600 mb-6">
                        Your Job Posts
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data?.map((post) => (
                            <div
                                key={post.id}
                                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-200">
                                <h4 className="text-lg font-bold text-purple-800 mb-2">
                                    {post.title}
                                </h4>
                                <p className="text-gray-600 mb-4">
                                    {post.description}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Matching Candidates: {post.candidates}
                                </p>
                                <button
                                    onClick={() => getCandidates(post.id)}
                                    className="flex items-center gap-2 mt-4 bg-purple-600 text-white p-2 rounded-lg shadow-md hover:bg-purple-700 transition">
                                    <FiUsers size={16} /> Get Candidates
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Candidates Section */}
                {selectedJob && (
                    <section className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                        <h3 className="text-xl font-semibold text-gray-600 mb-6">
                            Candidates for {selectedJob.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {candidates.map((candidate) => (
                                <div
                                    key={candidate.id}
                                    className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-200">
                                    <h4 className="text-lg font-bold text-purple-800 mb-2">
                                        {candidate.name}
                                    </h4>
                                    <p className="text-gray-600 mb-4">
                                        Email: {candidate.email}
                                    </p>
                                    <a
                                        href="#"
                                        className="text-sm text-purple-600 underline mb-4 block">
                                        View Resume
                                    </a>
                                    <button className="flex items-center gap-2 mt-4 bg-purple-600 text-white p-2 rounded-lg shadow-md hover:bg-purple-700 transition">
                                        <FiMail size={16} /> Send Test
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Test Results Section */}
                <section className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-600 mb-6">
                        Test Results
                    </h3>
                    <button
                        onClick={getTestResults}
                        className="flex items-center gap-2 bg-purple-600 text-white p-3 rounded-lg shadow-md hover:bg-purple-700 transition mb-6">
                        <FiCheckCircle size={20} /> Load Test Results
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testResults.map((result) => (
                            <div
                                key={result.id}
                                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-200">
                                <h4 className="text-lg font-bold text-purple-800 mb-2">
                                    {result.name}
                                </h4>
                                <p className="text-gray-600 mb-4">
                                    Score: {result.score}
                                </p>
                                <p className="text-gray-500">
                                    Rank: {result.rank}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
