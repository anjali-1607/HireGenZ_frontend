import React, { useState, useEffect } from "react";
import {
    FaCheckCircle,
    FaExclamationCircle,
    FaTimesCircle,
    FaClipboardCheck,
    FaStar,
} from "react-icons/fa"; // React Icons
import heroImage from "../assets/hero-image.png";
import { usePublicCreateItem } from "../hooks/actions/mutation/usePublicCreateItem";
import { APIENDPOINT } from "../utils/api";

const ResumeHero = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [analysisData, setAnalysisData] = useState(null);
    const [progressMessage, setProgressMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const uploadMutation = usePublicCreateItem(APIENDPOINT.ANALYZE_RESUME);

    useEffect(() => {
        let timer;
        if (isProcessing) {
            setProgressMessage("Analyzing your resume...");
            timer = setTimeout(() => {
                setProgressMessage("We are preparing feedback for you...");
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [isProcessing]);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (
            file &&
            [
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ].includes(file.type)
        ) {
            setUploadedFile(file);
            setErrorMessage("");

            const formData = new FormData();
            formData.append("resume", file);

            setIsProcessing(true);
            uploadMutation.mutate(formData, {
                onSuccess: (response) => {
                    setAnalysisData(response);
                    setIsProcessing(false);
                },
                onError: (error) => {
                    console.error("Error uploading file:", error);
                    setErrorMessage(
                        "Oops! Something went wrong. Please try again. Make sure the uploaded file is a valid resume document."
                    );
                    setIsProcessing(false);
                },
            });
        } else {
            setErrorMessage(
                "Please upload a valid document. It is not a resume. Supported formats are PDF, DOC, and DOCX."
            );
        }
    };

    const renderScores = () => {
        const scores = analysisData?.scores || {};
        return (
            <div className="mt-6">
                <h3 className="text-xl font-semibold text-purple-700 flex items-center">
                    <FaStar className="text-purple-500 mr-2" />
                    Resume Scores
                </h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {Object.keys(scores).map((key) => (
                        <div key={key}>
                            <p className="capitalize flex items-center text-gray-800 mb-1">
                                <FaClipboardCheck className="text-purple-500 w-5 h-5 mr-2" />
                                {key.replace("_", " ")}
                            </p>
                            <div className="relative pt-1">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                                    <div
                                        style={{
                                            width: `${scores[key] * 10}%`,
                                        }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-500 to-purple-700"></div>
                                </div>
                                <p className="text-sm mt-1 text-gray-600">
                                    {scores[key].toFixed(2)}/100
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderActionPoints = () => {
        const actionPoints = analysisData?.feedback?.action_points || [];
        return (
            <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold text-purple-700 flex items-center">
                    <FaClipboardCheck className="text-purple-500 w-6 h-6 mr-2" />
                    Actionable Recommendations
                </h3>
                <ul className="space-y-3">
                    {actionPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                            {/* <FaCheckCircle className="text-green-600 w-5 h-5 mt-1 mr-3" /> */}
                            <span className="text-gray-700">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    const renderSummary = () => {
        const feedback = analysisData?.feedback;
        if (!feedback) return null;

        // Determine the color and icon for overall quality
        let qualityColor;
        let qualityIcon;
        switch (feedback.overall_quality.toLowerCase()) {
            case "poor":
                qualityColor = "text-red-600";
                qualityIcon = (
                    <FaTimesCircle className="text-red-600 w-6 h-6 inline mr-2" />
                );
                break;
            case "average":
                qualityColor = "text-green-600";
                qualityIcon = (
                    <FaExclamationCircle className="text-green-600 w-6 h-6 inline mr-2" />
                );
                break;
            case "excellent":
            case "out-standing":
                qualityColor = "text-purple-600";
                qualityIcon = (
                    <FaCheckCircle className="text-purple-600 w-6 h-6 inline mr-2" />
                );
                break;
            default:
                qualityColor = "text-gray-600";
                qualityIcon = null;
        }

        return (
            <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold text-purple-700 flex items-center">
                    <FaStar className="text-purple-500 mr-2" />
                    Overall Feedback
                </h3>
                <div className="p-4 bg-gray-100 rounded-md shadow">
                    <p className="text-gray-800">
                        <strong>Overall Quality:</strong>{" "}
                        <span className={`${qualityColor} font-bold`}>
                            {feedback.overall_quality}
                        </span>
                    </p>
                    <p className="text-gray-800 mt-2">
                        <strong>Chance to Get Selected:</strong>{" "}
                        <span className="text-purple-700 font-bold">
                            {feedback.chance_get_selected}%
                        </span>
                    </p>
                    <p className="text-gray-800 mt-2">
                        <strong>Short Summary:</strong>{" "}
                        <span className="text-gray-700">
                            {feedback.short_summary}
                        </span>
                    </p>
                </div>
            </div>
        );
    };

    return (
        <div
            id="home"
            className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-10 py-16 bg-gradient-to-br from-purple-50 to-purple-100 relative pt-28">
            {/* Left Section (Content) */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-7 lg:ml-10 animate-slideInLeft">
                <div className="px-4 md:px-8 py-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                        From Ordinary to Outstanding: Let AI
                    </h1>
                    <div className="mt-4">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#bd76fa] to-[#ee89b7] text-transparent bg-clip-text leading-tight">
                            Redefine Your Resume!
                        </h1>
                    </div>
                    <p className="mt-6 text-base md:text-lg lg:text-xl text-gray-600">
                        Upload your resume to receive AI-powered feedback,
                        suggestions, and an ATS compliance score. Start your
                        journey to landing your dream job today.
                    </p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-block lg:ml-8 mt-6 bg-gradient-to-r from-[#bd76fa] to-[#ee89b7] hover:opacity-90 hover:scale-105 text-white font-semibold text-lg md:text-xl py-4 px-10 rounded-lg shadow-lg transition-transform transform animate-fadeIn delay-300">
                    Analyze Your Resume
                </button>
            </div>

            {/* Right Section (Image) */}
            <div className="hidden lg:flex w-full lg:w-1/2 justify-center animate-slideInRight">
                <img
                    src={heroImage}
                    alt="Resume Analysis Illustration"
                    className="w-4/5 lg:w-3/4 xl:w-2/3 max-h-[600px] rounded-lg transition-transform transform"
                />
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-11/12 md:w-[90%] lg:w-[70%] max-h-[90vh] overflow-y-auto">
                        {!isProcessing && !analysisData && (
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    Upload Your Resume
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Please select your resume file to analyze
                                    and get feedback.
                                </p>
                                {errorMessage && (
                                    <p className="text-red-600 text-sm mb-4">
                                        {errorMessage}
                                    </p>
                                )}
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileUpload}
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r from-[#bd76fa] to-[#ee89b7] file:text-white hover:file:opacity-90"
                                    disabled={isProcessing} // Disable input during processing
                                />
                                <div className="flex justify-end mt-6">
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}

                        {isProcessing && (
                            <div className="text-center">
                                <p className="text-lg font-medium text-gray-700 mb-4">
                                    {progressMessage}
                                </p>
                                <div className="w-full h-2 bg-gray-200 rounded-full">
                                    <div className="h-2 bg-gradient-to-r from-[#bd76fa] to-[#ee89b7] rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        )}

                        {analysisData && (
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                                    Resume Analysis Feedback
                                </h2>
                                {renderSummary()}
                                {renderScores()}
                                {renderActionPoints()}
                                <div className="flex justify-end mt-6">
                                    <button
                                        onClick={() => {
                                            setAnalysisData(null);
                                            setIsModalOpen(false);
                                        }}
                                        className="bg-gradient-to-r from-[#bd76fa] to-[#ee89b7] text-white px-4 py-2 rounded-lg hover:opacity-90">
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResumeHero;
