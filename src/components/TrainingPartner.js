import React from "react";
import { FaAward, FaChalkboardTeacher, FaArrowRight } from "react-icons/fa";

const TrainingPartner = () => {
    return (
        <div
            id="training-partner"
            className=" text-gray-700 my-10 py-10 px-8 rounded-xl ">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                {/* Content Section */}
                <div className="text-center lg:text-left lg:max-w-3xl space-y-6">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Elevate Your Career with{" "}
                        <strong>Training Partner</strong>
                    </h2>
                    <p className="text-lg leading-relaxed">
                        Take the next step in your career with our trusted
                        partner{" "}
                        <a
                            href="https://ultraxpert.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-purple-600 underline">
                            Ultraxpert
                        </a>
                        . Learn from industry experts, earn certifications, and
                        gain in-demand skills that will help you excel in
                        today’s competitive job market. Ultraxpert ensures
                        you’re job-ready with tailored, hands-on training
                        programs.
                    </p>
                    <div className="flex flex-col md:flex-row lg:items-center space-y-4 md:space-y-0 md:space-x-6 md:items-center">
                        <div className="flex items-center space-x-3">
                            <div className="p-3 bg-purple-100 rounded-full">
                                <FaChalkboardTeacher className="text-purple-600 w-6 h-6" />
                            </div>
                            <span className="text-md font-medium">
                                Expert-Led Training Sessions
                            </span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="p-3 bg-purple-100 rounded-full">
                                <FaAward className="text-purple-600 w-6 h-6" />
                            </div>
                            <span className="text-md font-medium">
                                Industry-Recognized Certifications
                            </span>
                        </div>
                    </div>
                </div>

                {/* Call-to-Action Section */}
                <div className="text-center">
                    <a
                        href="#training"
                        className="inline-flex items-center bg-gradient-to-r from-purple-300 to-pink-300 text-gray-600 font-semibold text-lg py-4 px-8 rounded-lg shadow-lg hover:opacity-90 transform hover:scale-105 transition">
                        Explore Training Programs
                        <FaArrowRight className="ml-3" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TrainingPartner;
