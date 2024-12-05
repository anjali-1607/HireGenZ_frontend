import React, { useState } from "react";
import formImage from "../assets/formImage.png";
import Header from "../components/Header";

const JobDescriptionPage = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        experience: "",
        min_ctc: "",
        max_ctc: "",
        locations: "",
        key_skills: "",
        industry_type: "",
        role: "",
        candidates_needed: "",
        employment_type: "",
        job_type: "",
        education: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Job Post Submitted: ", formData);
        alert("Job Post Submitted Successfully!");
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-purple-50 flex flex-col items-center py-5 px-6 lg:px-20">
                <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                Describe Your Role, and Let Us
                            </h2>
                            <h3 className="text-2xl font-bold text-purple-700">
                                Find Your Ideal{" "}
                                <span className="text-purple-500">
                                    Candidate.
                                </span>
                            </h3>
                        </div>
                        <img
                            src={formImage}
                            alt="Form Header"
                            className="w-48 h-auto"
                        />
                    </div>
                    <form onSubmit={handleSubmit}>
                        {/* Job Title */}
                        <div className="mb-6">
                            <label
                                htmlFor="title"
                                className="block text-gray-700 font-semibold mb-2">
                                Job Title{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter job title"
                            />
                        </div>

                        {/* Job Description */}
                        <div className="mb-6">
                            <label
                                htmlFor="description"
                                className="block text-gray-700 font-semibold mb-2">
                                Job Description{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter job description"
                                rows="3"></textarea>
                        </div>

                        {/* Required Experience */}
                        <div className="mb-6">
                            <label
                                htmlFor="experience"
                                className="block text-gray-700 font-semibold mb-2">
                                Required Experience (Years){" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                id="experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter experience in years"
                            />
                        </div>

                        {/* Min and Max CTC */}
                        <div className="mb-6">
                            <label
                                htmlFor="min_ctc"
                                className="block text-gray-700 font-semibold mb-2">
                                Minimum CTC{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                id="min_ctc"
                                name="min_ctc"
                                value={formData.min_ctc}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter minimum CTC"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="max_ctc"
                                className="block text-gray-700 font-semibold mb-2">
                                Maximum CTC{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                id="max_ctc"
                                name="max_ctc"
                                value={formData.max_ctc}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter maximum CTC"
                            />
                        </div>

                        {/* Job Locations */}
                        <div className="mb-6">
                            <label
                                htmlFor="locations"
                                className="block text-gray-700 font-semibold mb-2">
                                Job Locations{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="locations"
                                name="locations"
                                value={formData.locations}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter locations (comma-separated)"
                            />
                        </div>

                        {/* Key Skills */}
                        <div className="mb-6">
                            <label
                                htmlFor="key_skills"
                                className="block text-gray-700 font-semibold mb-2">
                                Key Skills{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="key_skills"
                                name="key_skills"
                                value={formData.key_skills}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter skills (comma-separated)"
                            />
                        </div>

                        {/* Industry Type */}
                        <div className="mb-6">
                            <label
                                htmlFor="industry_type"
                                className="block text-gray-700 font-semibold mb-2">
                                Industry Type{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="industry_type"
                                name="industry_type"
                                value={formData.industry_type}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter industry type"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end gap-4 mt-6">
                            <button
                                type="reset"
                                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg">
                                Reset
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

export default JobDescriptionPage;
