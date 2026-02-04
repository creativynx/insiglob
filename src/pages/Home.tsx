// import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Audience from '../components/Audience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import ScrollToTop from '../components/ScrollToTop';

/* Import CSS for animations */
import 'animate.css';
// @ts-ignore
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Audience />
            <Contact />
            <Footer />
            {/* <ScrollToTop /> */}
        </>
    );
};

export default Home;
