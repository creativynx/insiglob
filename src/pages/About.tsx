import React from 'react';
import Navbar from '../components/Navbar';
import AboutComponent from '../components/About';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="pt-20"> {/* Add padding for fixed navbar */}
                <AboutComponent />
            </div>
            <Footer />
        </>
    );
};

export default About;
