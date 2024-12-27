import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Chevron icon for toggle
import quemark from "../assets/quemark.png"; // Importing the provided image

const FAQs = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "What happens after I upload my resume?",
            answer: "Once your resume is uploaded, HireGeni’s AI scans it to match your skills and experience with available job descriptions. You’ll receive an email update about the status of your application.",
        },
        {
            id: 2,
            question: "How will I know if my resume is shortlisted?",
            answer: "If your resume matches a job's requirements, you'll receive an email notification with instructions to take a quick skill test.",
        },
        {
            id: 3,
            question: "What is the 2-minute test?",
            answer: "The 2-minute test consists of 5 multiple-choice questions designed to verify your skills and suitability for the job. Passing this test increases your chances of getting hired.",
        },
        {
            id: 4,
            question: "Is the platform free for job seekers?",
            answer: "Yes, uploading your resume and applying for jobs on HireGeni is completely free for job seekers.",
        },
        {
            id: 5,
            question: "How do I prepare for the skill test?",
            answer: "The test is based on the skills mentioned in the job description. Focus on showcasing your core expertise to clear the assessment.",
        },
        {
            id: 6,
            question: "Will I get a job guarantee after passing the test?",
            answer: "While passing the test increases your chances of getting hired, final decisions depend on the hiring company. HireGeni connects you directly with employers for the next steps.",
        },
    ];

    const toggleQuestion = (id) => {
        setActiveQuestion(activeQuestion === id ? null : id);
    };

    return (
        <div id="faqs" className="bg-pink-100 py-16 px-6 md:px-16 relative">
            <div className="max-w-4xl mx-auto">
                {/* Heading and Question Mark */}
                <div className="flex items-center mb-8">
                    <h2 className="text-3xl font-bold mr-4">
                        Frequently Asked Questions
                    </h2>
                    <img
                        src={quemark}
                        alt="Question Mark"
                        className="w-12 h-12 object-contain"
                    />
                </div>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-white shadow-md rounded-md border border-gray-200">
                            {/* Question */}
                            <div
                                className="flex justify-between items-center px-6 py-4 cursor-pointer"
                                onClick={() => toggleQuestion(faq.id)}>
                                <span className="text-base font-medium text-gray-900 flex items-center">
                                    <span className="text-red-500 mr-2">•</span>
                                    {faq.question}
                                </span>
                                <FaChevronDown
                                    className={`text-gray-600 text-sm transition-transform ${
                                        activeQuestion === faq.id
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </div>

                            {/* Answer */}
                            {activeQuestion === faq.id && faq.answer && (
                                <div className="px-6 py-4 text-sm text-gray-700 border-t border-gray-200">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
