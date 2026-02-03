import React from 'react';

const CTA = () => {
    return (
        <section className="cta-section img-bg pt-[110px] pb-[60px] bg-[#F8F9FA]">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center">
                    <div className="w-full xl:w-6/12 lg:w-7/12">
                        <div className="section-title mb-12">
                            <h1 className="mb-5 text-3xl font-heading font-bold text-heading-color wow fadeInUp" data-wow-delay=".2s">Have any project in you mind? You can hire</h1>
                            <p className="text-base font-body text-body-color wow fadeInUp" data-wow-delay=".4s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                        </div>
                    </div>
                    <div className="w-full xl:w-6/12 lg:w-5/12">
                        <div className="cta-btn text-left lg:text-right mb-12">
                            <a href="javascript:void(0)" className="main-btn bg-primary text-white py-5 px-10 rounded-full inline-block font-medium text-lg transition-all duration-400 hover:text-white relative overflow-hidden z-10 btn-hover uppercase">LET'S START YOUR PROJECT</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
