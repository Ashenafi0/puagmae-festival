import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black py-16 px-4 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">About Us</h2>
                        <p className="text-lg mb-4">
                            We are committed to bringing you the best experience at the Puagmae Festival. Join us for an unforgettable celebration of culture and tradition.
                        </p>
                        <p className="text-lg">Contact us for more information and updates.</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Contact</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FaEnvelope className="text-goldenrod text-2xl mr-4" />
                                <p className="text-lg">
                                     puagmaef@gmail.com  <br />
                                    <span className='flex justify-center items-center text-center'>or</span>
                                    pjafrica.2020@gmail.com
                                </p>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="text-goldenrod text-2xl mr-4" />
                                <p className="text-lg">+251 901002282</p>
                            </li>
                            <li className="flex items-center">
                                <FaMapMarkerAlt className="text-goldenrod text-2xl mr-4" />
                                <span className="text-lg">Ledeta Kefleketema, Kebele 49, At last floor of Haven Hotel</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-goldenrod transition duration-300">Home</a></li>
                            <li><a href="#about" className="hover:text-goldenrod transition duration-300">About</a></li>
                            <li><a href="#schedule" className="hover:text-goldenrod transition duration-300">Schedule</a></li>
                            <li><a href="#gallery" className="hover:text-goldenrod transition duration-300">Gallery</a></li>
                            <li><a href="#contact" className="hover:text-goldenrod transition duration-300">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=61563590353141" target="_blank" rel="noopener noreferrer" className="text-goldenrod hover:text-white transition duration-300">
                                <FaFacebookF className="text-2xl" />
                            </a>
                            <a href="https://www.instagram.com/puagmae_fest?igsh=emE3ZWg0bnNyYWkx" target="_blank" rel="noopener noreferrer" className="text-goldenrod hover:text-white transition duration-300">
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a href="https://www.tiktok.com/@puagmae.festival?_t=8opgfYASYNh&_r=1" target="_blank" rel="noopener noreferrer" className="text-goldenrod hover:text-white transition duration-300">
                                <FaTiktok className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;