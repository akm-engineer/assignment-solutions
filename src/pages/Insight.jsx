import React from "react";
import InsightCard from "./InsightCard";
import bard from "../images/bard-fill.png";
import bard2 from "../images/bard-fill-2.png";
import bard3 from "../images/bard-fill-3.png";
import bard4 from "../images/bard-fill-4.png";
import insightRight from "../images/insight.png";

const Insight = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-xl md:text-5xl font-bold mb-4">
          Navigating Real Estate's Digital Landscape
        </h1>
        <h4 className="text-sm md:text-2xl font-signature mb-4">
          Insights for Real Estate Marketing Advantage
        </h4>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-2/5 mb-8 md:mb-0">
          <InsightCard
            image={bard}
            title={"Market Trends Analysis"}
            description={"Predictive insights to guide real estate strategies."}
          />
          <InsightCard
            image={bard2}
            title={"Targeted Buyer Persona"}
            description={
              "Understand and connect with your ideal property buyers."
            }
          />
          <InsightCard
            image={bard3}
            title={"Competitor Insights"}
            description={
              "Stand out in the property market with informed strategies."
            }
          />
          <InsightCard
            image={bard4}
            title={"Visual Content Appeal"}
            description={
              "Captivate buyers with appealing visuals and immersive experiences."
            }
          />
        </div>
        <div className="md:w-3/5">
          <img
            src={insightRight}
            alt="Right"
            className="w-full h-auto md:h-[600px] object-cover rounded-3xl p-2 md:p-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Insight;
