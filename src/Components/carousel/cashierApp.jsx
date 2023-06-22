import {} from "react";

// Plugins
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

// Pictures
import cashier from "../../assets/portfolios/cashierApp.png";

const cashierApp = () => {
  return (
    <SplideSlide className="">
      <img
        className="w-full object-cover rounded"
        src={cashier}
        alt="Image 1"
      />
      <div className="py-2 md:py-5">
        <a
          href="https://github.com/mrifadlli"
          rel="noreferrer"
          target="_blank"
          className="text-lg md:text-xl font-thin text-primary font-primary cursor-pointer"
        >
          Cashier app
        </a>
        <p className=" text-primary font-thin text-sm normal-case">
          The Menu was buid using React Js, React Bootstrap & JSON Placeholder
          (JSON-server) for dummy database.
        </p>
      </div>
    </SplideSlide>
  );
};

export default cashierApp;
