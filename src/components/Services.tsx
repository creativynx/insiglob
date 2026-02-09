// import React from 'react';
import { FaBuilding, FaUsers, FaChartLine, FaDatabase, FaCogs } from 'react-icons/fa';

const Services = () => {
    const services = [
        { icon: <FaBuilding />, title: "Firmographic Research", desc: "Detailed company intelligence including industry classification, revenue, and more.", color: "text-blue-500", bg: "bg-blue-50" },
        { icon: <FaUsers />, title: "Demographic Research", desc: "Understand people: Decision-maker mapping, role-based segmentation, and buyer personas.", color: "text-red-500", bg: "bg-red-50" },
        { icon: <FaChartLine />, title: "Market & Industry", desc: "Market sizing, competitive landscape, growth opportunities, and risk assessment.", color: "text-green-500", bg: "bg-green-50" },
        { icon: <FaDatabase />, title: "Data Enrichment", desc: "Clean data fuels better performance. CRM enrichment, accuracy verification, and compliance.", color: "text-yellow-500", bg: "bg-yellow-50" },
        { icon: <FaCogs />, title: "Custom Solutions", desc: "Tailored research projects built around unique objectives, industries, and timelines.", color: "text-purple-500", bg: "bg-purple-50" }
    ];

    return (
        <section id="service" className="bg-light-bg relative">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">What We Do</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-heading-color mb-6">Research-as-a-Service</h2>
                    <p className="text-body-color text-lg">
                        RaaS is your strategic advantage. Adaptable, reliable, and dedicated research partnership that evolves with your business needs.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center -mx-4">
                    {services.map((service, index) => (
                        <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="h-full bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100/50">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform group-hover:scale-110 duration-300 ${service.bg} ${service.color}`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-heading-color mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-body-color leading-relaxed">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;
