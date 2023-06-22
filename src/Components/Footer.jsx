import {} from "react";

// icons
import { FaSpotify, FaPaw } from "react-icons/fa";

const Footer = () => {
  const socialLink = [
    {
      id: 1,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/muhamad-anrico-fadli-216812196/",
    },
    {
      id: 2,
      title: "GitHub",
      href: "https://github.com/mrifadlli",
    },
    {
      id: 3,
      title: "Resume",
      href: "resume-rico.pdf",
      download: true,
    },
    {
      id: 4,
      title: "Email",
      href: "mailto:manricofadli@gmail.com",
    },
  ];

  return (
    <div className="h-fit bg-[#002B5B] m-0">
      <div className="mx-8 md:mx-24 rounded-xl">
        <div className="h- px-0 md:px-40 py-14 md:py-10 md:flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full">
            <div className="hover:scale-105 duration-300 flex gap-4 px-4 py-3 md:px-8 md:py-3 rounded-2xl md:w-full bg-black/20 cursor-pointer">
              <FaSpotify
                size={40}
                className="text-green-400 mt-1 cursor-pointer"
              />
              <div className="flex-col">
                <h1 className="text-primary font-light">On Repeat</h1>
                <a
                  href="https://open.spotify.com/track/7e69j9wGFa38k0rDkf2qLl?si=cabfa1655d27423a"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary lowercase font-medium cursor-pointer"
                >
                  can i get a hi ? by <span>Paw&lsquo;s Letter</span>
                </a>
              </div>
            </div>
            <div className="md:mt-7 mt-5 ml-1">
              <p className="text-primary font-primary md:text-xl">
                © 2023 <span className="lowercase">mrifadlli</span> - Indoneisa
              </p>
            </div>
          </div>

          <div className="md:w-1/2 w-full h-full">
            <div className="flex">
              <div className="w-1/2 mt-7 pl-2 md:pl-36 md:mt-0">
                <h1 className="text-green-300 mb-3 text-xl md:text-2xl">
                  Elsewhere
                </h1>
                {socialLink.map((items) => (
                  <li key={items.id} className="list-none py-1 md:py-1">
                    <a
                      href={items.href ? items.href : "/"}
                      download={items.download}
                      className="text-primary font-normal text-sm md:text-base hover:text-green-300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {items.title}
                    </a>
                  </li>
                ))}
              </div>
              <div className="w-1/2 mt-12 pl-2 md:pl-36 md:mt-6">
                <div className="flex justify-center w-40 h-40 bg-blue-800 rounded-full cursor-pointer hover:scale-110 duration-300">
                  <FaPaw
                    size={143}
                    onClick={() => window.my_modal_2.showModal()}
                    className="py-4 px-2 text-green-300"
                  />
                </div>

                <dialog id="my_modal_2" className="modal">
                  <form method="dialog" className="modal-box bg-blue-800">
                    <h3 className="font-bold text-xl text-green-300">Hello!</h3>
                    <p className="py-2 text-white text-base normal-case">
                      You&lsquo;re just presence as a Paw&lsquo;s sign, miaw :)
                    </p>
                  </form>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
