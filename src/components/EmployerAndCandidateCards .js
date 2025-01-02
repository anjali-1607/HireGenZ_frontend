import React, { useState, useEffect, useRef } from "react";
import employerImg from "../assets/employer-img.png"; // Update the path based on your assets folder structure
import candidateImg from "../assets/candidate-img.png"; // Update the path based on your assets folder structure

const EmployerAndCandidateCards = () => {
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
            className="flex flex-col md:flex-row justify-center items-center gap-8 px-8 py-16 sm:mx-20 md:mx-5 lg:mx-40">
            {/* Employer Card */}
            <div
                className={`flex flex-col md:flex-row justify-between items-center bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-lg shadow-md w-full md:w-1/2 h-full transition-all duration-1000 ease-out ${
                    isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                }`}>
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-purple-700">
                        For Employers
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Find professionals from around the world and across all
                        skills.
                    </p>
                    <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#bd76fa] to-[#ee89b7] hover:opacity-90 hover:scale-105 text-white text-md md:text-md rounded-lg shadow-lg transition-transform transform animate-fadeIn delay-300">
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
            <div
                className={`flex flex-col md:flex-row justify-between items-center bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-lg shadow-md w-full md:w-1/2 h-full transition-all duration-1000 ease-out ${
                    isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                }`}>
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-purple-700">
                        For Candidates
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Upload your resume and find new job opportunities.
                    </p>
                    <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#bd76fa] to-[#ee89b7] hover:opacity-90 hover:scale-105 text-white text-md md:text-md rounded-lg shadow-lg transition-transform transform animate-fadeIn delay-300">
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
