import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/undraw_data-processing_ohfw.svg';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-36 pb-20 lg:pt-16 lg:pb-0 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -z-10 w-full md:w-3/4 lg:w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60 lg:opacity-100 animate-mesh"></div>
            <div className="absolute top-1/2 left-0 -z-10 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-blue-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-mesh" style={{ animationDelay: '-5s' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                        <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                            <span className="inline-block py-1.5 px-3 rounded-full bg-blue-50 text-primary font-semibold text-xs sm:text-sm mb-6" data-aos="fade-left" data-aos-delay="200">
                                clarity from complexity.
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading-color tracking-tight mb-6 sm:mb-8 leading-tight" data-aos="fade-up" data-aos-delay="400">
                                Data-driven research that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent pb-2">transforms</span> decisions.
                            </h1>
                            <p className="text-lg text-body-color mb-8 sm:mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="600">
                                Organizations collect massive volumes of information, yet struggle to convert it into meaningful insight. We help companies cut through noise, uncover truth, and act with confidence through our Research-as-a-Service model.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="700">
                                <Link to="/contact" className="inline-flex items-center justify-center py-4 px-8 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    Get Started
                                </Link>
                                <a href="#service" className="inline-flex items-center justify-center py-4 px-8 rounded-full bg-white text-heading-color border border-gray-200 font-semibold shadow-sm hover:border-primary/30 hover:bg-gray-50 transition-all duration-300">
                                    Our Services
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="relative mx-auto max-w-lg lg:max-w-full" data-aos="fade-right" data-aos-delay="500">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-xl transform rotate-6"></div>
                            <img src={heroImg} alt="Analytics" className="relative z-10 w-full drop-shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
