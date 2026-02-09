import { Link } from 'react-router-dom';
import heroImg from '../assets/undraw_data_25jw.svg';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10 lg:pt-12 lg:pb-0 overflow-hidden bg-[#f8f9fa]">
            {/* Custom Background Design - Light Theme */}
            <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#f8f9fa] via-white/50 to-blue-50/20"></div>

            {/* Animated Gradient Orbs - Adjusted for Light Theme */}
            <div className="absolute top-20 right-10 -z-10 w-[400px] h-[400px] bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-mesh"></div>
            <div className="absolute bottom-20 left-10 -z-10 w-[500px] h-[500px] bg-gradient-to-tr from-blue-50/50 to-cyan-50/50 rounded-full blur-3xl animate-mesh" style={{ animationDelay: '-5s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/30 to-blue-50/30 rounded-full blur-3xl animate-mesh" style={{ animationDelay: '-3s' }}></div>

            {/* "insiglob" Watermark at Bottom */}
            <div className="absolute -bottom-12 lg:-bottom-16 left-2 z-0 pointer-events-none flex justify-center items-end opacity-60">
                <div className="text-[13vw] sm:text-[14vw] lg:text-[16vw] leading-none tracking-wide font-extrabold text-slate-300/50 whitespace-nowrap select-none lowercase tracking-tighter"
                    style={{ fontFamily: 'GardensC, sans-serif', textShadow: '0 4px 6px rgba(0,0,0,0.01)' }}>
                    insiglob
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full lg:w-7/12 px-4 mb-8 lg:mb-0">
                        <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-none text-center lg:text-left">
                            <span className="inline-block py-2 px-4 rounded-full bg-white border border-blue-50 text-primary font-medium text-xs sm:text-sm mb-6 shadow-sm" data-aos="fade-left" data-aos-delay="200">
                                clarity from complexity
                            </span>
                            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-heading-color tracking-wide mb-6 sm:mb-8 leading-tight" data-aos="fade-up" data-aos-delay="400">
                                Data-driven research that <br className="hidden lg:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent pb-2">transforms</span> decisions
                            </h1>
                            <p className="text-lg sm:text-xl text-body-color mb-8 sm:mb-10 leading-relaxed font-normal" data-aos="fade-up" data-aos-delay="600">
                                Organizations collect massive volumes of information, yet struggle to convert it into meaningful insight. We help companies cut through noise, uncover truth, and act with confidence through our Research-as-a-Service model.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/contact" className="inline-flex items-center justify-center py-4 px-8 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 hover:bg-blue-700 transition-all duration-300">
                                    Partner with Us
                                </Link>
                                <a href="#service" className="inline-flex items-center justify-center py-4 px-8 rounded-full bg-white text-heading-color border border-gray-200 font-semibold shadow-sm hover:border-primary/30 hover:bg-gray-50 transition-all duration-300">
                                    Our Services
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12 px-4">
                        <div className="relative mx-auto max-w-lg lg:max-w-full" data-aos="fade-right" data-aos-delay="500">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-2xl blur-2xl transform rotate-6"></div>
                            {/* Using existing image as placeholder if new one not generated yet. 
                                Ideally would utilize the generated 'hero_illustration_relaxing' here. 
                                Since generation failed, we keep the old one or a placeholder. 
                            */}
                            <img src={heroImg} alt="Analytics" className="relative z-10 w-full drop-shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
