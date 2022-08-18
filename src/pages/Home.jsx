import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ExperiencePages from "../components/WorkExperience";
import PortfolioPages from "../components/Portfolio";
const Home = () => {
  return (
    <>
      <div className="mx-auto col-lg-8">
        <Hero />
        <About />
        <ExperiencePages />
        <PortfolioPages />
      </div>
    </>
  );
};

export default Home;
