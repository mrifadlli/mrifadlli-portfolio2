import {} from "react";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
  ];
  return (
    <div
      name="experience"
      className="h-fit from-[#0E5E6F] to-[#002B5B] bg-gradient-to-b flex justify-center items-center md:pt-24 pt-24"
    >
      <div className="mx-7 md:mx-24 h-fit rounded-lg bg-black/25 backdrop-blur-xl w-full md:py-4 py-2">
        <div className="mx-4 md:mx-6 my-3">
          <h1 className="font-primary text-primary text-xl md:text-3xl border-b-2">
            E x p e r i e n c e
          </h1>
          <h2 className="text-primary text-sm font-thin pt-0.5">
            These are technologies I&lsquo;ve worked with
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-12 py-8   text-center">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`${style} shadow-md hover:scale-105 duration-500 sm:grid-cols-3 py-2 rounded-lg cursor-pointer`}
            >
              <img src={src} className="w-20 mx-auto" />
              <p className="py-3 text-primary font-thin">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
