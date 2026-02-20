import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import SocialIcons from "./Links";


const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_i7jrytu",
        "template_4qyoihl",
        form.current,
        "LSAZpX28zTAifOsHw"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.error(error);
        }
      );
  };

  return (
   <div className="bg-gray-800 flex flex-col items-center text-center pt-10 pb-8 px-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-white text-center mb-10 font-light text-4xl md:text-5xl">
          Contact Me
        </h1>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col items-center"
        >
          <div className="w-full">

            <div className="flex flex-col md:flex-row gap-4">
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="py-3 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                className="py-3 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="mt-4 py-3 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Say Something"
              className="mt-4 py-3 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full md:w-auto px-8 py-3 rounded-md 
                       bg-blue-600 hover:bg-blue-700 
                       text-white font-medium 
                       transition duration-300"
          >
            Send Message
          </button>

          <div className="my-5">
            <SocialIcons />
    
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;