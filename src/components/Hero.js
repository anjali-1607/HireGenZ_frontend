import React from "react";
import heroImage from "../assets/hero-img.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="flex flex-col md:flex-row items-center text-center md:text-left py-16 bg-purple-100 px-8">
            {/* Left Content */}
            <div className="md:w-1/2 lg:ml-20">
                <h1 className="text-5xl font-bold text-gray-800">
                    Discover Top Talent in{" "}
                    <span className="text-purple-700">Minutes</span>, Not in
                    Weeks.
                </h1>
                <p className="mt-4 text-gray-600 text-lg lg:text-xl">
                    Upload your job description, and let HireGeni match you with
                    top candidates today!
                </p>
                <button
                    onClick={() => navigate("/job-description")}
                    className="mt-8 px-6 py-3 bg-purple-700 text-white rounded-lg">
                    Create a Job
                </button>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center lg:mr-20">
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
