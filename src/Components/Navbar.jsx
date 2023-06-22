import { useEffect, useState } from "react";
import NavLink from "./NavLink";
// import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState("navNoBg");
  const [select, setSelected] = useState(0);

  const handleScroll = () => {
    setNav(window.scrollY >= 30 ? "bg-black/20 backdrop-blur-xl" : "navNoBG");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const link = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "experience",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  return (
    <header
      className={`flex justify-center fixed items-center z-10 mt-4 w-full`}
    >
      <ul
        className={`${nav} flex justify-between transition ease-out duration-500 rounded-full py-2 px-3 md:py-3 md:px-5`}
      >
        {link.map(({ id, link }) => (
          <NavLink
            key={id}
            link={link}
            className={`px-4 md:px-4 py-2 cursor-pointer capitalize text-[#ECF8F9] md:text-base md:font-normal text-center font-light text-base ${
              select === id
                ? "bg-white/10 duration-1000 ease-linear transition-transform rounded-full"
                : "bg-transparent"
            }`}
            onClick={() => setSelected(id)}
          />
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
