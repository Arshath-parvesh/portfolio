import { NavLink } from "react-router-dom";

const Navigation = ({ isMobile = false, setIsOpen }) => {
    return (
        <nav>
            <ul
                className={`
                    font-serif text-gray-300
                    ${isMobile
                        ? "flex flex-col gap-10 text-3xl"
                        : "flex justify-end gap-[8vw] text-xl font-bold"}
                `}
            >
                <li>
                    <NavLink to="/" onClick={() => setIsOpen?.(false)}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={() => setIsOpen?.(false)}>
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/resume" onClick={() => setIsOpen?.(false)}>
                        Resume
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={() => setIsOpen?.(false)}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
