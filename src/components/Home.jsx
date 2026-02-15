import { list } from "postcss";
import { HomeConstants } from "../utils/Constants";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = () => {
    const [iDo, setIDo] = useState('Full Stack Development');
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIDo('');
            setCurrentIndex((prevIndex) => (prevIndex + 1) % HomeConstants.WHAT_I_DO.length);
            const doEffect = HomeConstants.WHAT_I_DO[currentIndex].split('');
            doEffect.reduce((acc, char, index) => {
                setTimeout(() => {
                    setIDo((prev) => prev + char);
                }, index * 100);
            }, 0);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);
    return(
        <section className="h-3/4 w-full">
            <div className="w-100 h-3/4 flex justify-center items-center">
                <h1 className="text-start text-white font-serif text-5xl mt-20 ml-20">I Enjoy Doing : <span className="text-green-400">{iDo}</span></h1>
            </div>
            <div className="fixed right-[-10rem] top-2/3 rotate-90 -translate-y-1/2">
                <h2 className="text-white font-serif text-2xl mt-10 ml-20 font-thin">Follow Me on ..... 
                        {Object.keys(HomeConstants.SOCILA_MEDIA_LINKS).map((item, index) => {return (<a key={index} href={HomeConstants.SOCILA_MEDIA_LINKS[item].link} target="_blank" rel="noopener noreferrer" aria-label={item}> <FontAwesomeIcon icon={HomeConstants.SOCILA_MEDIA_LINKS[item].icon} className="text-2xl mr-5" /> </a>)
                })}</h2>
            </div>
            <div className="w-100 h-1/4 flex flex-row justify-start content-end pt-10">
                <div>
                    <ul>
                        {HomeConstants.CONTACT_INFO.map((item, index) => (
                            <li key={index} className="text-gray-300 font-serif text-sm font-light mt-5 ml-40">{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="text-gray-300 font-serif text-base font-semibold mt-5 ml-80 text-center">Hello, <span className="text-green-400">Arshath parvesh</span>, <br></br>Full stack Developer and UI/UX Designer</p>
                </div>
            </div>
        </section>
    )
}

export default Home;