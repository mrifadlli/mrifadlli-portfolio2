import {} from "react";

// Plugins
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

// Pictures
import Crd from "../../assets/portfolios/crd.png";

const crd = () => {
  return (
    <SplideSlide className="">
      <img className="w-full object-cover rounded" src={Crd} alt="Image 1" />
      <div className="py-2 md:py-5">
        <a
          href="https://github.com/mrifadlli"
          rel="noreferrer"
          target="_blank"
          className="text-lg md:text-xl font-thin text-primary font-primary cursor-pointer"
        >
          Create Read Delete
        </a>
        <p className=" text-primary font-thin text-sm normal-case">
          This app can create read & delete, data table show in homepage. The
          app was build using react-vite, tailwind, node js.
        </p>
      </div>
    </SplideSlide>
  );
};

export default crd;
