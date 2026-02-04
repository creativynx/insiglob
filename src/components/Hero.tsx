import { Link } from 'react-router-dom';
import heroImg from '../assets/undraw_data-processing_ohfw.svg';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10 lg:pt-12 lg:pb-0 overflow-hidden">
            {/* Custom Background Design */}
            <div className="absolute inset-0 -z-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100"></div>

            {/* Animated Gradient Orbs */}
            <div className="absolute top-20 right-10 -z-10 w-[400px] h-[400px] bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-mesh"></div>
            <div className="absolute bottom-20 left-10 -z-10 w-[500px] h-[500px] bg-gradient-to-tr from-blue-50/50 to-cyan-50/50 rounded-full blur-3xl animate-mesh" style={{ animationDelay: '-5s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/30 to-blue-50/30 rounded-full blur-3xl animate-mesh" style={{ animationDelay: '-3s' }}></div>

            {/* "insiglob" Watermark at Bottom */}
            <div className="absolute -bottom-24 right-2 z-0 pointer-events-none flex justify-center items-end">
                <div className="text-[12vw] lg:text-[15vw] leading- tracking-wide font-extrabold text-gray-300/30 whitespace-nowrap select-none lowercase tracking-tighter"
                    style={{ fontFamily: 'GardensC, sans-serif', textShadow: '0 4px 6px rgba(0,0,0,0.01)' }}>
                    insiglob
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                            <span className="inline-block py-1.5 px-3 rounded-full bg-blue-50 text-primary font-semibold text-xs sm:text-sm mb-4" data-aos="fade-left" data-aos-delay="200">
                                clarity from complexity.
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading-color tracking-tight mb-4 sm:mb-6 leading-tight" data-aos="fade-up" data-aos-delay="400">
                                Data-driven research that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent pb-2">transforms</span> decisions.
                            </h1>
                            <p className="text-lg text-body-color mb-6 sm:mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="600">
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
