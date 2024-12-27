import React from "react";
import {
    FaRobot,
    FaSearch,
    FaClipboardCheck,
    FaCertificate,
    FaUserTie,
    FaBell,
} from "react-icons/fa";

const CandidateFeatures = () => {
    const features = [
        {
            icon: <FaRobot size={40} />,
            title: "Automated Job Applications",
            description:
                "Upload your resume, and let AI do the work! Our platform automatically applies to jobs that match your skills and preferences, saving you time and effort.",
        },
        {
            icon: <FaSearch size={40} />,
            title: "Smart Job Matching",
            description:
                "Our AI analyzes your profile and preferences to find the best-fit opportunities, ensuring you only apply for roles where you truly excel.",
        },
        {
            icon: <FaClipboardCheck size={40} />,
            title: "Resume Enhancement",
            description:
                "Low ATS score? No worries! Use our built-in tools to enhance your resume for higher compatibility and better chances of success.",
        },
        {
            icon: <FaCertificate size={40} />,
            title: "Skill Validation Tests",
            description:
                "Take short, role-specific tests to confirm your skills and stand out from the competition. Receive instant feedback and improve your chances of shortlisting.",
        },
        {
            icon: <FaUserTie size={40} />,
            title: "Recruiter-Friendly Dashboard",
            description:
                "For recruiters, our platform provides ranked candidate profiles based on AI matching and test scores, making hiring decisions smarter and faster.",
        },
        {
            icon: <FaBell size={40} />,
            title: "Real-Time Notifications",
            description:
                "Stay informed every step of the way with updates on job matches, test invites, shortlisting, and interview calls—right at your fingertips.",
        },
    ];

    return (
        <section
            id="features"
            className="relative bg-gray-900 py-16 px-12 lg:px-44 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[200px] h-[200px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-30 rounded-full animate-spin-slow top-16 left-10"></div>
                <div className="absolute w-[150px] h-[150px] bg-gradient-to-r from-green-400 to-blue-500 opacity-30 rounded-full animate-bounce top-1/2 right-16"></div>
                <div className="absolute w-[250px] h-[250px] bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 opacity-20 rounded-full animate-pulse bottom-10 left-1/4"></div>
            </div>

            <h1 className="text-4xl font-bold text-center text-gray-100 mb-12">
                Features
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="relative p-6 bg-gray-800 shadow-md hover:shadow-xl transition duration-300 border border-gray-700 hover:border-purple-500 transform hover:scale-105 hover:bg-gray-700 flex flex-col items-center justify-center">
                        {/* Icon */}
                        <div className="flex justify-center mb-4 text-purple-400">
                            {feature.icon}
                        </div>
                        {/* Title */}
                        <h3 className="text-lg font-semibold text-gray-100 text-center mb-2">
                            {feature.title}
                        </h3>
                        {/* Description */}
                        <p className="text-gray-400 text-center">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CandidateFeatures;
