import React, { useState } from "react";
import preferenceImage from "../assets/preference.png"; // Import the preference image
import { usePublicCreateItem } from "../hooks/actions/mutation/usePublicCreateItem";
import { APIENDPOINT } from "../utils/api";
import Select from "react-select"; // Import react-select
import HzModal from "./HzModal";
import { toast } from "react-toastify";

const CandidateHero = () => {
    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(1);
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [otp, setOtp] = useState(""); // State for OTP input
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
                    console.log("data", data);
                    setFormData({ ...formData, email: data.data.email });
                    setStep(step + 1);
                },
                onError: (err) => {
                    console.log("err", err);
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
            onSuccess: (data) => {
                console.log("data", data);
                toast.success("Successfully uploaded Resume and Preference");
                setShowModal(false);
            },
            onError: (err) => {
                console.log("err", err);
                toast.error("Something went wrong!!");
            },
        });

        console.log("Payload to send:", payload);

        // Here, you can make an API call with the payload, for example:
        // someAPIMutation.mutate(payload);
    };

    const locationOptions = [
        { value: "Indore", label: "Indore" },
        { value: "Bhopal", label: "Bhopal" },
        { value: "Delhi", label: "Delhi" },
        { value: "Mumbai", label: "Mumbai" },
        { value: "Pune", label: "Pune" },
    ];

    return (
        <>
            <section
                id="upload-resume"
                className="bg-purple-100 flex flex-col items-center justify-center text-center py-16 px-8 pt-40">
                <h1 className="text-5xl font-bold text-gray-800 leading-snug">
                    From Upload to Offer:
                    <br />
                    <span className="text-purple-700">
                        Let AI Do the Hustle.
                    </span>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                    Your dream job is closer than you think. Upload your resume,
                    and let us handle the matching, applying, and follow-ups.
                </p>
                <button
                    onClick={handleOpenModal}
                    className="mt-10 px-8 py-4 bg-purple-700 text-white text-lg font-semibold rounded-lg">
                    Upload a Resume
                </button>
                {/* <p className="mt-3 text-md text-purple-700">
                    Get your ATS score in seconds.
                </p> */}
            </section>

            {/* Modal */}
            {showModal && (
                <HzModal className="w-[50%] h-[70%] relative">
                    {/* Close Icon */}
                    <button
                        onClick={handleCloseModal}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">
                        &#10005;
                    </button>
                    <div className="w-full flex flex-col items-center">
                        {step === 1 && (
                            <div className="w-full flex flex-col md:flex-row items-center">
                                {/* Shared Image Section */}
                                <div className="hidden md:flex w-full md:w-1/2 justify-center items-center p-4">
                                    <img
                                        src={preferenceImage}
                                        alt="Preferences Illustration"
                                        className="w-full h-auto object-contain rounded-lg"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col items-center">
                                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
                                        Upload Your Resume
                                    </h2>
                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
                                    />
                                    <p className="text-sm text-gray-500 mb-6 text-center">
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
                                            ? "loading..."
                                            : "Next"}
                                    </button>
                                </div>
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

export default CandidateHero;
