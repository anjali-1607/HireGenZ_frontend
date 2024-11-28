import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const CandidateHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="relative bg-white shadow-lg">
            {/* Desktop Header */}
            <div className="flex items-center justify-between px-8 py-4">
                {/* Logo */}
                <Link to="/">
                    <img src={logo} alt="HireGeni Logo" className="h-6" />
                </Link>

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
                <button className="hidden md:block px-6 py-2 bg-purple-700 text-white rounded-lg font-medium">
                    Login
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
                            Login
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default CandidateHeader;
