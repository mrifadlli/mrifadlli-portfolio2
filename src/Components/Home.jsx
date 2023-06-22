import {} from "react";

// icon / plugin
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <main
      name="home"
      className="bg-gradient-to-b from-[#002B5B] to-[#0E5E6F] h-fit flex"
    >
      <div className="flex mt-28 md:mt-36 mx-7 md:mx-24 w-full h-fit bg-black/20 rounded-xl">
        <div className="pb-10 pt-2 md:w-full w-fit">
          <div className="border-b-2 border-[#ECF8F9] flex justify-end mx-3 md:mx-5 py-2 gap-1">
            <span className="bg-red-600 rounded-full w-4 h-4 "></span>
            <span className="bg-yellow-400 rounded-full w-4 h-4 "></span>
            <span className="bg-green-600 rounded-full w-4 h-4 "></span>
          </div>
          <div className="pt-10 md:pt-20">
            <h1 className="font-primary text-4xl md:text-8xl text-center text-[#ECF8F9]">
              Hello. I&rsquo;m Rico.
            </h1>
            <h1 className="font-primary text-3xl md:text-7xl text-center text-[#ECF8F9] pb-4">
              Frontend Developer.
            </h1>
          </div>
          <div className="md:mx-36 mx-5 text-center">
            <p className="text-center text-[#ECF8F9] text-sm font-light md:text-base normal-case">
              Designing the web with creativity. I&lsquo;m passionate about
              creating interfaces that are fun, useful and user sentric.
            </p>
            <div className="flex justify-center items-center mt-7">
              <Link
                to="portfolio"
                smooth
                duration={400}
                className="bg-gradient-to-r py-2 px-7 rounded-full text-[#ECF8F9] shadow-2xl flex items-center cursor-pointer group font-primary lowercase"
              >
                portfolio
                <span className="ml-2 group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight />{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
