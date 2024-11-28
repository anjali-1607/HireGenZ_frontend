import React from "react";

const Features = () => {
    const features = [
        {
            title: "Create your free account",
            description:
                "All you need is your email address to create an account and start building your job post.",
        },
        {
            title: "Build your job post",
            description:
                "Just add a title, description, and location to your job post, and you're ready to go.",
        },
        {
            title: "Post your job",
            description:
                "Let HireGeni's advanced AI match you with top-tier talent in no time.",
        },
    ];

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-16 sm:mx-20 md:mx-5 lg:mx-40">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="relative p-6 border rounded-lg shadow-md bg-white">
                    {/* Circle with Number */}
                    <div className="absolute -top-4 left-4 w-10 h-10 bg-purple-700 text-white font-bold flex items-center justify-center rounded-full">
                        {index + 1}
                    </div>
                    <h3 className="mt-8 text-xl font-semibold text-purple-700">
                        {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
            ))}
        </section>
    );
};

export default Features;
