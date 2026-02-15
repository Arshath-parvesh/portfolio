import {aboutConstants} from "../utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const About = () => {
    return (
  <section className="bg-gradient-to-br from-[#1f1f1f] via-[#252525] to-[#1a1a1a] py-12 px-6 sm:px-10 lg:px-20 text-white font-serif 
                      flex flex-col lg:flex-row gap-16 lg:gap-20">

    {/* LEFT SIDE - ABOUT */}
    <div className="w-full lg:w-1/2">
      <h1 className="text-3xl sm:text-4xl mb-6">About Me</h1>

      <p className="text-base sm:text-lg md:text-xl 
                    tracking-wide leading-7 sm:leading-8 md:leading-9">
        {aboutConstants.ABOUT_ME}
      </p>
    </div>


    {/* RIGHT SIDE - SKILLS */}
    <div className="w-full lg:w-1/2 flex flex-col">

      {/* Skills */}
      <h1 className="text-3xl sm:text-4xl mb-6 text-green-400 text-center">
        Skills
      </h1>

      <ul className="grid 
                     grid-cols-2 sm:grid-cols-3 md:grid-cols-3 
                     gap-6 sm:gap-8 mt-6">

        {Object.keys(aboutConstants.SKILLS).map((skill, index) => (
          <li
            key={index}
            className={`text-3xl sm:text-4xl md:text-5xl 
                        flex flex-col items-center justify-center 
                        ${aboutConstants.SKILLS[skill].class}`}
          >
            <FontAwesomeIcon icon={aboutConstants.SKILLS[skill].icon} />
            <span className="text-sm sm:text-base mt-2">
              {skill}
            </span>
          </li>
        ))}
      </ul>


      {/* Currently Building */}
      <h1 className="text-3xl sm:text-4xl mb-6 mt-12 text-green-400 text-center">
        Currently Building
      </h1>

      <ul className="grid 
                     grid-cols-2 sm:grid-cols-3 md:grid-cols-3 
                     gap-6 sm:gap-8 mt-6">

        {Object.keys(aboutConstants.BUILDING).map((skill, index) => (
          <li
            key={index}
            className={`text-3xl sm:text-4xl md:text-5xl 
                        flex flex-col items-center justify-center 
                        ${aboutConstants.BUILDING[skill].class}`}
          >
            <FontAwesomeIcon icon={aboutConstants.BUILDING[skill].icon} />
            <span className="text-sm sm:text-base mt-2">
              {skill}
            </span>
          </li>
        ))}
      </ul>

    </div>

  </section>
);

}

export default About;