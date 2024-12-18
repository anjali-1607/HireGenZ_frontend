import React, { useState } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { usePublicCreateItem } from "../../hooks/actions/mutation/usePublicCreateItem";
import { APIENDPOINT } from "../../utils/api";
import { toast } from "react-toastify";
import { setAuthToken } from "../../utils/Auth";

export default function Login() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // Step 1: Email input, Step 2: OTP input
    const [formData, setFormData] = useState({
        email: "",
        otp: "",
    });

    const loginSendOtpMutation = usePublicCreateItem(
        APIENDPOINT.LOGIN_RECRUITER
    );

    const verifyMutation = usePublicCreateItem(APIENDPOINT.LOGIN_WITH_OTP);

    const handleSendOtp = (e) => {
        e.preventDefault();
        loginSendOtpMutation.mutate(formData, {
            onSuccess: (data) => {
                setStep(2);
            },
            onError: (err) => {
                toast.error(err.error);
            },
        });
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        verifyMutation.mutate(formData, {
            onSuccess: (data) => {
                console.log("data", data);
                localStorage.setItem("access_token", data.tokens.access);
                setAuthToken(data.tokens.access);

                navigate("/recruiters/dashboard");
            },
            onError: (err) => {
                toast.error("Invalid or expired OTP");
            },
        });
    };

    return (
        <>
            <Header />
            <div className="fixed inset-0 bg-gray-100 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm relative">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                        {step === 1
                            ? "Login into your account"
                            : "Enter OTP to continue"}
                    </h2>

                    {step === 1 ? (
                        <>
                            <p className="text-gray-600 mb-6">
                                Please enter your email address to receive an
                                OTP.
                            </p>
                            <form onSubmit={handleSendOtp}>
                                {/* Email Address */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-700 font-semibold mb-2">
                                        Email Address{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                {/* Send OTP Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-purple-700 text-white rounded-lg px-4 py-3 font-medium mt-4">
                                    {loginSendOtpMutation.isLoading ? (
                                        <span className="loader"></span>
                                    ) : (
                                        "Send OTP"
                                    )}
                                </button>
                            </form>
                            <p className="text-sm text-gray-600 text-center mt-4">
                                Don't have an account?{" "}
                                <button
                                    onClick={() => {
                                        navigate("/recruiters/register");
                                    }}
                                    className="text-purple-700">
                                    Register here
                                </button>
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="text-gray-600 mb-6">
                                We've sent an OTP to your email. Please enter it
                                below.
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
                                        maxLength={6}
                                        value={formData.otp}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                otp: e.target.value,
                                            })
                                        }
                                        required
                                        className="w-full text-center tracking-widest border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                        placeholder="Enter OTP"
                                    />
                                </div>
                                {/* Submit OTP Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-purple-700 text-white rounded-lg px-4 py-3 font-medium mt-4">
                                    {verifyMutation.isLoading ? (
                                        <span className="loader"></span>
                                    ) : (
                                        " Submit OTP"
                                    )}
                                </button>
                            </form>
                            <p className="text-sm text-gray-600 text-center mt-4">
                                Didn't receive the OTP?{" "}
                                <button
                                    onClick={() => {
                                        setStep(1);
                                        alert("Resending OTP...");
                                    }}
                                    className="text-purple-700">
                                    Resend OTP
                                </button>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
