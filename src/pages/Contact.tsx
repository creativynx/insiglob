// import React from 'react';
import Navbar from '../components/Navbar';
import ContactComponent from '../components/Contact';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="-mt-4">
                <ContactComponent />
            </div>
            <Footer />
        </>
    );
};

export default Contact;
