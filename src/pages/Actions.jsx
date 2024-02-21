import React from "react";
import ActionCard from "./ActionCard";
import actionImage1 from "../images/action-1.png";
import actionImage2 from "../images/action-2.png";
import actionImage3 from "../images/action-3.png";
import actionImage4 from "../images/action-4.png";

const Actions = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-xl md:text-3xl font-bold mb-4">
          Driving Property Inquiries to Conversions
        </h1>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-center ">
        <ActionCard
          image={actionImage1}
          title={"Call-to-Action Optimization"}
          description={
            "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates."
          }
        />
        <ActionCard
          image={actionImage2}
          title={"Landing Page Efficiency"}
          description={
            "Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission."
          }
        />
        <ActionCard
          image={actionImage3}
          title={"Social Proof Utilization"}
          description={
            "Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action"
          }
        />
        <ActionCard
          image={actionImage4}
          title={"Mobile-Friendly Experience"}
          description={
            "With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances the preferences of on-the-go property seekers."
          }
        />
      </div>
    </div>
  );
};

export default Actions;
