import React, { useState, useEffect, useRef } from "react";
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

    const [visibleIndexes, setVisibleIndexes] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(
                            entry.target.getAttribute("data-index")
                        );
                        setVisibleIndexes((prev) => [
                            ...new Set([...prev, index]),
                        ]);
                    }
                });
            },
            { threshold: 0.3 } // Trigger animation when 30% of the card is visible
        );

        const categoryElements =
            sectionRef.current.querySelectorAll("[data-index]");
        categoryElements.forEach((element) => observer.observe(element));

        return () => {
            categoryElements.forEach((element) => observer.unobserve(element));
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 bg-gradient-to-br from-purple-100 to-pink-100 lg:px-36 md:px-0">
            <h2 className="text-2xl font-bold text-center text-gray-800">
                Popular Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 mt-8">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        data-index={index}
                        className={`flex flex-col items-center text-center bg-white border rounded-lg shadow-md p-6 transition-all duration-1000 ease-out ${
                            visibleIndexes.includes(index)
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }} // Staggered animation
                    >
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
