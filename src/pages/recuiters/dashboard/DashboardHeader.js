import React, { useState } from "react";
import logo from "../../../assets/hiregenzo-logo-final.png";

export default function DashboardHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Header */}
            <header className="flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8" />
                </div>

                {/* Navbar for Desktop */}
                <nav className="hidden lg:flex bg-white shadow-lg rounded-lg px-6 py-2 w-[70%] justify-between">
                    <div className="flex gap-6">
                        <button className="text-gray-500 hover:text-black font-medium">
                            Dashboard
                        </button>
                        <button className="text-black font-medium">
                            People
                        </button>
                        <button className="text-gray-500 hover:text-black font-medium">
                            Hiring
                        </button>
                        <button className="text-gray-500 hover:text-black font-medium">
                            Devices
                        </button>
                        <button className="text-gray-500 hover:text-black font-medium">
                            Apps
                        </button>
                    </div>
                    <div className="flex gap-4 items-center">
                        <button className="text-gray-500 hover:text-black">
                            <i className="fas fa-calendar"></i>
                        </button>
                        <button className="text-gray-500 hover:text-black">
                            <i className="fas fa-cog"></i>
                        </button>
                        <button className="text-gray-500 hover:text-black">
                            <i className="fas fa-user-circle"></i>
                        </button>
                    </div>
                </nav>

                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-black text-3xl"
                        aria-label="Toggle Menu">
                        &#9776; {/* Unicode for three-line menu */}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                    <div className="absolute top-0 right-0 w-64 bg-white h-full shadow-lg p-6">
                        {/* Close Button */}
                        <button
                            onClick={toggleMenu}
                            className="text-black text-3xl mb-4"
                            aria-label="Close Menu">
                            &times; {/* Unicode for X (close) icon */}
                        </button>

                        {/* Menu Items */}
                        <div className="flex flex-col gap-4">
                            <button className="text-gray-500 hover:text-black font-medium">
                                Dashboard
                            </button>
                            <button className="text-black font-medium">
                                People
                            </button>
                            <button className="text-gray-500 hover:text-black font-medium">
                                Hiring
                            </button>
                            <button className="text-gray-500 hover:text-black font-medium">
                                Devices
                            </button>
                            <button className="text-gray-500 hover:text-black font-medium">
                                Apps
                            </button>
                        </div>
                        <div className="flex gap-4 items-center mt-6">
                            <button className="text-gray-500 hover:text-black">
                                <i className="fas fa-calendar"></i>
                            </button>
                            <button className="text-gray-500 hover:text-black">
                                <i className="fas fa-cog"></i>
                            </button>
                            <button className="text-gray-500 hover:text-black">
                                <i className="fas fa-user-circle"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
