import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/hiregenzo-logo-final.png";

const CandidateHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility
    const [isScrolled, setIsScrolled] = useState(false); // State to track if the header should have a white background

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle scroll to toggle header background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
                isScrolled ? "bg-white shadow-lg" : "bg-transparent"
            }`}>
            {/* Desktop Header */}
            <div className="flex items-center justify-between px-8 py-4">
                {/* Logo */}
                <Link to="/">
                    <img src={logo} alt="HireGeni Logo" className="h-8" />
                </Link>
                {/* <h2 className="text-xl font-bold text-gray-800">HIREGENZO</h2> */}

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
                    <Link
                        to="/"
                        className="text-gray-600 hover:text-purple-700 font-medium">
                        Home
                    </Link>
                    <Link
                        to="/upload-resume"
                        className="text-gray-600 hover:text-purple-700 font-medium">
                        Upload Resume
                    </Link>
                    <Link
                        to="/features"
                        className="text-gray-600 hover:text-purple-700 font-medium">
                        Features
                    </Link>
                    <Link
                        to="/faqs"
                        className="text-gray-600 hover:text-purple-700 font-medium">
                        FAQs
                    </Link>
                </nav>

                {/* Login Button */}
                <button className="hidden md:block px-6 py-2 bg-purple-700 text-white rounded-lg font-medium ">
                    Upload
                </button>

                {/* Mobile Hamburger Menu */}
                <button
                    className="block md:hidden text-purple-700"
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
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
                    <nav className="flex flex-col items-center gap-4 py-4">
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-purple-700 font-medium"
                            onClick={toggleMenu}>
                            Home
                        </Link>
                        <Link
                            to="/upload-resume"
                            className="text-gray-600 hover:text-purple-700 font-medium"
                            onClick={toggleMenu}>
                            Upload Resume
                        </Link>
                        <Link
                            to="/features"
                            className="text-gray-600 hover:text-purple-700 font-medium"
                            onClick={toggleMenu}>
                            Features
                        </Link>
                        <Link
                            to="/faqs"
                            className="text-gray-600 hover:text-purple-700 font-medium"
                            onClick={toggleMenu}>
                            FAQs
                        </Link>
                        <button
                            className="px-6 py-2 bg-purple-700 text-white rounded-lg font-medium"
                            onClick={toggleMenu}>
                            Upload
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default CandidateHeader;
