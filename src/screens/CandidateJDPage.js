import React from "react";
import {
    FaBriefcase,
    FaMoneyBillWave,
    FaMapMarkerAlt,
    FaTools,
    FaBuilding,
    FaGlobe,
    FaLink,
} from "react-icons/fa"; // Import icons
import logo from "../assets/hiregenzo-logo-final.png";
import img from "../assets/office-cover-img.png";
import { useNavigate, useParams } from "react-router-dom";
import { useItemsFilter } from "../hooks/actions/app/useItemFilter";
import { APIENDPOINT } from "../utils/api";
import { usePublicItemsFilter } from "../hooks/actions/app/usePublicItemsFilter";

const CandidateJDPage = () => {
    const navigate = useNavigate();
    const { jobId } = useParams();

    const { data } = usePublicItemsFilter(`${APIENDPOINT.POST_A_JOB}${jobId}`);
    console.log("data", data);

    // Job data
    const jobData = {
        title: "Software Engineer",
        description:
            "Looking for a skilled software engineer to join our team.Looking for a skilled software engineer to join our team. Looking for a skilled software engineer to join our team.Looking for a skilled software engineer to join our team.Looking for a skilled software engineer to join our team.Looking for a skilled software engineer to join our team.",

        experience: 3,
        min_ctc: 500000,
        max_ctc: 800000,
        locations: ["Indore", "Remote"],
        key_skills: ["Python", "Django", "REST API"],
        industry_type: "Information Technology",
        role: "Backend Developer",
        candidates_needed: 3,
        employment_type: "FULL_TIME",
        job_type: "REMOTE",
        education: "B.TECH",
        recruiter: 2,
        company_name: "HireGenzo",
        company_url: "https://hiregenzo.com",
    };

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Header */}
            <header className="text-black p-4 border-b-2 border-gray-200">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <img src={logo} alt="HireGenZo Logo" className="h-8" />
                    <button
                        className="text-md font-medium text-white px-8 py-2 rounded-lg hover:bg-purple-700 bg-purple-600 flex items-center"
                        onClick={() => navigate("/test")}>
                        Start Test
                    </button>
                </div>
            </header>

            <div className="relative">
                {/* Cover Image */}
                <img
                    src={img}
                    alt="office-img"
                    className="w-full object-cover"
                />

                {/* Overlapping Div */}

                <div className="absolute bg-white w-11/12 max-w-7xl mx-auto left-1/2 transform -translate-x-1/2 -mt-10 sm:-mt-16 lg:-mt-52 p-8 rounded-lg shadow-lg">
                    {/* Job Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center sm:text-left">
                        {jobData.title}
                    </h2>

                    {/* Company Name */}
                    <div className="flex items-center mb-2">
                        <FaBuilding className="text-purple-600 mr-3" />
                        <p className="text-gray-700">
                            <strong>Company Name:</strong>{" "}
                            {jobData.company_name}
                        </p>
                    </div>

                    {/* Company URL */}
                    <div className="flex items-center mb-4">
                        <FaLink className="text-purple-600 mr-3" />
                        <a
                            href={jobData.company_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 underline break-words">
                            {jobData.company_url}
                        </a>
                    </div>

                    {/* Job Details */}
                    <div className="space-y-4 text-base text-gray-700">
                        <div className="flex items-center">
                            <FaBriefcase className="text-purple-600 mr-3" />
                            <p>
                                <strong>Experience:</strong>{" "}
                                {jobData.experience} years
                            </p>
                        </div>
                        <div className="flex items-center">
                            <FaMoneyBillWave className="text-purple-600 mr-3" />
                            <p>
                                <strong>Salary Range:</strong> ₹
                                {jobData.min_ctc.toLocaleString()} - ₹
                                {jobData.max_ctc.toLocaleString()} per annum
                            </p>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-purple-600 mr-3" />
                            <p>
                                <strong>Locations:</strong>{" "}
                                {jobData.locations.join(", ")}
                            </p>
                        </div>
                        <div className="flex items-center">
                            <FaTools className="text-purple-600 mr-3" />
                            <p>
                                <strong>Key Skills:</strong>{" "}
                                {jobData.key_skills.join(", ")}
                            </p>
                        </div>
                        <div className="flex items-center">
                            <FaGlobe className="text-purple-600 mr-3" />
                            <p>
                                <strong>Industry:</strong>{" "}
                                {jobData.industry_type}
                            </p>
                        </div>
                    </div>

                    {/* Job Description */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Job Description
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            {jobData.description}
                        </p>
                    </div>

                    {/* key responsibilities */}

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Key Responsibilities
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            {jobData.description}
                        </p>
                    </div>

                    <div className="flex justify-center items-center mt-6">
                        <button
                            className="text-md font-medium text-white px-14 py-2 rounded-lg hover:bg-purple-700 bg-purple-600 flex items-center"
                            onClick={() => navigate("/test")}>
                            Start Test
                        </button>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateJDPage;
