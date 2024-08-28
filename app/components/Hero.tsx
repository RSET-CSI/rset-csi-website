import { FaLocationArrow } from "react-icons/fa6";
import { MagicBoarderButton } from "./ui/MagicBoarderButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { smoothScrollTo } from "@/utils/smoothscroll";

const Hero = () => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    smoothScrollTo(link); // Call smoothScrollTo to handle the scrolling
    // setIsMobileMenuOpen(false); // Remove or implement this if needed
  };

  return (
    <div
      className="h-[50rem] w-full relative flex items-center justify-center"
      id="home"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at top left, rgba(187, 108, 230, 0.4) 10%, rgba(187, 108, 230, 0) 40%),
            radial-gradient(circle at bottom right, rgba(56, 72, 241, 0.4) 15%, rgba(56, 72, 241, 0) 40%),
            linear-gradient(to bottom right, #0a041c, #0a041c)`,
        }}
      ></div>

      <div className="absolute inset-0 flex items-center justify-center z-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div
        id="home"
        className="flex flex-col items-center justify-center relative z-20"
      >
        <div className="flex justify-center my-10 relative">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center relative z-30">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Rajagiri School of Engineering & Technology
            </p>
            <TextGenerateEffect
              words="Igniting Passion for Innovation"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <a href="#events" onClick={(e) => handleLinkClick(e, "#events")}>
              <MagicBoarderButton
                text="Explore"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
