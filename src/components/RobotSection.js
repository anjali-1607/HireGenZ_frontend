import React from "react";
import RobotImage from "../assets/robot.png"; // Correct path to robot image.
import { FaQuoteLeft } from "react-icons/fa"; // Import for purple quote icon.

const RobotSection = () => {
    return (
        <section className="bg-purple-50 py-12 px-6 lg:px-48 lg:pb-0 lg:mb-[-120px]">
            {" "}
            {/* Added lg:mb-[-16px] to remove extra space */}
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-start lg:items-start lg:gap-8 md:items-center sm:items-center">
                {/* Robot Image */}
                <div className="lg:w-1/2 flex justify-center md:justify-center lg:justify-start order-1 lg:order-none">
                    <img
                        src={RobotImage}
                        alt="AI Robot"
                        className="w-full max-w-sm lg:max-w-md"
                    />
                </div>

                {/* Text Content */}
                <div className="lg:w-1/2 flex flex-col justify-start lg:mt-5 text-center lg:text-left lg:mr-9">
                    <div className="text-purple-600 text-4xl mb-4">
                        <FaQuoteLeft />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                        Let <span className="text-purple-600">AI</span> Handle
                        Your Job Hunt
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        Upload your resume, and our{" "}
                        <span className="text-purple-600 font-medium">
                            AI-powered system
                        </span>{" "}
                        will match you with the best opportunities, apply on
                        your behalf, and keep you updated every step of the way.
                    </p>
                    <div className="flex justify-center lg:justify-start gap-4">
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-purple-700 transition">
                            Upload Resume
                        </button>
                        <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RobotSection;
