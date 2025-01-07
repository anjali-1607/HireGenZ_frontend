import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/contactform.png";

const ContactForm = () => {
    const form = useRef();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        message: "",
        phone: "",
        subject: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [status, setStatus] = useState({
        loading: false,
        success: null,
        error: null,
    });

    useEffect(() => {
        // Intersection Observer to detect visibility
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } // Trigger animation when 30% of the component is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        // Check localStorage for submission timestamp
        const submissionTime = localStorage.getItem("formSubmissionTime");
        if (submissionTime) {
            const elapsedTime = Date.now() - parseInt(submissionTime, 10);
            const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
            if (elapsedTime < twentyFourHours) {
                setIsSubmitted(true);
            } else {
                // Clear the old timestamp if 24 hours have passed
                localStorage.removeItem("formSubmissionTime");
            }
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: null, error: null });

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        const data = {
            ...formData,
            current_year: new Date().getFullYear(),
        };

        emailjs.send(serviceID, templateID, data, publicKey).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                setStatus({
                    loading: false,
                    success: "Message sent successfully!",
                    error: null,
                });
                setFormData({
                    from_name: "",
                    from_email: "",
                    message: "",
                    phone: "",
                    subject: "",
                });
                setIsSubmitted(true); // Hide form and show thank you message

                // Store submission timestamp in localStorage
                localStorage.setItem(
                    "formSubmissionTime",
                    Date.now().toString()
                );
            },
            (err) => {
                console.error("FAILED...", err);
                setStatus({
                    loading: false,
                    success: null,
                    error: "Failed to send message. Please try again later.",
                });
            }
        );
    };

    return (
        <div
            ref={sectionRef}
            className={`bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center px-4 sm:px-6 lg:px-72 py-10 1024-1870:px-20 transition-all duration-1000 ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            }`}>
            <div className="rounded-2xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 p-10 lg:gap-24">
                {/* Left Section - Form */}
                <div
                    className={`transition-all duration-1000 ${
                        isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-10"
                    }`}>
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Contact Us
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Fill out the form below, and we'll get back to you as
                        soon as possible. We look forward to hearing from you!
                    </p>
                    {!isSubmitted ? (
                        <form
                            ref={form}
                            onSubmit={handleSubmit}
                            className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="from_name"
                                        value={formData.from_name}
                                        onChange={handleChange}
                                        className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.from_email}
                                        onChange={handleChange}
                                        name="from_email"
                                        className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-700">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
                                        placeholder="Enter subject"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        name="phone"
                                        className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
                                        placeholder="Enter phone number"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
                                    placeholder="Write your message here..."
                                    required></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className={`w-full sm:w-auto bg-gradient-to-r from-purple-400 to-pink-400 hover:opacity-90 text-white font-medium text-sm md:text-lg py-3 px-8 rounded-lg shadow-md focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 transition ${
                                        status.loading
                                            ? "opacity-50 cursor-not-allowed"
                                            : ""
                                    }`}
                                    disabled={status.loading}>
                                    {status.loading ? (
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                        </svg>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </div>
                            {status.error && (
                                <p className="text-red-500 text-center">
                                    {status.error}
                                </p>
                            )}
                        </form>
                    ) : (
                        <div className="text-center py-12">
                            <h2 className="text-2xl font-bold text-purple-600 mb-4">
                                Thank You!
                            </h2>
                            <p className="text-gray-600">
                                Your message has been successfully sent. We
                                appreciate your time and will get back to you
                                shortly.
                            </p>
                        </div>
                    )}
                </div>

                {/* Right Section - Contact Details + Illustration */}
                <div
                    className={`space-y-6 flex flex-col justify-center transition-all duration-1000 ${
                        isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-10"
                    }`}>
                    <img
                        src={contactImg}
                        alt="Contact Illustration"
                        className="w-full max-w-md mx-auto"
                    />
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800">
                            Our Office
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            <strong>HireGenZo Partnered with UltraXpert</strong>
                            <br />
                            337, PU-4 Scheme No. 54 Near Medanta Hospital,
                            Rasoma Square
                            <br />
                            A.B Road, Indore-10, MP, India
                            <br />
                            Pin Code: 452010
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                            Email Us
                        </h3>
                        <p className="text-gray-600 mt-2">
                            writeus@hiregenzo.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
