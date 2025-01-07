import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/hiregenzo-logo-final.png";

const CandidateHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
    const [isScrolled, setIsScrolled] = useState(false); // State to track if the header should have a white background
    const [activeSection, setActiveSection] = useState("home"); // State to track the active section

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Smooth scrolling to sections
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsMenuOpen(false); // Close the menu on mobile after navigation
    };

    // Handle scroll to toggle header background and active link
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Update active section based on scroll position
            const sections = [
                "home",
                "upload-resume",
                "features",
                "faqs",
                "post_a_job",
                "training-partner",
                "contact-us",
            ];
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
        <header
            className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
                isScrolled ? "bg-white shadow-lg" : "bg-transparent"
            }`}>
            <div className="flex items-center px-8 py-4">
                {/* Logo */}
                <Link to="/">
                    <img src={logo} alt="HireGenZo Logo" className="h-8" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-8 ml-auto lg:mr-20">
                    <a
                        onClick={() => scrollToSection("home")}
                        className={`cursor-pointer font-medium ${
                            activeSection === "home"
                                ? "text-purple-700 font-extrabold"
                                : "text-gray-600 hover:text-purple-700"
                        }`}>
                        Home
                    </a>
                    <a
                        onClick={() => scrollToSection("upload-resume")}
                        className={`cursor-pointer font-medium ${
                            activeSection === "upload-resume"
                                ? "text-purple-700 font-bold"
                                : "text-gray-600 hover:text-purple-700"
                        }`}>
                        Apply for a Job
                    </a>
                    <a
                        onClick={() => scrollToSection("features")}
                        className={`cursor-pointer font-medium ${
                            activeSection === "features"
                                ? "text-purple-700 font-bold"
                                : "text-gray-600 hover:text-purple-700"
                        }`}>
                        Features
                    </a>
                    <a
                        onClick={() => scrollToSection("faqs")}
                        className={`cursor-pointer font-medium ${
                            activeSection === "faqs"
                                ? "text-purple-700 font-bold"
                                : "text-gray-600 hover:text-purple-700"
                        }`}>
                        FAQs
                    </a>
                    <a
                        onClick={() => scrollToSection("post_a_job")}
                        className={`cursor-pointer font-medium ${
                            activeSection === "post_a_job"
                                ? "text-purple-700"
                                : "text-gray-600 hover:text-purple-700"
                        }`}>
                        Post a Job
                    </a>
                    <div className="relative">
                        <a
                            onClick={() => scrollToSection("training-partner")}
                            className={`cursor-pointer font-medium ${
                                activeSection === "training-partner"
                                    ? "text-purple-700"
                                    : "text-gray-600 hover:text-purple-700"
                            }`}>
                            Our Training Partner
                        </a>
                        {/* Animated Badge */}
                        <span className="absolute -top-3 -right-13 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                            NEW
                        </span>
                    </div>
                    {/* <a
                        onClick={() => scrollToSection("contact-us")}
                        className={`cursor-pointer font-medium ml-5  ${
                            activeSection === "post_a_job"
                                ? "text-purple-700"
                                : "text-gray-600 hover:text-purple-700"
                        }`}>
                        Contact Us
                    </a> */}
                </nav>

                {/* Mobile & Tablet Hamburger Menu */}
                <button
                    className="block lg:hidden text-purple-700 ml-auto"
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

            {/* Mobile & Tablet Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg">
                    <nav className="flex flex-col items-center gap-4 py-4">
                        <a
                            onClick={() => scrollToSection("home")}
                            className={`cursor-pointer font-medium ${
                                activeSection === "home"
                                    ? "text-purple-700"
                                    : "text-gray-600 hover:text-purple-700"
                            }`}>
                            Home
                        </a>
                        <a
                            onClick={() => scrollToSection("upload-resume")}
                            className={`cursor-pointer font-medium ${
                                activeSection === "upload-resume"
                                    ? "text-purple-700"
                                    : "text-gray-600 hover:text-purple-700"
                            }`}>
                            Apply for a Job
                        </a>
                        <a
                            onClick={() => scrollToSection("features")}
                            className={`cursor-pointer font-medium ${
                                activeSection === "features"
                                    ? "text-purple-700"
                                    : "text-gray-600 hover:text-purple-700"
                            }`}>
                            Features
                        </a>
                        <a
                            onClick={() => scrollToSection("faqs")}
                            className={`cursor-pointer font-medium ${
                                activeSection === "faqs"
                                    ? "text-purple-700"
                                    : "text-gray-600 hover:text-purple-700"
                            }`}>
                            FAQs
                        </a>
                        <a
                            onClick={() => scrollToSection("post_a_job")}
                            className={`cursor-pointer font-medium ${
                                activeSection === "post_a_job"
                                    ? "text-purple-700"
                                    : "text-gray-600 hover:text-purple-700"
                            }`}>
                            Post a Job
                        </a>
                        <div className="relative">
                            <a
                                onClick={() =>
                                    scrollToSection("training-partner")
                                }
                                className={`cursor-pointer font-medium ${
                                    activeSection === "training-partner"
                                        ? "text-purple-700"
                                        : "text-gray-600 hover:text-purple-700"
                                }`}>
                                Our Training Partner
                            </a>
                            {/* Animated Badge */}
                            <span className="absolute -top-3 right-15 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                                NEW
                            </span>
                        </div>
                        <a
                            onClick={() => scrollToSection("contact-us")}
                            className={`cursor-pointer font-medium ${
                                activeSection === "post_a_job"
                                    ? "text-purple-700"
                                    : "text-gray-600 hover:text-purple-700"
                            }`}>
                            Contact Us
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default CandidateHeader;
