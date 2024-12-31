import React, { useEffect, useRef, useState } from "react";
import { FaAward, FaChalkboardTeacher, FaArrowRight } from "react-icons/fa";
import HzModal from "./HzModal";

const TrainingPartner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [otpSubmitted, setOtpSubmitted] = useState(false);
    const [otp, setOtp] = useState("");
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
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

    // Function to toggle popup visibility
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
        setFormSubmitted(false);
        setOtpSubmitted(false);
        setOtp("");
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        // Simulate OTP sending
        setFormSubmitted(true);
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        // Simulate OTP validation
        if (otp === "123456") {
            // Replace "123456" with actual OTP validation logic
            setOtpSubmitted(true);
        } else {
            alert("Invalid OTP. Please try again.");
        }
    };

    return (
        <div
            id="training-partner"
            ref={sectionRef}
            className={`text-gray-700 my-10 py-10 px-8 rounded-xl transition-transform duration-1000 ${
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
            }`}>
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                <div className="text-center lg:text-left lg:max-w-3xl space-y-6">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Elevate Your Career with{" "}
                        <strong>Training Partner</strong>
                    </h2>
                    <p className="text-lg leading-relaxed">
                        Take the next step in your career with our trusted
                        partner{" "}
                        <a
                            href="https://ultraxpert.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-purple-600 underline">
                            Ultraxpert
                        </a>
                        . Learn from industry experts, earn certifications, and
                        gain in-demand skills that will help you excel in
                        today’s competitive job market. Ultraxpert ensures
                        you’re job-ready with tailored, hands-on training
                        programs.
                    </p>
                    <div className="flex flex-col md:flex-row lg:items-center space-y-4 md:space-y-0 md:space-x-6 md:items-center">
                        <div className="flex items-center space-x-3">
                            <div className="p-3 bg-purple-100 rounded-full">
                                <FaChalkboardTeacher className="text-purple-600 w-6 h-6" />
                            </div>
                            <span className="text-md font-medium">
                                Expert-Led Training Sessions
                            </span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="p-3 bg-purple-100 rounded-full">
                                <FaAward className="text-purple-600 w-6 h-6" />
                            </div>
                            <span className="text-md font-medium">
                                Industry-Recognized Certifications
                            </span>
                        </div>
                    </div>
                </div>

                {/* Call-to-Action Section */}
                <div className="text-center">
                    <button
                        onClick={togglePopup}
                        className="inline-flex items-center bg-gradient-to-r from-purple-300 to-pink-300 text-gray-600 font-semibold text-lg py-4 px-8 rounded-lg shadow-lg hover:opacity-90 transform hover:scale-105 transition">
                        {/* Explore Training Programs */}
                        Coming Soon....
                        <FaArrowRight className="ml-3" />
                    </button>
                </div>
            </div>

            {/* Popup Modal */}
            {/* {isPopupOpen && (
                <HzModal className="w-[90%] md:w-[50%] h-auto relative flex flex-col items-center justify-center p-10 bg-white rounded-lg shadow-lg">
                    <button
                        onClick={togglePopup}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold">
                        &times;
                    </button>

                    {!formSubmitted && (
                        <>
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-800">
                                    Professional Training and Counseling in
                                    Indore
                                </h3>
                                <p className="text-gray-600 mt-4">
                                    If you're looking to take professional
                                    training or want to engage in one-to-one
                                    counseling, our offline programs in Indore
                                    are here for you. Partnering with{" "}
                                    <strong>Ultraxpert</strong>, we ensure you
                                    receive top-notch guidance. Fill out the
                                    form below to get started!
                                </p>
                            </div>
                            <form
                                className="w-full space-y-4"
                                onSubmit={handleSubmitForm}>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-semibold text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:ring-2 focus:ring-purple-500"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-semibold text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:ring-2 focus:ring-purple-500"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="phone"
                                        className="text-sm font-semibold text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:ring-2 focus:ring-purple-500"
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="college"
                                        className="text-sm font-semibold text-gray-700">
                                        College Name
                                    </label>
                                    <input
                                        type="text"
                                        id="college"
                                        className="border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:ring-2 focus:ring-purple-500"
                                        placeholder="Enter your college name"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="course"
                                        className="text-sm font-semibold text-gray-700">
                                        Course
                                    </label>
                                    <input
                                        type="text"
                                        id="course"
                                        className="border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:ring-2 focus:ring-purple-500"
                                        placeholder="Enter your course"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="branch"
                                        className="text-sm font-semibold text-gray-700">
                                        Branch
                                    </label>
                                    <input
                                        type="text"
                                        id="branch"
                                        className="border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:ring-2 focus:ring-purple-500"
                                        placeholder="Enter your branch"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition">
                                    Submit
                                </button>
                            </form>
                        </>
                    )}

                    {formSubmitted && !otpSubmitted && (
                        <>
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-800">
                                    Verify Your Email
                                </h3>
                                <p className="text-gray-600 mt-4">
                                    An OTP has been sent to your email. Please
                                    enter it below to verify your email address.
                                </p>
                            </div>
                            <form
                                className="w-full space-y-4"
                                onSubmit={handleOtpSubmit}>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="otp"
                                        className="text-sm font-semibold text-gray-700">
                                        Enter OTP
                                    </label>
                                    <input
                                        type="text"
                                        id="otp"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        className="border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:ring-2 focus:ring-purple-500"
                                        placeholder="Enter OTP"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition">
                                    Verify OTP
                                </button>
                            </form>
                        </>
                    )}

                    {otpSubmitted && (
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-800">
                                Thank You!
                            </h3>
                            <p className="text-gray-600 mt-4">
                                Your information has been verified. We will
                                contact you soon with the counseling schedule.
                                Stay tuned!
                            </p>
                        </div>
                    )}
                </HzModal>
            )} */}
        </div>
    );
};

export default TrainingPartner;
