import React, { useEffect, useRef, useState } from "react";
import RobotImage from "../assets/robot.png"; // Correct path to robot image.
import { FaQuoteLeft } from "react-icons/fa"; // Import for purple quote icon.
import HzModal from "./HzModal"; // Import modal component
import Select from "react-select"; // Import react-select
import { usePublicCreateItem } from "../hooks/actions/mutation/usePublicCreateItem";
import { APIENDPOINT } from "../utils/api";
import { toast } from "react-toastify";

const RobotSection = () => {
    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(1);
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [formData, setFormData] = useState({
        email: "",
        otp: "",
        expected_salary_min: "",
        expected_salary_max: "",
        preferred_locations: [],
        employment_type: "",
        job_type: "",
    });

    const uploadMutation = usePublicCreateItem(APIENDPOINT.UPLOAD_RESUME);
    const verifyMutation = usePublicCreateItem(APIENDPOINT.VERIFY_EMAIL);

    const locationOptions = [
        { value: "Indore", label: "Indore" },
        { value: "Bhopal", label: "Bhopal" },
        { value: "Delhi", label: "Delhi" },
        { value: "Mumbai", label: "Mumbai" },
        { value: "Pune", label: "Pune" },
    ];

    const handleOpenModal = () => {
        setShowModal(true);
        setStep(1);
        setIsFileUploaded(false);
        setSelectedFile(null);
    };

    const handleCloseModal = () => setShowModal(false);

    const handleNextStep = () => {
        if (step === 1 && selectedFile) {
            const form_Data = new FormData();
            form_Data.append("resume", selectedFile);

            uploadMutation.mutate(form_Data, {
                onSuccess: (data) => {
                    setFormData({ ...formData, email: data.data.email });
                    setStep(step + 1);
                },
                onError: (err) => {
                    toast.error("Error uploading resume.");
                },
            });
        } else {
            setStep(step + 1);
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setIsFileUploaded(true);
            setSelectedFile(e.target.files[0]);
        } else {
            setIsFileUploaded(false);
            setSelectedFile(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            email: formData.email,
            otp: formData.otp,
            preferences: {
                expected_salary_min: parseFloat(formData.expected_salary_min),
                expected_salary_max: parseFloat(formData.expected_salary_max),
                preferred_locations: formData.preferred_locations.map(
                    (loc) => loc.value
                ),
                employment_type: formData.employment_type,
                job_type: formData.job_type,
            },
        };

        verifyMutation.mutate(payload, {
            onSuccess: () => {
                toast.success("Successfully uploaded Resume and Preferences");
                setShowModal(false);
            },
            onError: () => {
                toast.error("Something went wrong!");
            },
        });
    };

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
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

    return (
        <>
            <section
                id="upload-resume"
                className="bg-gradient-to-br from-white via-purple-200 to-pink-200 pt-12 px-6 lg:px-48 lg:pb-0 lg:mb-[-20px]">
                <div className="container mx-auto flex flex-col-reverse lg:flex-row items-start lg:items-start lg:gap-4 md:items-center sm:items-center">
                    {/* Robot Image */}
                    <div
                        ref={sectionRef}
                        className={`lg:w-1/2 flex justify-center md:justify-center lg:justify-center mt-8 lg:mt-0 mb-0 ${
                            isVisible ? " animate-slideInLeft" : "opacity-0"
                        }`}>
                        <img
                            src={RobotImage}
                            alt="AI Robot"
                            className="w-full max-w-sm lg:max-w-md animate-float"
                        />
                    </div>

                    {/* Text Content */}
                    <div
                        ref={sectionRef}
                        className={`lg:w-1/2 flex flex-col justify-start lg:mt-5 text-center lg:text-left lg:mr-9 ${
                            isVisible ? "animate-slideInRight" : "opacity-0"
                        } `}>
                        <div className="text-purple-600 text-4xl mb-4">
                            <FaQuoteLeft />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                            Let <span className="text-purple-600">AI</span>{" "}
                            Handle Your Job Hunt
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Upload your resume, and our{" "}
                            <span className="text-purple-600 font-medium">
                                AI-powered system
                            </span>{" "}
                            will match you with the best opportunities, apply on
                            your behalf, and keep you updated every step of the
                            way.
                        </p>
                        <div className="flex justify-center lg:justify-start gap-4">
                            <button
                                onClick={handleOpenModal}
                                className="bg-gradient-to-r from-[#bd76fa] to-[#ee89b7] text-white px-6 py-3 rounded-lg text-sm hover:opacity-90 transition-transform transform hover:scale-105 animate-fadeIn delay-300">
                                Apply for a Job
                            </button>
                            <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {showModal && (
                <HzModal className="w-[50%] h-[70%] relative flex items-center justify-center">
                    <button
                        onClick={handleCloseModal}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">
                        &#10005;
                    </button>
                    <div className="w-full h-full flex flex-col items-center">
                        {step === 1 && (
                            <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 via-purple-300 to-pink-200 rounded-lg">
                                <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-purple-800">
                                    Upload Your Resume
                                </h2>
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="w-full max-w-sm px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 bg-white text-gray-700"
                                />
                                <p className="text-sm text-gray-700 mb-6 text-center">
                                    Supported formats: PDF, DOC, DOCX
                                </p>
                                <button
                                    onClick={handleNextStep}
                                    disabled={
                                        !isFileUploaded ||
                                        uploadMutation.isLoading
                                    }
                                    className={`px-6 py-3 text-lg rounded-lg hover:bg-purple-800 ${
                                        isFileUploaded
                                            ? "bg-purple-700 text-white"
                                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}>
                                    {uploadMutation.isLoading
                                        ? "Loading..."
                                        : "Next"}
                                </button>
                            </div>
                        )}

                        {step === 2 && (
                            <form
                                onSubmit={handleSubmit}
                                className="w-full p-10">
                                <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
                                    Verify Your Email and Set Preferences
                                </h2>
                                <p className="text-sm text-gray-700 mb-4 text-center">
                                    OTP has been sent to your registered email:{" "}
                                    <strong> {formData.email} </strong>
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Enter OTP{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.otp}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    otp: e.target.value,
                                                })
                                            }
                                            placeholder="Enter OTP"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Preferred Locations{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <Select
                                            options={locationOptions}
                                            isMulti
                                            placeholder="Select preferred locations"
                                            className="w-full"
                                            required
                                            onChange={(value) =>
                                                console.log("value", value)
                                            }
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Expected Salary Range (Min){" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Enter minimum salary"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    expected_salary_min:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Expected Salary Range (Max){" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Enter maximum salary"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    expected_salary_max:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Employment Type{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <select
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    employment_type:
                                                        e.target.value,
                                                })
                                            }>
                                            <option value="FULL_TIME">
                                                Full-Time
                                            </option>
                                            <option value="PART_TIME">
                                                Part-Time
                                            </option>
                                            <option value="INTERNSHIP">
                                                Internship
                                            </option>
                                            <option value="CONTRACT">
                                                Contract
                                            </option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Job Type{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <select
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    job_type: e.target.value,
                                                })
                                            }>
                                            <option value="WFO">
                                                Work From Office (WFO)
                                            </option>
                                            <option value="WFH">
                                                Work From Home (WFH)
                                            </option>
                                            <option value="HYBRID">
                                                Hybrid
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-6">
                                    <button
                                        type="button"
                                        onClick={handleCloseModal}
                                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">
                                        {verifyMutation.isLoading
                                            ? "loading..."
                                            : "Submit"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </HzModal>
            )}
        </>
    );
};

export default RobotSection;
