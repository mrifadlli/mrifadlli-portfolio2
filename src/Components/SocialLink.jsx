import {} from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLink = () => {
  const Links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin className="text-white" size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/muhamad-anrico-fadli-216812196/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub className="text-white" size={25} />
        </>
      ),
      href: "https://github.com/mrifadlli",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail className="text-white" size={25} />
        </>
      ),
      href: "mailto:manricofadli@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill className="text-white" size={25} />
        </>
      ),
      style: "rounded-br-md",
      href: "resume-rico.pdf",
      download: true,
    },
  ];
  return (
    <div className="hidden flex-col top-[35%] left-0 fixed lg:flex z-10">
      <ul className="cursor-pointer">
        {Links.map((link) => (
          <li
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-0 hover:rounded-r-md duration-500 bg-black/10 backdrop-blur-md " +
              link.style
            }
            key={link.id}
          >
            <a
              href={link.href ? link.href : "/"}
              download={link.download}
              className="w-full font-normal flex justify-between text-white"
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLink;
