import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-[#E5E7E6] py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <img src={logo} alt="Sme's Unwind 2024"  className="w-20 mb-4" />
                        <p className="text-sm text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque assumenda omnis ipsum in aspernatur eos minima illo accusamus aperiam, ab corporis cumque, maxime reprehenderit possimus odio vitae repellat. Beatae, fugiat.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-600 hover:text-blue-600">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-400">
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-pink-600">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Events</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Partners & Sponsors</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Get a vendor stall</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
                        <p className="text-gray-600 mb-2">
                            Contact us today to learn more about partnership opportunities.
                        </p>
                        <p className="text-gray-600">Email: Brands@yellowlyfe.com</p>
                        <p className="text-gray-600">Contact: 08164630950</p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-600">
                    © 2023 smeunwind. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;