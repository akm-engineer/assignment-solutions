import React from "react";

import WelcomeNote from "./WelcomeNote";
import Extra from "./Extra";
import Service from "./Service";
import Insight from "./Insight";
import Inquiry from "./Inquiry";
import Actions from "./Actions";
import Expertise from "./Expertise";
import Peace from "./Peace";
import Pharma from "./Pharma";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="mb-20 mt-16 ">
        <WelcomeNote />
      </div>
      <div className="mb-16 mt-16 ">
        <Extra />
      </div>
      <div className="mb-16 mt-16 ">
        <Service />
      </div>
      <div className="mb-16 mt-16">
        <Insight />
      </div>
      <div className="mb-16 mt-16">
        <Inquiry />
      </div>
      <div className="mb-16">
        <Actions />
      </div>
      <div className="mb-16">
        <Expertise />
      </div>
      <div className="mb-16">
        <Peace />
      </div>
      <div className="mb-16">
        <Pharma />
      </div>
      <div className="mb-16">
        <FAQ />
      </div>
      <div className="mb-16">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
