import React from "react";
import employerImg from "../assets/employer-img.png"; // Update the path based on your assets folder structure
import candidateImg from "../assets/candidate-img.png"; // Update the path based on your assets folder structure

const EmployerAndCandidateCards = () => {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center gap-8 px-8 py-16 sm:mx-20 md:mx-5 lg:mx-40">
            {/* Employer Card */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-pink-100 p-6 rounded-lg shadow-md w-full md:w-1/2 h-full">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-purple-700">
                        For Employers
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Find professionals from around the world and across all
                        skills.
                    </p>
                    <button className="mt-4 px-4 py-2 bg-purple-700 text-white rounded-lg">
                        Create a Job
                    </button>
                </div>
                <div className="w-32 h-32 md:ml-4">
                    <img
                        src={employerImg}
                        alt="Employer"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>

            {/* Candidate Card */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-pink-100 p-6 rounded-lg shadow-md w-full md:w-1/2 h-full">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-purple-700">
                        For Candidates
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Upload your resume and find new job opportunities.
                    </p>
                    <button className="mt-4 px-4 py-2 bg-purple-700 text-white rounded-lg">
                        Upload Resume
                    </button>
                </div>
                <div className="w-32 h-32 md:ml-4">
                    <img
                        src={candidateImg}
                        alt="Candidate"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default EmployerAndCandidateCards;
