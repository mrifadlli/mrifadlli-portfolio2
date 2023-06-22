import {} from "react";

// Plugins
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

// Pictures
import EasyRent from "../../assets/portfolios/easyRent.png";

const easyRent = () => {
  return (
    <SplideSlide className="cursor-pointer">
      <img
        className="w-full object-cover rounded"
        src={EasyRent}
        alt="Image 1"
      />
      <div className="py-2 md:py-5">
        <a href="https://github.com/mrifadlli" target="_blank" rel="noreferrer" className="text-lg md:text-xl font-thin font-primary text-primary cursor-pointer">
          Easy Rent
        </a>
        <p className=" text-primary text-sm font-thin normal-case">
          Easy Rent was build using React Vite, Typescript ,Express Js, Node.
          Js, and SCSS. This project involve 5 people as a team & we’re working
          using git. Easy Rent is a website that provide for rent a car,
          especially sport car.
        </p>
      </div>
    </SplideSlide>
  );
};

export default easyRent;
