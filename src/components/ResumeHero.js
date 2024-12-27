import React, { useState } from "react";
import heroImage from "../assets/hero-image.png";

const ResumeHero = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFile(file);
            console.log("File uploaded:", file.name);

            // Simulate processing
            setIsProcessing(true);
            setTimeout(() => {
                setIsProcessing(false);
            }, 5000); // Example: 5 seconds for processing
        }
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-10 py-16 bg-gradient-to-br from-purple-50 to-purple-100 relative lg:pt-28">
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

                <label
                    htmlFor="resume-upload"
                    className="inline-block lg:ml-8 mt-6 bg-gradient-to-r from-[#bd76fa] to-[#ee89b7] text-white font-semibold text-lg md:text-xl py-4 px-10 rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-transform transform hover:scale-105 animate-fadeIn delay-300">
                    Upload and Analyze
                    <input
                        id="resume-upload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        className="hidden"
                    />
                </label>
                {isProcessing && (
                    <p className="mt-4 text-lg text-purple-600 animate-pulse">
                        Processing your resume...
                    </p>
                )}
            </div>

            {/* Right Section (Image) */}
            <div className="hidden lg:flex w-full lg:w-1/2 justify-center animate-slideInRight">
                <img
                    src={heroImage}
                    alt="Resume Analysis Illustration"
                    className="w-4/5 lg:w-3/4 xl:w-2/3 max-h-[600px] rounded-lg transition-transform transform"
                />
            </div>
        </div>
    );
};

export default ResumeHero;
