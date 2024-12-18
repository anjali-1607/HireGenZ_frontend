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
                    <Route path="/recruiters/login" element={<Login />} />
                    <Route path="/recruiters/register" element={<Register />} />
                    <Route
                        path="/job-description-step-two"
                        element={<JDTwo />}
                    />
                </Routes>
            </Router>
        </QueryClientProvider>
    );
};

export default App;
