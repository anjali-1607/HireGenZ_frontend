import React, { useRef, useEffect, useState } from "react";
import recruiter from "../assets/recruiter.png"; // Importing the recruiter image
import { useNavigate } from "react-router-dom";

const RecruitersSection = () => {
    const navigate = useNavigate(); // Correct hook for navigation
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } // Trigger animation when 30% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            id="post_a_job"
            className="bg-gradient-to-br from-purple-50 via-purple-100 to-pink-100 py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                {/* Image Section */}
                <div
                    className={`w-full md:w-1/2 transition-transform duration-1000 ${
                        isVisible
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-full opacity-0"
                    }`}>
                    <img
                        src={recruiter}
                        alt="Recruiters"
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Content Section */}
                <div
                    className={`w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left transition-transform duration-1000 ${
                        isVisible
                            ? "translate-x-0 opacity-100"
                            : "translate-x-full opacity-0"
                    }`}>
                    <h2 className="text-3xl font-bold mb-4">
                        Recruiters: Find Your Perfect Hire
                    </h2>
                    <h3 className="text-lg font-medium mb-6">
                        Post a Job in Minutes and Let HiregenZo Do the Rest
                    </h3>
                    <p className="text-gray-700 mb-6">
                        Looking for the right talent for your team? HiregenZo
                        makes hiring quick and efficient with our AI-powered job
                        matching platform. Whether you’re hiring for one role or
                        many, our tools help you connect with top-tier
                        candidates in no time.
                    </p>
                    <button
                        onClick={() => navigate("/recruiters")}
                        className="text-purple-600 font-medium hover:underline">
                        Post a Job
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecruitersSection;
