import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CandidatePage from "./pages/CandidatePage ";
import EmployerPage from "./pages/EmployerPage ";
import JobDescriptionPage from "./pages/JobDescriptionPage";
import JDTwo from "./pages/JDStepTwo";
// import CandidatePage from "./pages/CandidatePage"; // The page for "/"
// import EmployerPage from "./pages/EmployerPage"; // The page for "/post-job"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CandidatePage />} />
                <Route path="/post-job" element={<EmployerPage />} />
                <Route
                    path="/job-description"
                    element={<JobDescriptionPage />}
                />
                <Route path="/job-description-step-two" element={<JDTwo />} />
            </Routes>
        </Router>
    );
};

export default App;
