import { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Menu } from 'lucide-react';
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
        { name: 'Services', to: 'service' }, // Matches ID in Services.tsx
        { name: 'Who We Serve', to: 'audience' }, // Matches ID in Audience.tsx? Need to confirm Audience ID
        { name: 'Contact', to: 'contact' }
    ];

    const handleNavClick = (section: string) => {
        setOpen(false);
        if (!isHomePage) {
            navigate('/', { state: { targetSection: section } });
        }
    };

    // Handle scroll after navigation from another page
    useEffect(() => {
        if (isHomePage && location.state && location.state.targetSection) {
            setTimeout(() => {
                scroller.scrollTo(location.state.targetSection, {
                    duration: 500,
                    smooth: true,
                    offset: -100, // Adjust for fixed header
                });
            }, 100);
            // Clear state after scroll
            window.history.replaceState({}, document.title);
        }
    }, [isHomePage, location]);

    return (
        <header className={classNames("fixed top-0 left-0 w-full z-50 transition-all duration-300", {
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
                        {/* <span className="font-brand text-2xl sm:text-3xl text-primary lowercase tracking-tight">insiglob</span> */}
                    </RouterLink>

                    <button
                        className="block lg:hidden focus:outline-none text-primary"
                        type="button"
                        onClick={() => setOpen(!open)}
                    >
                        <Menu size={24} />
                    </button>

                    <div className={classNames("w-full lg:w-auto", {
                        "hidden lg:block": !open,
                        "absolute top-full left-0 bg-white shadow-xl rounded-lg p-6 lg:static lg:bg-transparent lg:shadow-none lg:p-0": open
                    })}>
                        <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-10">
                            {menuItems.map((item) => (
                                <li key={item.name} className="my-2 lg:my-0">
                                    {isHomePage ? (
                                        <ScrollLink
                                            to={item.to}
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={500}
                                            className="text-base font-medium text-body-color hover:text-primary cursor-pointer transition-colors"
                                            activeClass="text-primary font-semibold"
                                            onClick={() => setOpen(false)}
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
                </div>
            </div>
        </header>
    );
};

export default Navbar;
