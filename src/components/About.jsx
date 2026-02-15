import {aboutConstants} from "../utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const About = () => {
    return(
        <section className="py-5 px-10 text-white font-serif flex flex-row gap-20">
            <div className="w-1/2">
                <h1 className="text-4xl mb-5">About Me</h1>
                <p className="text-xl tracking-wide leading-10">
                    {aboutConstants.ABOUT_ME}
                </p>
            </div>
            <div className="w-1/2 flex flex-col">
                <h1 className="text-4xl mb-5 text-green-400 align-middle text-center">Skills</h1>
                <ul className="grid grid-cols-3 gap-4 mt-7">
                    {Object.keys(aboutConstants.SKILLS).map((skill, index) => (
                        <li key={index} className={`text-5xl mb-7 flex flex-col items-center justify-center ${aboutConstants.SKILLS[skill].class}`}>{<FontAwesomeIcon icon={aboutConstants.SKILLS[skill].icon} />}<span className="text-base">{skill}</span></li>
                    ))}

                </ul>
                <h1 className="text-4xl mb-5 mt-10 text-green-400 align-middle text-center">Currently Building</h1>
                <ul className="grid grid-cols-3 gap-4 mt-7">
                    {Object.keys(aboutConstants.BUILDING).map((skill, index) => (
                        <li key={index} className={`text-5xl mb-7 flex flex-col items-center justify-center ${aboutConstants.BUILDING[skill].class}`}>{<FontAwesomeIcon icon={aboutConstants.BUILDING[skill].icon} />}<span className="text-base">{skill}</span></li>
                    ))}
                </ul>
            </div>
            
        </section>
    )
}

export default About;