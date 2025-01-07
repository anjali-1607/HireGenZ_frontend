import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/hiregenzo-logo-final.png";
import ContactForm from "./ContactForm";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the footer is visible
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <footer
            ref={footerRef}
            className={`bg-gray-100 text-gray-600 transition-transform duration-1000 ${
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
            }`}>
            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 md:px-8 ">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                    {/* Company Info Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center mb-4">
                            <img
                                src={logo}
                                alt="HireGenZo Logo"
                                className="h-10"
                            />
                        </div>
                        <p className="text-md leading-6">
                            Vision to become a one-stop recruitment platform for
                            connecting candidates and recruiters efficiently.
                        </p>
                        <div className="mt-4">
                            <h3 className="text-md font-semibold text-gray-700 uppercase">
                                Contact
                            </h3>
                            <p className="text-md">writeus@hiregenzo.com</p>
                            <div className="flex space-x-4 mt-4">
                                <a
                                    href="#facebook"
                                    className="text-gray-600 hover:text-gray-800"
                                    aria-label="Facebook">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a
                                    href="#twitter"
                                    className="text-gray-600 hover:text-gray-800"
                                    aria-label="Twitter">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/hiregenzo/?viewAsMember=true"
                                    target="_blank"
                                    className="text-gray-600 hover:text-gray-800"
                                    aria-label="LinkedIn">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="flex flex-col items-center md:items-center lg:items-center">
                        <h3 className="text-md font-semibold text-gray-700 uppercase mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-md">
                            <li>
                                <a href="#home" className="hover:underline">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://ultraxpert.in/"
                                    target="_blank"
                                    className="hover:underline">
                                    Product
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact-us"
                                    className="hover:underline">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form Section */}
                    {/* <div className="flex flex-col items-center md:items-center lg:items-center">
                        <ContactForm /> 
                    </div> */}

                    {/* Support Section */}
                    <div className="flex flex-col items-center md:items-center lg:items-center">
                        <h3 className="text-md font-semibold text-gray-700 uppercase mb-4">
                            Support
                        </h3>
                        <ul className="space-y-2 text-md">
                            <li>
                                <a href="#home" className="hover:underline">
                                    Company
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact-us"
                                    className="hover:underline">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-300 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
                    <p className="text-md text-center">
                        © 2025 HireGenZo. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
