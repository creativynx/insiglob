import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <a
            href="#"
            className={`scroll-top fixed bottom-[30px] right-[30px] w-[45px] h-[45px] bg-primary flex justify-center items-center text-white rounded-[5px] z-[9] transition-all duration-300 hover:bg-[#3b55ce] ${visible ? 'flex' : 'hidden'}`}
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
        >
            <i className="lni lni-chevron-up"></i>
        </a>
    );
};

export default ScrollToTop;
