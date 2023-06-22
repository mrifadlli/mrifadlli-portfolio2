import {} from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen px-7 pt-24 pb-7 from-[#0E5E6F] to-[#002B5B] bg-gradient-to-b"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full w-full bg-black/20 backdrop-blur-xl rounded-xl md:bg-transparent lg:bg-transparent sm:bg-transparent">
        <div className="pb-8">
          <p className="text-xl md:text-3xl font-thin border-b-2 text-primary font-primary  uppercase">
            C o n t a c t
          </p>
          <p className="py-2 text-primary font-thin text-sm">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/da16a489-6e8c-4c11-b2e2-8b6f0354472d"
            method="POST"
            className="flex flex-col md:w-1/2 w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 text-white rounded-md focus:outline-none lowercase mb-3"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 text-white rounded-md focus:outline-none lowercase mb-3"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 text-white rounded-md focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-l px-6 py-2 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-primary font-thin">
              Let&lsquo;s Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
