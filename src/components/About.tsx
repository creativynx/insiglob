import { useState } from 'react';
import aboutImg from '../assets/undraw_teamwork_zplp.svg';
import { ChevronDown } from 'lucide-react';

const About = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? -1 : index);
    };

    const faqItems = [
        { title: "Our Mission", content: "Our mission is simple yet powerful: to bring clarity from complexity by turning raw data into trusted intelligence. We believe that businesses should never have to choose between speed and accuracy. With the right research partner, you can have both — and that’s exactly what insiglob provides." },
        { title: "What Makes insiglob Different", content: "Most research providers focus only on collecting information. We focus on creating understanding. At insiglob, every project is built on four pillars: Accuracy, Relevance, Ethics, and Scalability. This approach ensures that our clients don’t just receive data — they receive decision-ready intelligence." },
        { title: "Our Research Philosophy", content: "We don’t believe in one-size-fits-all research. Before we collect a single data point, we ask: What decision will this data support? Who will use it? How will it create value? Only then do we design a research strategy that aligns with your real business outcomes." }
    ];

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute -left-10 top-20 w-40 h-40 rounded-full bg-accent/5 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0" data-aos="fade-right">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform -rotate-3 translate-x-4 translate-y-4"></div>
                            <img src={aboutImg} alt="about" className="relative z-10 w-full rounded-2xl shadow-card" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4" data-aos="fade-left">
                        <div className="max-w-xl lg:pl-10">
                            <div className="mb-10">
                                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">About Us</span>
                                <h2 className="text-3xl lg:text-4xl font-bold text-heading-color mb-6">
                                    We turn raw data into <span className="text-primary">confidence</span>.
                                </h2>
                                <p className="text-body-color text-lg leading-relaxed">
                                    insiglob was founded to answer a growing need in modern business: the need for clear, reliable, and actionable research in an era of overwhelming information. We put quality, ethics, and impact at the center of everything.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {faqItems.map((item, index) => (
                                    <div className={`border border-gray-100 rounded-xl transition-all duration-300 ${activeAccordion === index ? 'bg-white shadow-lg border-transparent' : 'bg-light-bg'}`} key={index}>
                                        <button
                                            className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none group"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <span className={`font-semibold text-lg transition-colors ${activeAccordion === index ? 'text-primary' : 'text-heading-color group-hover:text-primary'}`}>{item.title}</span>
                                            <span className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${activeAccordion === index ? 'bg-primary text-white rotate-180' : 'bg-gray-200 text-gray-500'}`}>
                                                <ChevronDown size={14} />
                                            </span>
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <div className="px-6 pb-6 text-body-color text-base leading-relaxed border-t border-gray-50 pt-4">
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
