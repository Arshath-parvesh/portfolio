import Navigation from "./Navigation";
const Header = () => {
    return(
        <header className="border-b border-b-black p-10 text-white">
            <div className="flex">
                <div className="w-1/3 font-serif px-8 text-4xl italic font-thin great-vibes-regular select-none">Arshath parvesh</div>
                <div className="w-2/3">
                   <Navigation />
                </div>
            </div>
            
        </header>
    )
}

export default Header;