import React from "react";

import expertiseImage1 from "../images/expertise-1.png";
import expertiseImage2 from "../images/expertise-2.png";
import expertiseImage3 from "../images/expertise-3.png";
import expertiseImage4 from "../images/expertise-4.png";
import ExpertiseCard from "./ExpertiseCard";

const Expertise = () => {
  return (
    <div className="py-8 ">
      <div className="container mx-auto text-center">
        <h1 className="text-xl md:text-3xl font-bold mb-4  mt-8">
          Our Expertise in Action
        </h1>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-center ">
        <ExpertiseCard
          image={expertiseImage1}
          title={"Call-to-Action Optimization"}
          description={
            "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates."
          }
        />
        <ExpertiseCard
          image={expertiseImage2}
          title={"Landing Page Efficiency"}
          description={
            "Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission."
          }
        />
        <ExpertiseCard
          image={expertiseImage3}
          title={"Social Proof Utilization"}
          description={
            "Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action"
          }
        />
        <ExpertiseCard
          image={expertiseImage4}
          title={"Mobile-Friendly Experience"}
          description={
            "With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers."
          }
        />
      </div>
    </div>
  );
};

export default Expertise;
