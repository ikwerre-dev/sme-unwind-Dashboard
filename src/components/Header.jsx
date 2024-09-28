import { useState } from 'react';
import logo from '../assets/logo.png';
import { ArrowRightCircle, MenuIcon, X } from 'lucide-react';

function Header() {
    // State to track whether the menu is open
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Toggle menu open/close
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="py-4 md:px-10 md:py-5">
                <nav className="bg-white text-black p-5 rounded-3xl mx-4 mt-4 sticky top-4 z-50 px-6">
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="text-orange-500 font-bold text-xl p-2">
                            <img src={logo} alt="Logo" className="w-[4rem]" />
                        </div>
                        <div className="hidden lg:flex space-x-4 text-sm">
                            <a href="#home" className="font-semibold hover:text-orange-500">Home</a>
                            <a href="#partners" className="font-semibold hover:text-orange-500">Partners & Sponsors</a>
                            <a href="#vendor" className="font-semibold hover:text-orange-500">Get a vendor stall</a>
                            <a href="#about" className="font-semibold hover:text-orange-500">About Us</a>
                            <a href="#gallery" className="font-semibold hover:text-orange-500">Gallery</a>
                        </div>
                        <div className="flex items-center justify-center gap-5">
                            <button className="hidden sm:flex bg-orange-500 text-white px-5 py-3 rounded-full text-sm">
                                Contact Us
                            </button>
                            {!isMenuOpen && (

                                <MenuIcon
                                    size={'30'}
                                    className="lg:hidden cursor-pointer"
                                    onClick={toggleMenu}
                                />)}
                        </div>
                    </div>
                </nav>
            </div>

            {/* Overlay for the mobile menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-orange-900 bg-opacity-90 z-50 flex items-center justify-center">
                    <div className="bg-black rounded-lg p-8 w-4/5 md:w-1/3 shadow-lg text-center">
                        <button className="absolute top-[4rem] right-10" onClick={toggleMenu}>
                            <X size={30} />
                        </button>
                        <ul className="space-y-4">
                            <li> <a href="#home" className="text-lg font-semibold text-white hover:text-orange-500 flex justify-between" onClick={toggleMenu}><ArrowRightCircle color='white' />  Home</a></li>
                            <li><a href="#partners" className="text-lg font-semibold text-white hover:text-orange-500 flex justify-between" onClick={toggleMenu}><ArrowRightCircle color='white' /> Partners & Sponsors</a></li>
                            <li><a href="#vendor" className="text-lg font-semibold text-white hover:text-orange-500 flex justify-between" onClick={toggleMenu}><ArrowRightCircle color='white' /> Get a vendor stall</a></li>
                            <li><a href="#about" className="text-lg font-semibold text-white hover:text-orange-500 flex justify-between" onClick={toggleMenu}><ArrowRightCircle color='white' /> About Us</a></li>
                            <li><a href="#gallery" className="text-lg font-semibold text-white hover:text-orange-500 flex justify-between" onClick={toggleMenu}><ArrowRightCircle color='white' /> Gallery</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
