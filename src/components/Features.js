import React, { useState, useRef, useEffect } from "react";

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
                "Let HiregenZo advanced AI match you with top-tier talent in no time.",
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
            { threshold: 0.3 } // Trigger animation when 30% of the section is visible
        );

        const featureElements =
            sectionRef.current.querySelectorAll("[data-index]");
        featureElements.forEach((element) => observer.observe(element));

        return () => {
            featureElements.forEach((element) => observer.unobserve(element));
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-16 sm:mx-20 md:mx-5 lg:mx-40">
            {features.map((feature, index) => (
                <div
                    key={index}
                    data-index={index}
                    className={`relative p-6 border rounded-lg bg-gradient-to-br from-white to-purple-50 transition-all duration-1000 ease-out ${
                        visibleIndexes.includes(index)
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }} // Staggered animation
                >
                    {/* Circle with Number */}
                    <div className="absolute -top-4 left-4 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-400 text-white font-bold flex items-center justify-center rounded-full">
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
