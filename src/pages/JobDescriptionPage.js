import React, { useState } from "react";
import formImage from "../assets/formImage.png";
import Header from "../components/Header";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { usePublicCreateItem } from "../hooks/actions/mutation/usePublicCreateItem";
import { APIENDPOINT } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCreateItem } from "../hooks/actions/mutation/useCreateItem";

const JobDescriptionPage = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        experience: "",
        min_ctc: "",
        max_ctc: "",
        locations: "",
        key_skills: "",
        industry_type: "",
        role: "",
        candidates_needed: "",
        employment_type: "",
        job_type: "",
        education: "",
        // recruiter: 2,
    });

    const navigate = useNavigate();

    const uploadMutation = useCreateItem(APIENDPOINT.POST_A_JOB);

    const animatedComponents = makeAnimated();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name, selectedOptions) => {
        setFormData((prev) => ({
            ...prev,
            [name]: selectedOptions || [], // Ensure the value is never null
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = preparePayload(formData);
        uploadMutation.mutate(payload, {
            onSuccess: (data) => {
                console.log("data", data);
                navigate("/recruiters/dashboard");
                toast("Job Post Submitted Successfully!");
            },
            onError: (err) => {
                console.error("Error submitting job post:", err);
                toast("Failed to submit job post. Please try again.");
            },
        });
    };

    const preparePayload = (data) => {
        return {
            ...data,
            industry_type: data.industry_type
                .map((item) => item.value)
                .join(","),
            employment_type: data.employment_type
                .map((item) => item.value)
                .join(","),
            job_type: data.job_type.map((item) => item.value).join(","),
            education: data.education.map((item) => item.value).join(","),
        };
    };

    const educationOptions = [
        { value: "highschool", label: "High School" },
        { value: "bachelor", label: "Bachelor's Degree" },
        { value: "master", label: "Master's Degree" },
        { value: "phd", label: "Ph.D." },
    ];

    const jobTypeOptions = [
        { value: "full_time", label: "Full-Time" },
        { value: "part_time", label: "Part-Time" },
        { value: "contract", label: "Contract" },
        { value: "internship", label: "Internship" },
        { value: "freelance", label: "Freelance" },
    ];

    const employmentTypeOptions = [
        { value: "permanent", label: "Permanent" },
        { value: "temporary", label: "Temporary" },
        { value: "contractual", label: "Contractual" },
        { value: "freelance", label: "Freelance" },
        { value: "internship", label: "Internship" },
    ];

    const industryTypeOptions = [
        { value: "technology", label: "Technology" },
        { value: "healthcare", label: "Healthcare" },
        { value: "finance", label: "Finance" },
        { value: "education", label: "Education" },
        { value: "manufacturing", label: "Manufacturing" },
        { value: "retail", label: "Retail" },
    ];

    return (
        <>
            <Header />
            <div className="min-h-screen bg-purple-50 flex flex-col items-center py-5 px-6 lg:px-20">
                <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                Describe Your Role, and Let Us
                            </h2>
                            <h3 className="text-2xl font-bold text-purple-700">
                                Find Your Ideal{" "}
                                <span className="text-purple-500">
                                    Candidate.
                                </span>
                            </h3>
                        </div>
                        <img
                            src={formImage}
                            alt="Form Header"
                            className="w-48 h-auto"
                        />
                    </div>
                    <form onSubmit={handleSubmit}>
                        {/* Job Title */}
                        <div className="mb-6">
                            <label
                                htmlFor="title"
                                className="block text-gray-700 font-semibold mb-2">
                                Job Title{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter job title"
                            />
                        </div>

                        {/* Job Description */}
                        <div className="mb-6">
                            <label
                                htmlFor="description"
                                className="block text-gray-700 font-semibold mb-2">
                                Job Description{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter job description"
                                rows="3"></textarea>
                        </div>

                        {/* Required Experience */}
                        <div className="mb-6">
                            <label
                                htmlFor="experience"
                                className="block text-gray-700 font-semibold mb-2">
                                Required Experience (Years){" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                id="experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter experience in years"
                            />
                        </div>

                        {/* Min and Max CTC */}
                        <div className="mb-6">
                            <label
                                htmlFor="min_ctc"
                                className="block text-gray-700 font-semibold mb-2">
                                Minimum CTC{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                id="min_ctc"
                                name="min_ctc"
                                value={formData.min_ctc}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter minimum CTC"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="max_ctc"
                                className="block text-gray-700 font-semibold mb-2">
                                Maximum CTC{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                id="max_ctc"
                                name="max_ctc"
                                value={formData.max_ctc}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter maximum CTC"
                            />
                        </div>

                        {/* Job Locations */}
                        <div className="mb-6">
                            <label
                                htmlFor="locations"
                                className="block text-gray-700 font-semibold mb-2">
                                Job Locations{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="locations"
                                name="locations"
                                value={formData.locations}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter locations (comma-separated)"
                            />
                        </div>

                        {/* Key Skills */}
                        <div className="mb-6">
                            <label
                                htmlFor="key_skills"
                                className="block text-gray-700 font-semibold mb-2">
                                Key Skills{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="key_skills"
                                name="key_skills"
                                value={formData.key_skills}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter skills (comma-separated)"
                            />
                        </div>

                        {/* Industry Type */}
                        <div className="mb-6">
                            <label
                                htmlFor="industry_type"
                                className="block text-gray-700 font-semibold mb-2">
                                Industry Type{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <CreatableSelect
                                id="industry_type"
                                name="industry_type"
                                value={formData.industry_type}
                                onChange={(selectedOptions) =>
                                    handleSelectChange(
                                        "industry_type",
                                        selectedOptions
                                    )
                                }
                                options={industryTypeOptions}
                                isMulti
                                components={animatedComponents}
                                className="w-full focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Select or Add Industry Type"
                                isClearable
                            />
                        </div>

                        {/* Role of the candidate */}
                        <div className="mb-6">
                            <label
                                htmlFor="role"
                                className="block text-gray-700 font-semibold mb-2">
                                Role of the candidate{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter Role"
                            />
                        </div>

                        {/* Candidate Needed */}
                        <div className="mb-6">
                            <label
                                htmlFor="candidates_needed"
                                className="block text-gray-700 font-semibold mb-2">
                                How many candidate you need{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                id="candidates_needed"
                                name="candidates_needed"
                                value={formData.candidates_needed}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter Candidate Needed"
                            />
                        </div>

                        {/* employment_type */}
                        <div className="mb-6">
                            <label
                                htmlFor="employment_type"
                                className="block text-gray-700 font-semibold mb-2">
                                Employment Type{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <CreatableSelect
                                id="employment_type"
                                name="employment_type"
                                value={formData.employment_type}
                                onChange={(selectedOptions) =>
                                    handleSelectChange(
                                        "employment_type",
                                        selectedOptions
                                    )
                                }
                                options={employmentTypeOptions}
                                isMulti
                                components={animatedComponents}
                                className="w-full focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Select or Add Employment Type"
                                isClearable
                            />
                        </div>

                        {/* job_type */}
                        <div className="mb-6">
                            <label
                                htmlFor="job_type"
                                className="block text-gray-700 font-semibold mb-2">
                                Job Type <span className="text-red-500">*</span>
                            </label>
                            <CreatableSelect
                                id="job_type"
                                name="job_type"
                                value={formData.job_type}
                                onChange={(selectedOptions) =>
                                    handleSelectChange(
                                        "job_type",
                                        selectedOptions
                                    )
                                }
                                options={jobTypeOptions}
                                isMulti
                                components={animatedComponents}
                                className="w-full focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Select or Add Job Type"
                                isClearable
                            />
                        </div>

                        {/* education */}
                        <div className="mb-6">
                            <label
                                htmlFor="education"
                                className="block text-gray-700 font-semibold mb-2">
                                Education{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <CreatableSelect
                                id="education"
                                name="education"
                                value={formData.education}
                                onChange={(selectedOptions) =>
                                    handleSelectChange(
                                        "education",
                                        selectedOptions
                                    )
                                }
                                options={educationOptions}
                                isMulti
                                components={animatedComponents}
                                className="w-full focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Select or Add Education"
                                isClearable
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end gap-4 mt-6">
                            <button
                                type="reset"
                                onClick={() =>
                                    setFormData({
                                        title: "",
                                        description: "",
                                        experience: "",
                                        min_ctc: "",
                                        max_ctc: "",
                                        locations: "",
                                        key_skills: "",
                                        industry_type: [],
                                        employment_type: [],
                                        job_type: [],
                                        education: [],
                                    })
                                }
                                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg">
                                Reset
                            </button>
                            <button
                                type="submit"
                                className="bg-purple-700 text-white px-6 py-3 rounded-lg">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default JobDescriptionPage;
