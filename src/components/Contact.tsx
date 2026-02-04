// import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-secondary relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-wrap lg:items-center -mx-4">
                    <div className="w-full lg:w-5/12 mb-12 lg:mb-0 px-4">
                        <div className="pr-0 lg:pr-12 text-white">
                            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block" data-aos="fade-up">Contact Us</span>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white" data-aos="fade-up" data-aos-delay="100">Let’s Start a Conversation.</h2>
                            <p className="text-gray-200 text-lg mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                                Ready to transform complexity into clarity? Whether you’re exploring a new research initiative or looking for a long-term partner, we are here to help.
                            </p>

                            <div className="space-y-8" data-aos="fade-up" data-aos-delay="300">
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-primary text-xl mr-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-white/10 shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white mb-1 text-lg">Email Us</h5>
                                        <p className="text-gray-200">contact@insiglob.com</p>
                                        <p className="text-gray-200">info@insiglob.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-primary text-xl mr-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-white/10 shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white mb-1 text-lg">Call Us</h5>
                                        <p className="text-gray-200">+91 8903426268</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-primary text-xl mr-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-white/10 shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white mb-1 text-lg">Location</h5>
                                        <p className="text-gray-200">Chennai, Tamilnadu, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-7/12 px-4" data-aos="fade-left" data-aos-delay="200">
                        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>

                            <h3 className="text-2xl font-bold text-heading-color mb-8 relative z-10">Send us a Message</h3>
                            <form className="relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-heading-color mb-2 group-focus-within:text-primary transition-colors">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-body-color focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-400" />
                                    </div>
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-heading-color mb-2 group-focus-within:text-primary transition-colors">Email Address</label>
                                        <input type="email" placeholder="john@company.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-body-color focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-400" />
                                    </div>
                                </div>
                                <div className="mb-6 group">
                                    <label className="block text-sm font-semibold text-heading-color mb-2 group-focus-within:text-primary transition-colors">Subject</label>
                                    <div className="relative">
                                        <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-body-color focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
                                            <option>General Inquiry</option>
                                            <option>Research Partnership</option>
                                            <option>Platform Support</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-8 group">
                                    <label className="block text-sm font-semibold text-heading-color mb-2 group-focus-within:text-primary transition-colors">Message</label>
                                    <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-body-color focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-gray-400"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-blue-700 shadow-xl shadow-primary/20 transform hover:-translate-y-1active:translate-y-0 transition-all duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
