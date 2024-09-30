import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-[#E5E7E6] py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <img src={logo} alt="Sme's Unwind 2024" className="w-20 mb-4" />
                        <p className="text-sm text-gray-600">
                            Our best opportunity to sell, network and unwind</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="mailto:sme.unwind@thelyfe.co" className="text-gray-600 hover:text-blue-600">
                                <Mail size={24} />
                            </a>
                            <a href="https://x.com/smeunwind?s=21" className="text-gray-600 hover:text-blue-400">
                                <Twitter size={24} />
                            </a>
                            <a href="https://www.instagram.com/smeunwind?igsh=cTA2aG1vcXI4eWhs" className="text-gray-600 hover:text-pink-600">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Events</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Partners & Sponsors</a></li>
                            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeb48uKYKLdO9ImUIMylPRDj6PT9hnn7vCXYJrfbaII2bAu5g/viewform" className="text-gray-600 hover:text-gray-900">Get a vendor stall</a></li>
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
                        <p className="text-gray-600">Email: sme.unwind@thelyfe.co</p>
                        <a href="https://wa.me/2349049027698" className="text-gray-600">Contact: +2349049027698</a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-600">
                    © 2024 smeunwind. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;