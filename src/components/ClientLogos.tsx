// import React from 'react';

const ClientLogos = () => {
    return (
        <section className="client-logo-section pt-[150px]">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center space-y-8 lg:space-y-0">
                    <div className="w-1/2 lg:w-1/4 flex justify-center">
                        <div className="single-logo text-center">
                            <img src="assets/img/client-logo/lineicons.svg" alt="" className="grayscale hover:grayscale-0 transition opacity-60 hover:opacity-100" />
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-1/4 flex justify-center">
                        <div className="single-logo text-center">
                            <img src="assets/img/client-logo/uideck.svg" alt="" className="grayscale hover:grayscale-0 transition opacity-60 hover:opacity-100" />
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-1/4 flex justify-center">
                        <div className="single-logo text-center">
                            <img src="assets/img/client-logo/pagebulb.svg" alt="" className="grayscale hover:grayscale-0 transition opacity-60 hover:opacity-100" />
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-1/4 flex justify-center">
                        <div className="single-logo text-center">
                            <img src="assets/img/client-logo/graygrids.svg" alt="" className="grayscale hover:grayscale-0 transition opacity-60 hover:opacity-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
