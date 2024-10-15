import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { ArrowRightCircle, MenuIcon, X } from 'lucide-react';

function Header() {
    // State to track whether the menu is open
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Toggle menu open/close
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            // Disable scroll on the main page
            document.body.style.overflow = 'hidden';
        } else {
            // Enable scroll on the main page
            document.body.style.overflow = 'auto';
        }

        // Cleanup the overflow style when component unmounts or menu closes
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        <>
            <div className="py-4 md:px-10 md:py-5 sticky top-[-1rem] z-50">
                <nav className="bg-white text-black p-5 rounded-3xl mx-4 mt-4  z-50 px-6">
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="text-orange-500 font-bold text-xl p-0 px-2">
                            <a href="#home">
                                <img src={logo} alt="Logo" className="w-[6rem]" />
                            </a>
                        </div>
                        <div className="hidden lg:flex space-x-4 text-sm">
                            <a href="#home" className="font-semibold hover:text-orange-500">Home</a>
                            <a href="#about" className="font-semibold hover:text-orange-500">About Us</a>
                            <a href="#partners" className="font-semibold hover:text-orange-500">Partners & Sponsors</a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeb48uKYKLdO9ImUIMylPRDj6PT9hnn7vCXYJrfbaII2bAu5g/viewform" className="font-semibold hover:text-orange-500">Get a vendor stall</a>
                            <a href="#gallery" className="font-semibold hover:text-orange-500">Gallery</a>
                            <a href="https://unwindfest.com/blog" className="font-semibold hover:text-orange-500">Blog</a>

                            <a href='https://wa.me/2349049027698' className="lg:hidden font-semibold hover:text-orange-500">Contact Us</a>
                        </div>
                        <div className="flex items-center justify-center gap-5">
                            <a className="hidden sm:flex bg-orange-500 text-white px-5 py-3 rounded-full text-sm" href='https://wa.me/2349049027698'>
                                Contact Us
                            </a>
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
