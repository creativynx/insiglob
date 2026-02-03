import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { MapPin, Mail, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-16">
                    <div className="xl:col-span-1">
                        <RouterLink to="/" className="inline-flex items-center gap-1 mb-6 group">
                            <img src={logo} alt="Insiglob" className="h-10 w-auto group-hover:opacity-90 transition-opacity" />
                            <span className="font-brand text-3xl text-primary lowercase tracking-tight">insiglob</span>
                        </RouterLink>
                        <p className="text-body-color text-base mb-6 leading-relaxed">
                            Let’s remove uncertainty from your decisions. Let’s replace confusion with clarity.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/insiglob/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-light-bg text-body-color hover:bg-primary hover:text-white transition-all duration-300">
                                <FaLinkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-light-bg text-body-color hover:bg-primary hover:text-white transition-all duration-300">
                                <FaTwitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-light-bg text-body-color hover:bg-primary hover:text-white transition-all duration-300">
                                <FaFacebook size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="xl:col-span-1">
                        <h4 className="text-lg font-bold text-heading-color mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <ul className="space-y-3">
                                <li><RouterLink to="/" className="text-body-color hover:text-primary transition-colors text-base">Home</RouterLink></li>
                                <li><RouterLink to="/about" className="text-body-color hover:text-primary transition-colors text-base">About Us</RouterLink></li>
                                <li><RouterLink to="/services" className="text-body-color hover:text-primary transition-colors text-base">Services</RouterLink></li>
                                <li><a href="/#audience" className="text-body-color hover:text-primary transition-colors text-base">Target Audience</a></li>
                                <li><RouterLink to="/contact" className="text-body-color hover:text-primary transition-colors text-base">Contact</RouterLink></li>
                            </ul>
                        </ul>
                    </div>

                    <div className="xl:col-span-1">
                        <h4 className="text-lg font-bold text-heading-color mb-6">Services</h4>
                        <ul className="space-y-3">
                            {['Firmographic Research', 'Demographic Research', 'Market Analysis', 'Data Enrichment', 'Custom Solutions'].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-body-color hover:text-primary transition-colors text-base">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="xl:col-span-1">
                        <h4 className="text-lg font-bold text-heading-color mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start text-body-color">
                                <span className="mt-1 text-primary mr-3"><MapPin size={18} /></span>
                                Chennai, Tamilnadu, India
                            </li>
                            <li className="flex items-start text-body-color">
                                <span className="mt-1 text-primary mr-3"><Mail size={18} /></span>
                                info@insiglob.com
                            </li>
                            <li className="flex items-start text-body-color">
                                <span className="mt-1 text-primary mr-3"><Phone size={18} /></span>
                                +91 8903426268
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-wrap justify-between items-center">
                    <p className="text-body-color text-sm">
                        &copy; {new Date().getFullYear()} insiglob. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <RouterLink to="/privacy" className="text-body-color hover:text-primary text-sm">Privacy Policy</RouterLink>
                        <RouterLink to="/terms" className="text-body-color hover:text-primary text-sm">Terms of Service</RouterLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
