import { NavLink } from "react-router-dom";
const Navigation = () => {
    return(
        <nav>
            <ul className="flex justify-end gap-[8vw] font-serif text-xl text-bold text-gray-300">
                <li><NavLink to="/">Home</NavLink></li> 
                <li><NavLink to="/about">About Me</NavLink></li>
                <li><NavLink to="/resume">Resume</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;