import React from "react";
import { useNavigate } from "react-router-dom";
import formImage from "../assets/formImage.png";
import Header from "../components/Header";

const JDTwo = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        // You can add submission logic here
        alert("Form Submitted!");
    };

    const handleBack = () => {
        navigate("/recruiters"); // Navigate back to the first page
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-purple-50 flex flex-col items-center py-5 px-6 lg:px-20">
                <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                Additional Job Details
                            </h2>
                            <h3 className="text-2xl font-bold text-purple-700">
                                Complete the Form to Post Your{" "}
                                <span className="text-purple-500">
                                    Job Listing.
                                </span>
                            </h3>
                        </div>
                        <img
                            src={formImage}
                            alt="Form Header"
                            className="w-48 h-auto"
                        />
                    </div>
                    {/* Form Content */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="requiredSkills"
                                className="block text-gray-700 font-semibold mb-2">
                                Required Skills
                            </label>
                            <input
                                type="text"
                                id="requiredSkills"
                                name="requiredSkills"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter required skills"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="salaryRange"
                                className="block text-gray-700 font-semibold mb-2">
                                Salary Range
                            </label>
                            <input
                                type="text"
                                id="salaryRange"
                                name="salaryRange"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter salary range"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="jobLocation"
                                className="block text-gray-700 font-semibold mb-2">
                                Job Location
                            </label>
                            <input
                                type="text"
                                id="jobLocation"
                                name="jobLocation"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter job location"
                            />
                        </div>
                        <div className="flex justify-end gap-4">
                            <button
                                type="button"
                                onClick={handleBack}
                                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg">
                                Back
                            </button>
                            <button
                                type="submit"
                                className="bg-purple-700 text-white px-6 py-3 rounded-lg">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default JDTwo;
