import React from 'react';
import Navbar from '../components/Navbar';
import ServicesComponent from '../components/Services';
import Footer from '../components/Footer';

const Services = () => {
    return (
        <>
            <Navbar />
            <div className="pt-20"> {/* Add padding for fixed navbar */}
                <ServicesComponent />
            </div>
            <Footer />
        </>
    );
};

export default Services;
