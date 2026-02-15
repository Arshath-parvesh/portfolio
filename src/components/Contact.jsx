import React from "react";
import Loader from "./Loader";
const Contact = () => {
  const [result, setResult] = React.useState(false);
  const [request, setRequest] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "332a47c1-02ae-4a27-954a-e25752d312d8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(false);
      setRequest("Thanks for your submission!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(false);
        setRequest("There was an error submitting the form.");
    }
  };
  return (
  <section className="flex flex-col items-center justify-center lg:pt-[10rem] sm:pt-20 px-6 sm:px-10 gap-16 h-2/3">

    {/* FORM CONTAINER */}
    <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 flex flex-col items-center">

      <h1 className="text-3xl sm:text-4xl text-white font-serif mb-5 text-center">
        Get In <span className="text-green-400">Touch</span>
      </h1>

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-6 w-full"
      >

        {/* Name */}
        <label
          className="flex flex-col w-full text-gray-400 font-bold gap-2"
          htmlFor="name"
        >
          Your Name
          <input
            className="bg-gray-400 rounded text-black p-3 font-normal w-full"
            type="text"
            name="name"
            id="name"
            required
          />
        </label>

        {/* Email */}
        <label
          className="flex flex-col w-full text-gray-400 font-bold gap-2"
          htmlFor="email"
        >
          Your Email
          <input
            className="bg-gray-400 rounded text-black p-3 font-normal w-full"
            type="email"
            name="email"
            id="email"
            required
          />
        </label>

        {/* Message */}
        <label
          className="flex flex-col w-full text-gray-400 font-bold gap-2"
          htmlFor="message"
        >
          Your Message
          <textarea
            className="bg-gray-400 rounded text-black p-4 font-normal w-full min-h-[120px]"
            name="message"
            id="message"
            required
          ></textarea>
        </label>

        {/* Button */}
        <button
          className="w-full sm:w-2/3 md:w-1/2 mx-auto
                     border-2 border-green-400 text-green-400
                     font-bold py-2 px-4 rounded
                     hover:bg-green-400 hover:text-white
                     transition duration-300"
          type="submit"
        >
          Send Message
        </button>

      </form>
    </div>

    {/* FOOTER */}
    <footer className="w-full text-green-400 text-sm font-serif text-center">
      &copy; {new Date().getFullYear()} All rights reserved.
    </footer>

  </section>
);

};

export default Contact;
