import {} from "react";

// Plugins
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

// Pictures
import Minimalism from "../../assets/portfolios/minimalism.png";

const minimalism = () => {
  return (
    <SplideSlide className="cursor-pointer">
      <img
        className="w-full object-cover rounded"
        src={Minimalism}
        alt="Image 1"
      />
      <div className="py-2 md:py-5">
        <a
          href="https://github.com/mrifadlli"
          rel="noreferrer"
          target="_blank"
          className="text-lg md:text-xl font-thin text-primary font-primary cursor-pointer"
        >
          Minimalism
        </a>
        <p className=" text-primary normal-case text-sm font-thin">
          E-Commerce app that provide man fashion, this project still on
          progress. Minimalism was build using React Js and Tailwind, this
          project build just for Frontend, This project involve 3 people as a
          team & we’re working using git.
        </p>
      </div>
    </SplideSlide>
  );
};

export default minimalism;
