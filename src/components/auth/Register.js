import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { usePublicCreateItem } from "../../hooks/actions/mutation/usePublicCreateItem";
import { APIENDPOINT } from "../../utils/api";
import { toast } from "react-toastify";

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company_name: "",
        website_url: "",
        otp: "",
    });
    const [step, setStep] = useState(1); // Step 1: Form, Step 2: OTP
    const [otp, setOtp] = useState(""); // User input OTP
    const [generatedOtp, setGeneratedOtp] = useState(""); // Simulated OTP
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const registerMutation = usePublicCreateItem(
        APIENDPOINT.REGISTER_RECRUITER
    );
    const verifyMutation = usePublicCreateItem(
        APIENDPOINT.VERIFY_REGISTER_RECRUITER
    );

    const handleSendOtp = (e) => {
        e.preventDefault();
        registerMutation.mutate(formData, {
            onSuccess: (data) => {
                setStep(2);
            },
            onError: (err) => {
                toast.error(err);
            },
        });
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        verifyMutation.mutate(formData, {
            onSuccess: (data) => {
                setStep(2);
            },
            onError: (err) => {
                toast.error(err);
            },
        });
    };

    return (
        <>
            <Header />
            <div className="fixed inset-0 bg-gray-100 flex items-center justify-center mt-10">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm relative">
                    {step === 1 ? (
                        <>
                            {/* Step 1: Registration Form */}
                            <h2 className="text-xl font-bold text-gray-800 mb-4">
                                Register Your Account
                            </h2>
                            <form onSubmit={handleSendOtp}>
                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-700 font-semibold mb-2">
                                        Name{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                        placeholder="Enter your working email"
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                {/* Working Email */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="workingEmail"
                                        className="block text-gray-700 font-semibold mb-2">
                                        Working Email{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="workingEmail"
                                        name="workingEmail"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                        placeholder="Enter your working email"
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                {/* Company's Name */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="companyName"
                                        className="block text-gray-700 font-semibold mb-2">
                                        Company's Name{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                        placeholder="Enter your company's name"
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                company_name: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                {/* Company's URL */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="companyUrl"
                                        className="block text-gray-700 font-semibold mb-2">
                                        Company's URL{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="url"
                                        id="companyUrl"
                                        name="companyUrl"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                        placeholder="Enter your company's URL"
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                website_url: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                {/* Send OTP Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-purple-700 text-white rounded-lg px-4 py-3 font-medium mt-4 flex items-center justify-center">
                                    {registerMutation.isLoading ? (
                                        <span className="loader"></span>
                                    ) : (
                                        "Send OTP"
                                    )}
                                </button>
                            </form>
                        </>
                    ) : (
                        <>
                            {/* Step 2: OTP Input */}
                            <h2 className="text-xl font-bold text-gray-800 mb-4">
                                Verify Your OTP
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Enter the OTP sent to your email address:{" "}
                                <span className="font-semibold">
                                    {formData.email}
                                </span>
                            </p>
                            <form onSubmit={handleVerifyOtp}>
                                {/* OTP Input */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="otp"
                                        className="block text-gray-700 font-semibold mb-2">
                                        OTP{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="otp"
                                        name="otp"
                                        maxLength="6"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500 text-center tracking-widest"
                                        placeholder="Enter OTP"
                                        value={formData.otp}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                otp: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                {/* Verify OTP Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-purple-700 text-white rounded-lg px-4 py-3 font-medium mt-4 flex items-center justify-center">
                                    {isLoading ? (
                                        <span className="loader"></span>
                                    ) : (
                                        "Verify OTP"
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                    {/* Login Redirect */}
                    <p className="text-sm text-gray-600 text-center mt-4">
                        Already have an account?{" "}
                        <button
                            onClick={() => {
                                navigate("/recruiters/login");
                            }}
                            className="text-purple-700">
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
}
