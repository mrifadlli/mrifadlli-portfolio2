import {} from "react";

// Plugins
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

// Pictures
import LoginPage from "../../assets/portfolios/loginPage.png";

const loginPage = () => {
  return (
    <SplideSlide className="cursor-pointer">
      <img
        className="w-full object-cover rounded"
        src={LoginPage}
        alt="Image 1"
      />
      <div className="py-2 md:py-5">
        <a href="https://github.com/mrifadlli" rel="noreferrer" target="_blank" className="text-lg md:text-xl font-thin text-primary font-primary cursor-pointer">
          Login Page
        </a>
        <p className=" text-primary text-sm font-thin normal-case">
          This app build using react, react-bootstrap, node.js. 
        </p>
      </div>
    </SplideSlide>
  );
};

export default loginPage;
