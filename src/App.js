import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CandidatePage from "./pages/CandidatePage ";
import EmployerPage from "./pages/EmployerPage ";
import JobDescriptionPage from "./pages/JobDescriptionPage";
import JDTwo from "./pages/JDStepTwo";
// import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./hooks/actions/query";
import { QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProtectedRoute from "./utils/ProtectedRoutes";
import Dashboard from "./pages/recuiters/Dashboard";
import RecruiterDashboard from "./pages/recuiters/dashboard/RecruiterDashboard";
import "@fortawesome/fontawesome-free/css/all.min.css";
import GetCandidates from "./pages/recuiters/GetCandidates";
import CandidateJDPage from "./screens/CandidateJDPage";
import MCQTestPage from "./screens/MCQTestPage";

// import CandidatePage from "./pages/CandidatePage"; // The page for "/"
// import EmployerPage from "./pages/EmployerPage"; // The page for "/post-job"

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer />
            <Router>
                <Routes>
                    <Route path="/" element={<CandidatePage />} />
                    <Route
                        path="/recruiters"
                        element={<EmployerPage />}></Route>
                    <Route
                        path="/recruiters/job-description"
                        element={<ProtectedRoute Cmp={JobDescriptionPage} />}
                    />
                    <Route
                        path="/recruiters/dashboard"
                        element={<ProtectedRoute Cmp={Dashboard} />}>
                        <Route
                            path="job-posting"
                            element={<JobDescriptionPage />}
                        />
                    </Route>
                    <Route path="/recruiters/login" element={<Login />} />
                    <Route path="/recruiters/register" element={<Register />} />
                    <Route
                        path="/recruiters/get-candidates/:jobId"
                        element={<GetCandidates />}
                    />
                    <Route
                        path="/job-description-step-two"
                        element={<JDTwo />}
                    />
                    <Route path="/dashboard" element={<RecruiterDashboard />} />
                    <Route
                        path="/detailed-job-description/:jobId"
                        element={<CandidateJDPage />}
                    />
                    <Route path="/test" element={<MCQTestPage />} />
                </Routes>
            </Router>
        </QueryClientProvider>
    );
};

export default App;
