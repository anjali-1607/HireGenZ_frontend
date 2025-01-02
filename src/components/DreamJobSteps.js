import React, { useEffect, useRef, useState } from "react";

const DreamJobSteps = () => {
    const steps = [
        {
            title: "Upload Your Resume with Ease",
            description:
                "Submit your resume effortlessly on HireGenzo platform. Our intelligent AI analyzes your profile to match you with jobs tailored to your skills, experience, and career goals.",
        },
        {
            title: "Receive Instant Updates",
            description:
                "Once your resume is submitted, you'll get an email confirmation. If your profile matches a job description, you’ll be notified immediately with the next steps to move forward.",
        },
        {
            title: "Showcase Your Skills",
            description:
                "Confirm your expertise by taking a quick, 2-minute skill test. These five simple MCQs ensure your skills meet the job requirements, building confidence in your application.",
        },
        {
            title: "Get Noticed and Hired",
            description:
                "Impress employers with your verified skills and let Hiregenzo do the rest. If successful, you’ll receive a call directly from the company to finalize the hiring process.",
        },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
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
        <section ref={sectionRef} className="py-16 px-8 bg-white">
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
                Your <span className="text-purple-700">Dream Job</span> is{" "}
                <br />
                Just a Few Clicks Away...
            </h2>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:mx-20 gap-8 mt-12">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        style={{
                            animationDelay: `${index * 0.3}s`,
                        }}
                        className={`relative p-6 rounded-lg shadow-lg bg-gradient-to-br from-white to-[#ffd8f3] transition-transform duration-300 transform hover:scale-105 hover:shadow-xl ${
                            isVisible ? "animate-slideUp" : "opacity-0"
                        }`}>
                        {/* Circle with Number */}
                        <div className="absolute -top-5 left-5 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-400 text-white font-bold flex items-center justify-center rounded-full border-4 border-pink-100">
                            {index + 1}
                        </div>

                        {/* Step Title */}
                        <h3 className="mt-10 text-lg font-semibold text-purple-700">
                            {step.title}
                        </h3>

                        {/* Step Description */}
                        <p className="mt-2 text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DreamJobSteps;
