import React, { useEffect, useState } from "react";
import logo from "../assets/hiregenzo-logo-final.png"; // Adjust the path based on your folder structure
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    // const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
    // const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] =
    //     useState(false);

    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // const toggleLoginPopup = () => {
    //     setIsLoginPopupOpen(!isLoginPopupOpen);
    // };

    // const toggleRegistrationPopup = () => {
    //     setIsRegistrationPopupOpen(!isRegistrationPopupOpen);
    // };

    // const handleSendOtp = (e) => {
    //     e.preventDefault();
    //     alert("OTP Sent to your email!");
    //     setIsLoginPopupOpen(false); // Close login popup after sending OTP
    // };

    // const handleRegister = (e) => {
    //     e.preventDefault();
    //     alert("Registration Successful!");
    //     setIsRegistrationPopupOpen(false); // Close registration popup after submission
    // };

    useEffect(() => {
        const handleScroll = () => {
            // Update active section based on scroll position
            const sections = ["home", "contact-us"];
            const offsets = sections.map((id) => {
                const element = document.getElementById(id);
                return element ? element.offsetTop : 0;
            });

            const scrollPosition = window.scrollY + window.innerHeight / 2;
            for (let i = 0; i < sections.length; i++) {
                if (
                    scrollPosition >= offsets[i] &&
                    (i === sections.length - 1 ||
                        scrollPosition < offsets[i + 1])
                ) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* Header Section */}
            <header className="sticky top-0 z-50 bg-white shadow-md">
                <div className="flex justify-between items-center px-8 py-4">
                    {/* Logo */}
                    {/* <img src={logo} alt="HireGeni Logo" className="h-6" /> */}
                    <Link to="/recruiters">
                        <img src={logo} alt="HireGenZo Logo" className="h-8" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-4">
                        <a
                            href="/recruiters"
                            className="text-gray-600 hover:text-purple-700">
                            Home
                        </a>
                        <a
                            href="job-description"
                            className="text-gray-600 hover:text-purple-700">
                            Post a Job
                        </a>
                        <a
                            href="/"
                            className="text-gray-600 hover:text-purple-700">
                            Jobseeker
                        </a>
                        <a
                            href="#contact-us"
                            className={`cursor-pointer font-medium ${
                                activeSection === "post_a_job"
                                    ? "text-purple-700"
                                    : "text-gray-600 hover:text-purple-700"
                            }`}>
                            Contact Us
                        </a>
                    </nav>

                    {/* Desktop Login Button */}
                    <button
                        className="hidden md:block px-4 py-2  bg-gradient-to-r from-[#bd76fa] to-[#ee89b7] hover:opacity-90 hover:scale-105 text-white text-md md:text-md rounded-lg shadow-lg transition-transform transform animate-fadeIn delay-300"
                        onClick={() => navigate("/recruiters/login")}>
                        Login
                    </button>

                    {/* Hamburger Menu for Mobile */}
                    <button
                        className="block md:hidden text-purple-700 focus:outline-none"
                        onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
                        <nav className="flex flex-col items-center gap-4 py-4">
                            <a
                                href="/recruiters"
                                className="text-gray-600 hover:text-purple-700"
                                onClick={() => setIsMenuOpen(false)}>
                                Post a Job
                            </a>
                            <a
                                href="/"
                                className="text-gray-600 hover:text-purple-700"
                                onClick={() => setIsMenuOpen(false)}>
                                Jobseeker
                            </a>
                            <a
                                href="#contact-us"
                                className={`cursor-pointer font-medium ${
                                    activeSection === "post_a_job"
                                        ? "text-purple-700"
                                        : "text-gray-600 hover:text-purple-700"
                                }`}>
                                Contact Us
                            </a>
                            <button
                                className="px-4 py-2  bg-gradient-to-r from-[#bd76fa] to-[#ee89b7] hover:opacity-90 hover:scale-105 text-white text-md md:text-md rounded-lg shadow-lg transition-transform transform animate-fadeIn delay-300"
                                onClick={() => {
                                    navigate("/recruiters/login");
                                }}>
                                Login
                            </button>
                        </nav>
                    </div>
                )}
            </header>

            {/* Login Popup */}
            {/* {isLoginPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm relative">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                            Verify Your Email
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Please enter your email address to receive an OTP.
                        </p>
                        <form onSubmit={handleSendOtp}>
                           
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-semibold mb-2">
                                    Email Address{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                    placeholder="Enter your email address"
                                />
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full bg-purple-700 text-white rounded-lg px-4 py-3 font-medium mt-4">
                                Send OTP
                            </button>
                        </form>
                        <p className="text-sm text-gray-600 text-center mt-4">
                            Don't have an account?{" "}
                            <button
                                onClick={() => {
                                    toggleLoginPopup();
                                    toggleRegistrationPopup();
                                }}
                                className="text-purple-700">
                                Register here
                            </button>
                        </p>
                        <button
                            onClick={toggleLoginPopup}
                            className="absolute top-4 right-4 text-gray-600 hover:text-purple-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )} */}

            {/* Registration Popup */}
            {/* {isRegistrationPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm relative">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                            Register Your Account
                        </h2>
                        <form onSubmit={handleRegister}>
                            <div className="mb-4">
                                <label
                                    htmlFor="workingEmail"
                                    className="block text-gray-700 font-semibold mb-2">
                                    Working Email{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="workingEmail"
                                    name="workingEmail"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                    placeholder="Enter your working email"
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="companyName"
                                    className="block text-gray-700 font-semibold mb-2">
                                    Company's Name{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                    placeholder="Enter your company's name"
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="companyUrl"
                                    className="block text-gray-700 font-semibold mb-2">
                                    Company's URL{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="url"
                                    id="companyUrl"
                                    name="companyUrl"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                    placeholder="Enter your company's URL"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-purple-700 text-white rounded-lg px-4 py-3 font-medium mt-4">
                                Register
                            </button>
                        </form>
                        <p className="text-sm text-gray-600 text-center mt-4">
                            Already have an account?{" "}
                            <button
                                onClick={() => {
                                    toggleRegistrationPopup();
                                    toggleLoginPopup();
                                }}
                                className="text-purple-700">
                                Login
                            </button>
                        </p>
                        <button
                            onClick={toggleRegistrationPopup}
                            className="absolute top-4 right-4 text-gray-600 hover:text-purple-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )} */}
        </>
    );
};

export default Header;
