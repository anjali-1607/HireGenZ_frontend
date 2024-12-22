import React, { useState } from "react";
import { FaTable, FaThLarge } from "react-icons/fa";

export default function JobPostsUI() {
    const [viewMode, setViewMode] = useState("table"); // State to toggle between views

    const jobPosts = [
        {
            id: 1,
            name: "Ksenia Bator",
            title: "Fullstack Engineer",
            department: "Engineering",
            salary: "$1,500",
            startDate: "Oct 13, 2023",
            lifecycle: "Hired",
            status: "Absent",
        },
        {
            id: 2,
            name: "Bogdan Nikitin",
            title: "Mobile Lead",
            department: "Product",
            salary: "$2,600",
            startDate: "Nov 4, 2023",
            lifecycle: "Employed",
            status: "Invited",
        },
    ];

    return (
        <main className="flex-1 flex flex-col p-6 bg-purple-50">
            {/* Header */}
            <header className="flex flex-col md:flex-row items-center justify-between mb-6">
                <div>
                    <h1
                        className="text-xl font-bold text-purple-700"
                        style={{ fontFamily: '"Poppins", sans-serif' }}>
                        Good Morning, Recruiter!
                    </h1>
                    <p
                        className="text-sm text-gray-700 mt-1"
                        style={{ fontFamily: '"Roboto", sans-serif' }}>
                        Manage your job posts and find the best candidates for
                        your team with ease.
                    </p>
                </div>
                <div className="flex items-center gap-3 mt-4 md:mt-0">
                    <button
                        onClick={() => setViewMode("table")}
                        className={`p-2 rounded-md transition-all duration-300 ${
                            viewMode === "table"
                                ? "bg-purple-600 text-white shadow-md"
                                : "bg-gray-200 text-gray-600 hover:shadow-sm"
                        }`}>
                        <FaTable size={20} />
                    </button>
                    <button
                        onClick={() => setViewMode("card")}
                        className={`p-2 rounded-md transition-all duration-300 ${
                            viewMode === "card"
                                ? "bg-purple-600 text-white shadow-md"
                                : "bg-gray-200 text-gray-600 hover:shadow-sm"
                        }`}>
                        <FaThLarge size={20} />
                    </button>
                </div>
            </header>

            {/* Content Section */}
            <section className="bg-white rounded-lg shadow-sm p-5">
                {viewMode === "table" ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm text-gray-600">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Job Title</th>
                                    <th className="px-4 py-2">Department</th>
                                    <th className="px-4 py-2">Salary</th>
                                    <th className="px-4 py-2">Start Date</th>
                                    <th className="px-4 py-2">Lifecycle</th>
                                    <th className="px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {jobPosts.map((post) => (
                                    <tr
                                        key={post.id}
                                        className="hover:bg-gray-50">
                                        <td className="px-4 py-2">
                                            {post.name}
                                        </td>
                                        <td className="px-4 py-2">
                                            {post.title}
                                        </td>
                                        <td className="px-4 py-2">
                                            {post.department}
                                        </td>
                                        <td className="px-4 py-2">
                                            {post.salary}
                                        </td>
                                        <td className="px-4 py-2">
                                            {post.startDate}
                                        </td>
                                        <td className="px-4 py-2">
                                            {post.lifecycle}
                                        </td>
                                        <td
                                            className={`px-4 py-2 font-bold ${
                                                post.status === "Absent"
                                                    ? "text-red-500"
                                                    : "text-green-500"
                                            }`}>
                                            {post.status}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {jobPosts.map((post) => (
                            <div
                                key={post.id}
                                className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-3">
                                <h2 className="text-base font-semibold text-gray-700 mb-2">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-gray-500">
                                    <span className="font-bold">Name:</span>{" "}
                                    {post.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                    <span className="font-bold">
                                        Department:
                                    </span>{" "}
                                    {post.department}
                                </p>
                                <p className="text-sm text-gray-500">
                                    <span className="font-bold">Salary:</span>{" "}
                                    {post.salary}
                                </p>
                                <p className="text-sm text-gray-500">
                                    <span className="font-bold">
                                        Start Date:
                                    </span>{" "}
                                    {post.startDate}
                                </p>
                                <p className="text-sm text-gray-500">
                                    <span className="font-bold">
                                        Lifecycle:
                                    </span>{" "}
                                    {post.lifecycle}
                                </p>
                                <p
                                    className={`text-sm font-bold mt-2 ${
                                        post.status === "Absent"
                                            ? "text-red-500"
                                            : "text-green-500"
                                    }`}>
                                    Status: {post.status}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
