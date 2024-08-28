import React from "react";
import { AboutImages } from "./AboutImages";
import { LinkPreview } from "./ui/LinkPreview";

const About = () => {
  return (
    <div className="relative min-h-screen" id="about">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at top right, rgba(56, 72, 241, 0.4) 15%, rgba(56, 72, 241, 0) 40%),
            radial-gradient(circle at bottom left, rgba(187, 108, 230, 0.4) 10%, rgba(187, 108, 230, 0) 40%),
            linear-gradient(to top right, #0a041c, #0a041c)
          `,
          zIndex: -1,
        }}
      ></div>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="flex-1 flex flex-col items-center justify-center text-center py-8 px-4 md:py-16 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-[#3848f1] drop-shadow-md">
            About Us
          </h1>
          <p className="text-base md:text-lg text-white leading-relaxed mb-6 md:mb-8 max-w-md md:max-w-2xl mx-auto">
            The CSI Student Branch of{" "}
            <LinkPreview
              url="https://www.rajagiritech.ac.in/Home/Index.asp#"
              className="font-extrabold"
            >
              {" "}
              Rajagiri School of Engineering & Technology
            </LinkPreview>{" "}
            (RSET) was established in 2009 with 130 members. Today, the branch
            has grown to 320 members, all united by a shared objective: to
            instill professionalism in students of Computer Science and
            Information Technology. Our mission is to drive technological
            advancements in computer science, computer engineering, technology,
            and information processing.
          </p>
          <div className="relative max-w-xs md:max-w-4xl mx-auto px-4 py-4 md:py-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              The branch regularly organizes professional meetings, where
              members exchange views, share ideas, and stay updated on the
              latest trends. We have hosted various technical meetings,
              presentations, symposiums, competitions, and workshops on
              cutting-edge topics.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <AboutImages />
        </div>
      </div>
    </div>
  );
};

export default About;
