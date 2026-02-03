import React, { useState } from 'react';
import classNames from 'classnames';
import { FaDatabase, FaRocket, FaChartLine, FaCheck } from 'react-icons/fa';

const Audience = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { name: "B2B Data Platforms", icon: <FaDatabase /> },
        { name: "Startups", icon: <FaRocket /> },
        { name: "Investors", icon: <FaChartLine /> }
    ];

    const content = [
        {
            title: "Supporting Data Intelligence Platforms",
            subtitle: "Scale Without Risk",
            desc: "B2B data platforms live and die by data accuracy. We work as an extension of your research teams to build and maintain high-integrity verified datasets.",
            points: [
                "Verified firmographic profiles",
                "Executive and leadership mapping",
                "Industry classification and segmentation",
                "Technology stack intelligence"
            ],
            value: "Higher trust, faster expansion, lower costs."
        },
        {
            title: "Research That Grows With You",
            subtitle: "For Fast-Moving Startups",
            desc: "Startups move fast — but smart growth requires clear direction. We help founders replace assumptions with insight without the heavy investment of in-house teams.",
            points: [
                "Market size estimation & opportunity mapping",
                "Buyer persona & decision-maker mapping",
                "Competitor benchmarking & pricing insights",
                "Product–market fit research"
            ],
            value: "Avoid costly mistakes. Scale with confidence."
        },
        {
            title: "Intelligence That Reduces Risk",
            subtitle: "For Investors & Strategy Teams",
            desc: "For VC, PE, and Strategy teams, we provide independent, objective research that supports high-stakes decisions and due diligence.",
            points: [
                "Market sizing and growth trends",
                "Firmographic profiling & due diligence",
                "Emerging market & risk signals",
                "Target screening & landscape reviews"
            ],
            value: "Better risk assessment. Stronger investment theses."
        }
    ];

    return (
        <section id="audience" className="py-24 bg-white relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-light-bg -z-10 rounded-l-[100px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Target Audience</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-heading-color mb-4">Who We Serve</h2>
                    <p className="text-body-color text-lg">Tailored research solutions for every stage of business growth.</p>
                </div>

                <div className="flex flex-col items-center">
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-14 bg-light-bg p-2 rounded-full inline-flex">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={classNames("py-3 px-8 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 flex items-center", {
                                    "bg-white text-primary shadow-md": activeTab === index,
                                    "text-body-color hover:text-heading-color hover:bg-white/50": activeTab !== index
                                })}
                            >
                                <span className="mr-2 text-lg">{tab.icon}</span>
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    {/* Content Card */}
                    <div className="w-full lg:w-10/12">
                        <div className="bg-white rounded-3xl shadow-card border border-gray-100 p-8 md:p-12 overflow-hidden relative">
                            {/* Abstract bg shape */}
                            <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>

                            <div className="flex flex-wrap items-center relative z-10">
                                <div className="w-full lg:w-7/12 lg:pr-12 mb-10 lg:mb-0">
                                    <span className="text-accent font-bold mb-2 block">{content[activeTab].subtitle}</span>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-heading-color mb-6">{content[activeTab].title}</h3>
                                    <p className="text-body-color text-lg mb-8 leading-relaxed">
                                        {content[activeTab].desc}
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        {content[activeTab].points.map((point, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-500 flex items-center justify-center">
                                                    <FaCheck size={10} />
                                                </div>
                                                <span className="text-heading-color font-medium text-sm">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="inline-block p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
                                        <span className="font-bold text-primary block text-sm mb-1 uppercase tracking-wide">Impact</span>
                                        <p className="text-heading-color font-medium italic">"{content[activeTab].value}"</p>
                                    </div>
                                </div>
                                <div className="w-full lg:w-5/12 flex justify-center">
                                    <div className={`w-64 h-64 rounded-full flex items-center justify-center bg-gradient-to-br ${activeTab === 0 ? 'from-blue-100 to-indigo-100 text-blue-500' : activeTab === 1 ? 'from-red-100 to-orange-100 text-red-500' : 'from-emerald-100 to-teal-100 text-emerald-500'} shadow-inner`}>
                                        <div className="text-9xl opacity-80">
                                            {activeTab === 0 ? <FaDatabase /> : activeTab === 1 ? <FaRocket /> : <FaChartLine />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Audience;
