import React, { useState } from "react";
import logo from "../assets/logo.png"; // Adjust the path based on your folder structure

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="flex justify-between items-center px-8 py-4">
                {/* Logo */}
                <img src={logo} alt="HireGeni Logo" className="h-6" />

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-4">
                    <a
                        href="#post-job"
                        className="text-gray-600 hover:text-purple-700">
                        Post a Job
                    </a>
                    <a
                        href="#find-cv"
                        className="text-gray-600 hover:text-purple-700">
                        Find CVs
                    </a>
                </nav>

                {/* Desktop Login Button */}
                <button className="hidden md:block px-4 py-2 bg-purple-700 text-white rounded-lg">
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
                            href="#post-job"
                            className="text-gray-600 hover:text-purple-700"
                            onClick={() => setIsMenuOpen(false)}>
                            Post a Job
                        </a>
                        <a
                            href="#find-cv"
                            className="text-gray-600 hover:text-purple-700"
                            onClick={() => setIsMenuOpen(false)}>
                            Find CVs
                        </a>
                        <button
                            className="px-4 py-2 bg-purple-700 text-white rounded-lg"
                            onClick={() => setIsMenuOpen(false)}>
                            Login
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
