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
import ResumeHero from "../components/ResumeHero";
import Carousel from "../components/Carousel";
import TrainingPartner from "../components/TrainingPartner";
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

            {/* <Carousel /> */}
            <ResumeHero />

            <DreamJobSteps />
            {/* <CandidateHero /> */}
            <RobotSection />
            <CandidateFeatures />
            <Testimonials />
            <FAQs />
            {/* <RecruitersSection /> */}
            <TrainingPartner />
            <Footer />
        </div>
    );
};

export default CandidatePage;
