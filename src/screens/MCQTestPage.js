import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import {
    FaReact,
    FaPython,
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
    FaGem,
    FaCode,
} from "react-icons/fa";

const MCQTestPage = () => {
    const questions = [
        {
            question: "What is React?",
            options: ["Library", "Framework", "Language", "Tool"],
            correct: "Library",
        },
        {
            question: "What is JSX?",
            options: [
                "JavaScript Syntax",
                "Java Syntax",
                "HTML Syntax",
                "CSS Syntax",
            ],
            correct: "JavaScript Syntax",
        },
        {
            question: "What is a state in React?",
            options: [
                "A CSS property",
                "A JavaScript function",
                "A component",
                "A way to manage data",
            ],
            correct: "A way to manage data",
        },
        {
            question: "What is the use of useEffect?",
            options: [
                "To manage side effects",
                "To create components",
                "To handle events",
                "To update styles",
            ],
            correct: "To manage side effects",
        },
        {
            question: "What is a prop in React?",
            options: [
                "A style property",
                "A way to pass data",
                "A class component",
                "A function",
            ],
            correct: "A way to pass data",
        },
    ];

    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1);
        }
    };

    const handleOptionSelect = (option) => {
        setAnswers((prev) => ({
            ...prev,
            [currentQuestion]: option,
        }));
    };

    const handleSubmit = () => {
        console.log("Selected Answers: ", answers);
        alert("Test Submitted! Thank you.");
    };

    const handleBack = () => {
        setShowModal(true);
    };

    const confirmExit = () => {
        navigate(-1);
    };

    const cancelExit = () => {
        setShowModal(false);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
            {/* Background Logos */}
            <div className="absolute top-10 left-10 text-gray-600 opacity-10">
                <FaPython size={200} />
            </div>
            <div className="absolute top-1/4 left-1/3 text-gray-600 opacity-10">
                <FaReact size={150} />
            </div>
            <div className="absolute bottom-20 left-10 text-gray-600 opacity-10">
                <FaJsSquare size={200} />
            </div>
            <div className="absolute bottom-10 right-10 text-gray-600 opacity-10">
                <FaHtml5 size={180} />
            </div>
            <div className="absolute top-1/3 right-10 text-gray-600 opacity-10">
                <FaCss3Alt size={150} />
            </div>
            <div className="absolute bottom-10 left-1/2 text-gray-600 opacity-10">
                <FaGem size={150} />
            </div>
            <div className="absolute top-5 right-1/4 text-gray-600 opacity-10">
                <FaCode size={200} /> {/* Replaced FaGo with FaCode */}
            </div>

            {/* Header */}
            <header className="bg-purple-600 py-4 px-8 flex items-center">
                <IoArrowBack
                    size={24}
                    className="mr-4 cursor-pointer"
                    onClick={handleBack}
                />
                <h1 className="text-2xl font-bold">HiregenZo Test Portal</h1>
            </header>

            <div className="flex items-center justify-center p-4 pt-20 relative z-10">
                <div className="bg-gray-800 w-full max-w-3xl p-8 rounded-lg border border-gray-700">
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        MCQ Test
                    </h1>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">
                            Question {currentQuestion + 1} of {questions.length}
                        </h2>
                        <p className="text-lg font-medium mb-6">
                            {questions[currentQuestion].question}
                        </p>
                        <ul className="grid gap-4">
                            {questions[currentQuestion].options.map(
                                (option, index) => (
                                    <li
                                        key={index}
                                        onClick={() =>
                                            handleOptionSelect(option)
                                        }
                                        className={`py-3 px-4 rounded-lg cursor-pointer transition border ${
                                            answers[currentQuestion] === option
                                                ? "border-purple-600 bg-purple-700"
                                                : "border-gray-500 hover:bg-gray-700"
                                        }`}>
                                        {option}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className="flex justify-between mt-8">
                        <button
                            onClick={handlePrevious}
                            disabled={currentQuestion === 0}
                            className={`px-6 py-2 rounded-lg ${
                                currentQuestion === 0
                                    ? "bg-gray-600 cursor-not-allowed"
                                    : "bg-purple-500 hover:bg-purple-600"
                            } transition`}>
                            Previous
                        </button>
                        {currentQuestion === questions.length - 1 ? (
                            <button
                                onClick={handleSubmit}
                                disabled={
                                    Object.keys(answers).length !==
                                    questions.length
                                }
                                className={`px-6 py-2 rounded-lg transition ${
                                    Object.keys(answers).length ===
                                    questions.length
                                        ? "bg-green-600 hover:bg-green-700"
                                        : "bg-gray-600 cursor-not-allowed"
                                }`}>
                                Submit
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                disabled={!answers[currentQuestion]}
                                className={`px-6 py-2 rounded-lg transition ${
                                    answers[currentQuestion]
                                        ? "bg-purple-500 hover:bg-purple-600"
                                        : "bg-gray-600 cursor-not-allowed"
                                }`}>
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
                    <div className="bg-white text-gray-900 p-6 rounded-lg w-96">
                        <h2 className="text-lg font-semibold mb-4">
                            Are you sure you want to exit the test?
                        </h2>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={cancelExit}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Cancel
                            </button>
                            <button
                                onClick={confirmExit}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                                Exit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MCQTestPage;
