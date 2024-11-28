import React from "react";
import CandidateHeader from "../components/CandidateHeader";
import CandidateHero from "../components/CandidateHero";
import CandidateFeatures from "../components/CandidateFeatures";
import DreamJobSteps from "../components/DreamJobSteps";
import RobotSection from "../components/RobotSection";
import Testimonials from "../components/Testimonials";
import FAQs from "../components/FAQ";
import RecruitersSection from "../components/RecruitersSection";
import Footer from "../components/Footer";
// import CandidateHeader from "../components/CandidateHeader";
// import CandidateHero from "../components/CandidateHero";
// import CandidateFeatures from "../components/CandidateFeatures";
// import Testimonials from "../components/Testimonials";
// import FAQ from "../components/FAQ";
// import Footer from "../components/Footer";

const CandidatePage = () => {
    return (
        <div>
            <CandidateHeader />
            <CandidateHero />
            <DreamJobSteps />
            <RobotSection />
            <CandidateFeatures />
            <Testimonials />
            <FAQs />
            <RecruitersSection />
            <Footer />
        </div>
    );
};

export default CandidatePage;
