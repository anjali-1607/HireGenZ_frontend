import React, { useState, useEffect, useRef } from "react";
import profileImage from "../assets/profile-img.png"; // Replace with the actual profile image path in your assets

const AdvancedFeatures = () => {
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
        <section
            ref={sectionRef}
            className="flex flex-col md:flex-row justify-center items-center gap-8 px-8 py-16 bg-white sm:mx-20 md:mx-5 lg:mx-40 overflow-hidden">
            {/* Profile Card */}
            <div
                className={`bg-purple-100 p-0 rounded-lg shadow-md flex md:w-1/2 h-full transition-all duration-1000 ease-out ${
                    isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                }`}>
                <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Description Section */}
            <div
                className={`md:w-1/2 text-center md:text-left transition-all duration-1000 ease-out ${
                    isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                }`}>
                <h2 className="text-2xl font-bold text-gray-800">
                    An Intelligent Screening Solution
                </h2>
                <p className="mt-4 text-gray-600">
                    High precision, seamless results. Upload unlimited resumes
                    and job descriptions and let the AI do the heavy lifting.
                    Our system analyzes resumes using advanced NLP techniques,
                    extracting critical information like skills, experience, and
                    qualifications. With detailed match scores and insights, you
                    can quickly identify top candidates and ensure the perfect
                    fit for your team.
                </p>
                <button className="mt-8 px-6 py-3 bg-gradient-to-r from-[#bd76fa] to-[#ee89b7] hover:opacity-90 hover:scale-105 text-white text-md md:text-md rounded-lg shadow-lg transition-transform transform animate-fadeIn delay-300">
                    Get started now
                </button>
            </div>
        </section>
    );
};

export default AdvancedFeatures;
