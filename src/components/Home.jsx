import { HomeConstants } from "../utils/Constants";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
    const [iDo, setIDo] = useState("Full Stack Development");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIDo("");
            const nextIndex =
                (currentIndex + 1) % HomeConstants.WHAT_I_DO.length;
            setCurrentIndex(nextIndex);

            const doEffect =
                HomeConstants.WHAT_I_DO[nextIndex].split("");

            doEffect.forEach((char, index) => {
                setTimeout(() => {
                    setIDo((prev) => prev + char);
                }, index * 100);
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
  <section className="h-2/3 w-full relative flex flex-col justify-between">

    {/* HERO SECTION */}
    <div className="flex-1 flex justify-center items-center">

      <h1
        className="
          text-white font-serif
          text-3xl sm:text-4xl lg:text-5xl
          text-center lg:text-left
        "
      >
        I Enjoy Doing :
        <span className="text-green-400 block lg:inline">
          {" "}{iDo}
        </span>
      </h1>

    </div>


    {/* FOLLOW ME (Desktop Only Rotated) */}
    <div
      className="
        hidden lg:flex
        fixed right-8 top-2/3
        -translate-y-1/2
        rotate-90 origin-right
      "
    >
      <h2 className="text-white font-serif text-2xl font-thin flex items-center gap-5">
        Follow Me on .....

        {Object.keys(HomeConstants.SOCILA_MEDIA_LINKS).map(
          (item, index) => (
            <a
              key={index}
              href={HomeConstants.SOCILA_MEDIA_LINKS[item].link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item}
            >
              <FontAwesomeIcon
                icon={HomeConstants.SOCILA_MEDIA_LINKS[item].icon}
                className="text-2xl"
              />
            </a>
          )
        )}
      </h2>
    </div>


    {/* FOLLOW ME (Mobile & Tablet Normal) */}
    <div className="lg:hidden text-center mb-5">
      <h2 className="text-white font-serif text-xl font-thin">
        Follow Me on .....

        <span className="block mt-4">
          {Object.keys(HomeConstants.SOCILA_MEDIA_LINKS).map(
            (item, index) => (
              <a
                key={index}
                href={HomeConstants.SOCILA_MEDIA_LINKS[item].link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item}
                className="inline-block mr-5"
              >
                <FontAwesomeIcon
                  icon={HomeConstants.SOCILA_MEDIA_LINKS[item].icon}
                  className="text-2xl"
                />
              </a>
            )
          )}
        </span>
      </h2>
    </div>


    {/* BOTTOM SECTION */}
    <div
      className="
        w-full gap-10 lg:gap-0
        flex flex-col lg:flex-row
        justify-between
        items-center lg:items-end
        px-6 lg:px-20
      "
    >

      {/* CONTACT INFO */}
      <div className="text-center lg:text-left">
        <ul>
          {HomeConstants.CONTACT_INFO.map((item, index) => (
            <li
              key={index}
              className="text-gray-300 font-serif text-sm font-light "
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* HELLO TEXT */}
      <div className="lg:mt-0 text-center">
        <p className="text-gray-300 font-serif text-base font-semibold">
          Hello,{" "}
          <span className="text-green-400">
            Arshath parvesh
          </span>,
          <br />
          Full stack Developer and UI/UX Designer
        </p>
      </div>

    </div>

  </section>
);

};

export default Home;
