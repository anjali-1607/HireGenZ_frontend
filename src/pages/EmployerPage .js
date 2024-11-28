import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import EmployerAndCandidateCards from "../components/EmployerAndCandidateCards ";
import AdvancedFeatures from "../components/AdvancedFeatures";

const EmployerPage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <EmployerAndCandidateCards />
            <Categories />
            <AdvancedFeatures />
            <Footer />
        </div>
    );
};

export default EmployerPage;
