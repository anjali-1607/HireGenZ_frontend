import React from "react";
import logo from "../assets/hiregenzo-logo-final.png";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-600">
            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
                {/* Left Section */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center mb-4">
                        <img src={logo} alt="HireGenZo Logo" className="h-10" />
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
                        {/* Social Icons Below Contact */}
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
                                href="#linkedin"
                                className="text-gray-600 hover:text-gray-800"
                                aria-label="LinkedIn">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="flex flex-col items-center md:items-start lg:ml-20">
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
                            <a href="#product" className="hover:underline">
                                Product
                            </a>
                        </li>
                        <li>
                            <a href="#careers" className="hover:underline">
                                Careers
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Support Section */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-md font-semibold text-gray-700 uppercase mb-4">
                        Support
                    </h3>
                    <ul className="space-y-2 text-md">
                        <li>
                            <a href="#company" className="hover:underline">
                                Company
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-300 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
                    <p className="text-md text-center">
                        © 2024 HireGenZo. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
