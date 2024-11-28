import React, { useState } from "react";
import preferenceImage from "../assets/preference.png"; // Import the preference image

const CandidateHero = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <section className="bg-purple-100 text-center py-16 px-8">
                <h1 className="text-5xl font-bold text-gray-800 leading-snug">
                    From Upload to Offer:
                    <br />
                    <span className="text-purple-700">
                        Let AI Do the Hustle.
                    </span>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                    Your dream job is closer than you think. Upload your resume,
                    and let us handle the matching, applying, and follow-ups.
                </p>
                <button
                    onClick={handleOpenModal}
                    className="mt-10 px-8 py-4 bg-purple-700 text-white text-lg font-semibold rounded-lg">
                    Upload a Resume
                </button>
                <p className="mt-3 text-md text-purple-700">
                    Get your ATS score in seconds.
                </p>
            </section>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg w-11/12 max-w-5xl flex flex-col md:flex-row p-6">
                        {/* Left Side: Form */}
                        <div className="w-full md:w-1/2 p-6">
                            <h2 className="text-2xl font-bold mb-4">
                                Candidate Preferences
                            </h2>
                            <form>
                                {/* Preferred Location */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Preferred Location
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter preferred location"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>

                                {/* Expected Salary */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Expected Salary
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Enter expected salary"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>

                                {/* Job Type */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Job Type
                                    </label>
                                    <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                        <option>Full-Time</option>
                                        <option>Part-Time</option>
                                        <option>Internship</option>
                                        <option>Contract</option>
                                    </select>
                                </div>

                                {/* Upload Resume */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Upload Your Resume
                                    </label>
                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        Supported formats: PDF, DOC, DOCX
                                    </p>
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end space-x-4">
                                    <button
                                        type="button"
                                        onClick={handleCloseModal}
                                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right Side: Image */}
                        <div className="w-full md:w-1/2 flex justify-center items-center p-6">
                            <img
                                src={preferenceImage}
                                alt="Preferences Illustration"
                                className="w-full h-auto object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CandidateHero;
