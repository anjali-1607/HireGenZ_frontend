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
            defaultBorderColor: "border-purple-200",
            hoverBorderColor: "hover:border-purple-500",
        },
        {
            icon: <FaSearch size={40} />,
            title: "Smart Job Matching",
            description:
                "Our AI analyzes your profile and preferences to find the best-fit opportunities, ensuring you only apply for roles where you truly excel.",
            defaultBorderColor: "border-pink-200",
            hoverBorderColor: "hover:border-pink-500",
        },
        {
            icon: <FaClipboardCheck size={40} />,
            title: "Resume Enhancement",
            description:
                "Low ATS score? No worries! Use our built-in tools to enhance your resume for higher compatibility and better chances of success.",
            defaultBorderColor: "border-purple-200",
            hoverBorderColor: "hover:border-purple-500",
        },
        {
            icon: <FaCertificate size={40} />,
            title: "Skill Validation Tests",
            description:
                "Take short, role-specific tests to confirm your skills and stand out from the competition. Receive instant feedback and improve your chances of shortlisting.",
            defaultBorderColor: "border-pink-200",
            hoverBorderColor: "hover:border-pink-500",
        },
        {
            icon: <FaUserTie size={40} />,
            title: "Recruiter-Friendly Dashboard",
            description:
                "For recruiters, our platform provides ranked candidate profiles based on AI matching and test scores, making hiring decisions smarter and faster.",
            defaultBorderColor: "border-purple-200",
            hoverBorderColor: "hover:border-purple-500",
        },
        {
            icon: <FaBell size={40} />,
            title: "Real-Time Notifications",
            description:
                "Stay informed every step of the way with updates on job matches, test invites, shortlisting, and interview calls—right at your fingertips.",
            defaultBorderColor: "border-pink-200",
            hoverBorderColor: "hover:border-pink-500",
        },
    ];

    return (
        <section className="bg-purple-50 py-16 px-12 lg:px-44">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
                Features
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 border-b-8 border-r-8 ${feature.defaultBorderColor} ${feature.hoverBorderColor}`}>
                        {/* Icon */}
                        <div className="flex justify-center mb-4 text-purple-700">
                            {feature.icon}
                        </div>
                        {/* Title */}
                        <h3 className="text-lg font-semibold text-purple-700 text-center mb-2">
                            {feature.title}
                        </h3>
                        {/* Description */}
                        <p className="text-gray-600 text-center">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CandidateFeatures;
