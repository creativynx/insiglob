// import React from 'react';
import Navbar from '../components/Navbar';
import ContactComponent from '../components/Contact';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="pt-20"> {/* Add padding for fixed navbar */}
                <ContactComponent />
            </div>
            <Footer />
        </>
    );
};

export default Contact;
