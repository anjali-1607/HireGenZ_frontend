import React from "react";
// Adjust path as per your assets folder
import JobPostsUI from "./JobPostsUI";
import DashboardHeader from "./DashboardHeader";

const RecruiterDashboard = () => {
    return (
        <div className="min-h-screen bg-purple-50 flex flex-col">
            <DashboardHeader />
            <JobPostsUI />
        </div>
    );
};

export default RecruiterDashboard;
