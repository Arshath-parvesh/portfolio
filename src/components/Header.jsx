import { useState } from "react";
import Navigation from "./Navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="border-b border-b-black p-6 lg:p-10 text-white relative">

            <div className="flex justify-between items-center">

                {/* Logo */}
                <div className="font-serif px-4 lg:px-8 text-3xl lg:text-4xl italic font-thin great-vibes-regular select-none">
                    Arshath parvesh
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:block w-2/3">
                    <Navigation />
                </div>

                {/* Hamburger (Tablet + Mobile) */}
                <div className="lg:hidden text-2xl cursor-pointer z-50">
                    {isOpen ? (
                        <FaTimes onClick={() => setIsOpen(false)} />
                    ) : (
                        <FaBars onClick={() => setIsOpen(true)} />
                    )}
                </div>

            </div>

            {/* Fullscreen Mobile / Tablet Menu */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 bg-black flex flex-col justify-center items-center gap-10 text-3xl font-serif z-40">
                    <Navigation isMobile setIsOpen={setIsOpen} />
                </div>
            )}

        </header>
    );
};

export default Header;
