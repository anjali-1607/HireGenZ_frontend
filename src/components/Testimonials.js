import React from "react";
import { FaQuoteLeft } from "react-icons/fa"; // Importing the quote icon
import boyAvatar from "../assets/boy-avatar.png"; // Boy avatar
import girlAvatar from "../assets/girl-avatar.png"; // Girl avatar

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            quote: "This platform saved me hours of effort. The resume enhancement feature boosted my ATS score, and I started receiving interview calls from top companies in no time!",
            // name: "Rahul M., Marketing Specialist",
            avatar: boyAvatar, // Using boy avatar
            roundedClass: "rounded-r-full", // Right-rounded card
            flexDirection: "flex-row-reverse", // Image at the right
            quotePosition: "top-left", // Icon on top-left
        },
        {
            id: 2,
            quote: "As a recruiter, I found the perfect candidates in minutes. The AI-ranked profiles and skill test results made hiring decisions easy and efficient.",
            // name: "Meera K., HR Manager",
            avatar: girlAvatar, // Using girl avatar
            roundedClass: "rounded-l-full", // Left-rounded card
            flexDirection: "flex-row", // Image at the left
            quotePosition: "top-right", // Icon on top-right
        },
        {
            id: 3,
            quote: "The skill test feature is a game-changer. It validated my abilities and increased my confidence in securing interviews. Highly recommended!",
            // name: "Arushi T., Graphic Designer",
            avatar: girlAvatar, // Using girl avatar
            roundedClass: "rounded-l-full", // Left-rounded card
            flexDirection: "flex-row", // Image at the left
            quotePosition: "top-right", // Icon on top-right
        },
        {
            id: 4,
            quote: "The AI matched me to my dream job! I was so relieved to skip the tedious application process. The notifications kept me updated throughout.",
            // name: "John D., Data Analyst",
            avatar: boyAvatar, // Using boy avatar
            roundedClass: "rounded-r-full", // Right-rounded card
            flexDirection: "flex-row-reverse", // Image at the right
            quotePosition: "top-left", // Icon on top-left
        },
    ];

    return (
        <div className="bg-gradient-to-br from-purple-50 via-purple-100 to-pink-100 py-16 md:px-6 sm:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className={`relative bg-white shadow-lg ${testimonial.roundedClass} flex ${testimonial.flexDirection} items-center`}>
                        {/* Quote Icon */}
                        <div
                            className={`absolute ${
                                testimonial.quotePosition === "top-left"
                                    ? "top-[-10px] left-4"
                                    : "top-[-10px] right-4"
                            } text-purple-500 text-3xl`}>
                            <FaQuoteLeft />
                        </div>

                        {/* Avatar */}
                        <div className="w-1/3 flex justify-center items-center z-5">
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-40 h-40 rounded-full object-cover border-4 border-white"
                            />
                        </div>

                        {/* Content */}
                        <div className="w-2/3 p-6 z-5">
                            <p className="text-gray-700 italic mb-4">
                                {testimonial.quote}
                            </p>
                            <p className="text-black font-bold">
                                {testimonial.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
