// import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <section className="counter-up-section pt-[150px]">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <div className="counter-up-content mb-12">
                            <div className="section-title mb-10">
                                <h1 className="mb-5 text-3xl font-heading font-bold text-heading-color wow fadeInUp" data-wow-delay=".2s">Why we are the best, Why you hire?</h1>
                                <p className="text-base font-body text-body-color wow fadeInUp" data-wow-delay=".4s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                            </div>
                            <div className="counter-up-wrapper">
                                <div className="flex flex-wrap -mx-4">
                                    {[
                                        { icon: "lni lni-emoji-smile", count: 3642, suffix: " ", title: "Happy client", color: "text-[#4E6EF1]" },
                                        { icon: "lni lni-checkmark", count: 5436, suffix: " ", title: "Project done", color: "text-[#F53636]" },
                                        { icon: "lni lni-world", count: 642, suffix: "K", title: "Live Design", color: "text-[#36B37E]" },
                                        { icon: "lni lni-users", count: 42, suffix: " ", title: "Creative designer's", color: "text-[#FFAB00]" },
                                    ].map((item, index) => (
                                        <div className="w-full sm:w-1/2 px-4 mb-8" key={index}>
                                            <div className="single-counter flex items-center">
                                                <div className={`icon text-4xl mr-5 ${item.color}`}>
                                                    <i className={item.icon}></i>
                                                </div>
                                                <div className="content">
                                                    <h1 className="text-3xl font-bold font-heading text-heading-color">
                                                        <CountUp end={item.count} duration={2} suffix={item.suffix} enableScrollSpy />
                                                    </h1>
                                                    <span className="text-base font-body text-body-color">{item.title}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-1/2">
                        <div className="counter-up-img mb-12">
                            <img src="assets/img/counter-up/counter-up-img.svg" alt="" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;
