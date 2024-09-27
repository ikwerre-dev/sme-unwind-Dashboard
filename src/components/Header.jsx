import { useState } from 'react'
import logo from '../assets/logo.png'
import { MenuIcon } from 'lucide-react'


function Header() {
    return (
        <>
            <div className="bg-black px-10 py-5">
                <nav className="bg-white text-black p-5 rounded-3xl mx-4 mt-4 sticky top-4 z-50 px-6" >
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="text-orange-500 font-bold text-xl p-2 "><img src={logo} alt="" className='w-[4rem]' /></div>
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
                            <MenuIcon size={'30'} className='lg:hidden' />
                        </div>
                    </div>
                </nav>    </div>

        </>
    )
}

export default Header
