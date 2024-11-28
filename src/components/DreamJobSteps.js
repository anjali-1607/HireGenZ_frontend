import React from "react";

const DreamJobSteps = () => {
    const steps = [
        {
            title: "Upload Your Resume with Ease",
            description:
                "Submit your resume effortlessly on HireGeni’s platform. Our intelligent AI analyzes your profile to match you with jobs tailored to your skills, experience, and career goals.",
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
                "Impress employers with your verified skills and let HireGeni do the rest. If successful, you’ll receive a call directly from the company to finalize the hiring process.",
        },
    ];

    return (
        <section className="py-16 px-8 bg-white">
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
                        className="relative p-6 border rounded-lg shadow-lg bg-pink-100">
                        {/* Circle with Number */}
                        <div className="absolute -top-5 left-5 w-12 h-12 bg-purple-700 text-white font-bold flex items-center justify-center rounded-full border-4 border-pink-100">
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
