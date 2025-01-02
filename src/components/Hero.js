import React, { useState, useEffect } from "react";
import heroImage from "../assets/hero-img.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true); // Trigger animations after mounting
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="flex flex-col md:flex-row items-center text-center md:text-left py-16 px-8 bg-gradient-to-br from-purple-50 to-purple-100 overflow-hidden">
            {/* Left Content */}
            <div
                className={`md:w-1/2 lg:ml-20 transition-transform duration-1000 ease-out ${
                    isVisible
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-full opacity-0"
                }`}>
                <h1 className="text-5xl font-bold text-gray-800">
                    Discover Top Talent in{" "}
                    <span className="bg-gradient-to-r from-[#bd76fa] to-[#ee89b7] text-transparent bg-clip-text">
                        Minutes
                    </span>
                    , Not in Weeks.
                </h1>
                <p className="mt-4 text-gray-600 text-lg lg:text-xl">
                    Upload your job description, and let HiregenZo match you
                    with top candidates today!
                </p>
                <button
                    onClick={() => navigate("/recruiters/job-description")}
                    className="mt-8 px-6 py-3 bg-gradient-to-r from-[#bd76fa] to-[#ee89b7] hover:opacity-90 hover:scale-105 text-white  text-lg md:text-lg  rounded-lg shadow-lg transition-transform transform animate-fadeIn delay-300">
                    Create a Job
                </button>
            </div>

            {/* Right Image */}
            <div
                className={`md:w-1/2 mt-8 md:mt-0 flex justify-center lg:mr-20 transition-transform duration-1000 ease-out ${
                    isVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full opacity-0"
                }`}>
                <img
                    src={heroImage}
                    alt="Hero Section"
                    className="w-4/5 md:w-full max-w-md"
                />
            </div>
        </section>
    );
};

export default Hero;
