import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Menu, X } from 'lucide-react';
import logoName from '../assets/insiglob-logo.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Services', to: 'service' },
        { name: 'Who We Serve', to: 'audience' },
        { name: 'Contact', to: 'contact' }
    ];

    const handleNavClick = (section: string) => {
        setOpen(false);
        if (!isHomePage) {
            navigate('/', { state: { targetSection: section } });
        }
    };

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [open]);

    // Handle scroll after navigation from another page
    useEffect(() => {
        if (isHomePage && location.state && location.state.targetSection) {
            setTimeout(() => {
                scroller.scrollTo(location.state.targetSection, {
                    duration: 500,
                    smooth: true,
                    offset: -70,
                });
            }, 100);
            window.history.replaceState({}, document.title);
        }
    }, [isHomePage, location]);

    return (
        <header className={classNames("fixed top-0 left-0 w-full z-50 transition-all duration-300 select-none", {
            "bg-white/90 backdrop-blur-md shadow-sm py-2 sm:py-3": sticky,
            "bg-transparent py-4 sm:py-6": !sticky && isHomePage,
            "bg-white shadow-sm py-2 sm:py-3": !isHomePage
        })}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center relative gap-4">
                    <RouterLink
                        className="navbar-brand cursor-pointer py-0 flex items-center gap-0 sm:gap-1 group shrink-0"
                        to="/"
                    >
                        <img src={logoName} alt="Insiglob" className="h-6 sm:h-8 w-auto group-hover:opacity-90 transition-opacity" />
                    </RouterLink>

                    {/* Desktop Menu */}
                    <div className="hidden lg:block">
                        <ul className="flex flex-row items-center space-x-10">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    {isHomePage ? (
                                        <ScrollLink
                                            to={item.to}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            className="text-base font-medium text-body-color hover:text-primary cursor-pointer transition-colors"
                                            activeClass="text-primary font-semibold"
                                        >
                                            {item.name}
                                        </ScrollLink>
                                    ) : (
                                        <span
                                            onClick={() => handleNavClick(item.to)}
                                            className="text-base font-medium text-body-color hover:text-primary cursor-pointer transition-colors"
                                        >
                                            {item.name}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="block lg:hidden focus:outline-none text-primary"
                        type="button"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Mobile Menu Portal */}
                    {open && createPortal(
                        <div
                            className="fixed inset-0 bg-white z-[9999] flex flex-col justify-center items-center animate-fadeIn"
                            onClick={() => setOpen(false)}
                        >
                            <button
                                className="absolute top-6 right-6 p-2 text-heading-color hover:text-primary transition-colors focus:outline-none"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpen(false);
                                }}
                            >
                                <X size={32} />
                            </button>

                            <ul
                                className="flex flex-col items-center space-y-8 text-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {menuItems.map((item, index) => (
                                    <li key={item.name} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>
                                        {isHomePage ? (
                                            <ScrollLink
                                                to={item.to}
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                                className="text-2xl font-bold text-heading-color hover:text-primary cursor-pointer transition-colors"
                                                activeClass="text-primary"
                                                onClick={() => setOpen(false)}
                                            >
                                                {item.name}
                                            </ScrollLink>
                                        ) : (
                                            <span
                                                onClick={() => handleNavClick(item.to)}
                                                className="text-2xl font-bold text-heading-color hover:text-primary cursor-pointer transition-colors"
                                            >
                                                {item.name}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>,
                        document.body
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
