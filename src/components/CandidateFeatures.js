import React, { useEffect, useState, useRef } from "react";
import {
    FaRobot,
    FaSearch,
    FaClipboardCheck,
    FaCertificate,
    FaUserTie,
    FaBell,
} from "react-icons/fa";

const CandidateFeatures = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const features = [
        {
            icon: <FaRobot size={40} />,
            title: "Automated Job Applications",
            description:
                "Upload your resume, and let AI do the work! Our platform automatically applies to jobs that match your skills and preferences, saving you time and effort.",
            animation: "animate-slideInLeft",
        },
        {
            icon: <FaSearch size={40} />,
            title: "Smart Job Matching",
            description:
                "Our AI analyzes your profile and preferences to find the best-fit opportunities, ensuring you only apply for roles where you truly excel.",
            animation: "animate-slideInRight",
        },
        {
            icon: <FaClipboardCheck size={40} />,
            title: "Resume Enhancement",
            description:
                "Low ATS score? No worries! Use our built-in tools to enhance your resume for higher compatibility and better chances of success.",
            animation: "animate-slideInLeft",
        },
        {
            icon: <FaCertificate size={40} />,
            title: "Skill Validation Tests",
            description:
                "Take short, role-specific tests to confirm your skills and stand out from the competition. Receive instant feedback and improve your chances of shortlisting.",
            animation: "animate-slideInRight",
        },
        {
            icon: <FaUserTie size={40} />,
            title: "Recruiter-Friendly Dashboard",
            description:
                "For recruiters, our platform provides ranked candidate profiles based on AI matching and test scores, making hiring decisions smarter and faster.",
            animation: "animate-slideInLeft",
        },
        {
            icon: <FaBell size={40} />,
            title: "Real-Time Notifications",
            description:
                "Stay informed every step of the way with updates on job matches, test invites, shortlisting, and interview calls—right at your fingertips.",
            animation: "animate-slideInRight",
        },
    ];

    // Detect when the component is in the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2, // Trigger when 20% of the component is visible
            }
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
            id="features"
            ref={sectionRef}
            className="relative py-16 px-12 lg:px-44 lg:mt-12 overflow-hidden">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
                Features
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`p-6 bg-gradient-to-br from-[#ffffff] via-[#e7cfff] to-[#f9d7ff] rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 flex flex-col items-center text-center border-r-4 border-purple-400 hover:border-purple-700 ${
                            isVisible ? feature.animation : "opacity-0"
                        }`}>
                        {/* Icon */}
                        <div className="mb-4 text-purple-700">
                            {feature.icon}
                        </div>
                        {/* Title */}
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {feature.title}
                        </h3>
                        {/* Description */}
                        <p className="text-gray-700">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CandidateFeatures;
