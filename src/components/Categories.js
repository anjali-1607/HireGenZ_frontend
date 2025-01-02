import React from "react";
import { FaCode, FaBullhorn, FaPaintBrush, FaHeadset } from "react-icons/fa";

const Categories = () => {
    const categories = [
        {
            name: "Development & IT",
            jobs: 16,
            icon: <FaCode size={30} className="text-purple-700" />, // Increased size using `size` prop
            description: "Frontend, backend, web and app developer jobs",
        },
        {
            name: "Marketing and Sales",
            jobs: 16,
            icon: <FaBullhorn size={30} className="text-purple-700" />, // Increased size using `size` prop
            description: "Marketing, advertising, and sales jobs",
        },
        {
            name: "Design & Creative",
            jobs: 16,
            icon: <FaPaintBrush size={30} className="text-purple-700" />, // Increased size using `size` prop
            description: "Graphic, UI/UX, and creative design jobs",
        },
        {
            name: "Customer Services",
            jobs: 16,
            icon: <FaHeadset size={30} className="text-purple-700" />, // Increased size using `size` prop
            description: "Customer support and service representative jobs",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-purple-100 to-pink-100 lg:px-36 md:px-0">
            <h2 className="text-2xl font-bold text-center text-gray-800">
                Popular Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 mt-8">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center bg-white border rounded-lg shadow-md p-6">
                        {/* Circular Icon */}
                        <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-white to-pink-100 rounded-full mb-4">
                            {category.icon}
                        </div>
                        {/* Category Name */}
                        <h3 className="text-lg font-semibold text-purple-700">
                            {category.name}
                        </h3>
                        {/* Job Count */}
                        <p className="mt-2 text-gray-600">
                            {category.jobs} Resumes
                        </p>
                        {/* Description */}
                        <p className="mt-2 text-gray-500 text-sm">
                            {category.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
