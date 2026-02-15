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
    <section className="flex flex-col items-center justify-center pt-20 px-10 gap-20">
      {/* <div className="w-1/2"></div> */}
      <div className="w-2/3 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-serif mb-5">Get In <span className="text-green-400">Touch</span></h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-5 w-2/3 justify-center items-center">
          <label className="form-label flex flex-col w-full text-gray-400 font-bold gap-2" htmlFor="name">
            Your Name
            <input className="bg-gray-400 rounded text-black p-2 font-normal" type="text" name="name" id="name" required />
          </label>
          <label className="form-label flex flex-col w-full text-gray-400 font-bold gap-2" htmlFor="email">
            Your Email
            <input className="bg-gray-400 rounded text-black p-2 font-normal" type="email" name="email" id="email" required />
          </label>
          <label className="form-label flex flex-col w-full text-gray-400 font-bold gap-2" htmlFor="message">
            Your Message
            <textarea className="bg-gray-400 rounded text-black p-5 font-normal" name="message" id="message" required></textarea>
          </label>
          <button className="w-1/2 border-2 border-solid border-green-400 text-green-400 font-bold py-2 px-4 rounded hover:bg-green-400 transition duration-300 hover:text-white" type="submit">Send Message</button>
        </form>
      </div>
        <footer className="w-1/3 text-green-400 text-sm font-serif text-center">
            &copy; {new Date().getFullYear()} All rights reserved.
        </footer>
    </section>
  );
};

export default Contact;
