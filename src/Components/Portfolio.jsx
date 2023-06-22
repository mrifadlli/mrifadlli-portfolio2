import {} from "react";

// Files
import {
  CashierApp,
  EasyRent,
  LoginPage,
  Minimalism,
  Crd,
} from "./carousel/index";

// Plugins
import { Splide } from "@splidejs/react-splide";

const Portfolio = () => {
  return (
    <section
      name="portfolio"
      className="h-fit from-[#0E5E6F] to-[#002B5B] bg-gradient-to-t"
    >
      <div className="mx-7 md:mx-24 pt-24 md:pt-24">
        <div className="bg-black/25 backdrop-blur-lg rounded-t-xl px-4 md:px-6 pt-4 pb-2 md:pt-8 md:pb-4">
          <h1 className="font-primary text-primary text-xl md:text-3xl uppercase border-b-2">
            p o r t f o l i o
          </h1>
          <p className="text-primary text-sm font-thin">
            Check out some of my work right here
          </p>
        </div>
        <Splide
          options={{
            arrows: true,
            pagination: false,
            type: "loop",
            autoplay: true,
            interval: 3100,
            pauseOnFocus: true,
          }}
          className="bg-black/25 backdrop-blur-lg px-5 pt-3 pb-2 md:px-16 md:pt-2 rounded-xl rounded-t-none"
        >
          <CashierApp />
          <EasyRent />
          <Minimalism />
          <LoginPage />
          <Crd />
        </Splide>
      </div>
    </section>
  );
};

export default Portfolio;
