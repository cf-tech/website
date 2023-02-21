import Link from 'next/link';
import { useState } from 'react';
import Styles from '../styles/Navbar.module.css';
import { useRouter } from 'next/router';
import { IoMenu } from 'react-icons/io5';

const Navbar = () =>
{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuClasses = (isMenuOpen ? '' : 'hidden') + ' w-full md:block md:w-auto';

    const { pathname } = useRouter();


    const navLinks = [
        {
            text: 'Home',
            href: '/',
            cssClasses: Styles.NavLink + (pathname === '/' ? ' ' + Styles.active : '')
        },
        {
            text: 'About',
            href: '/about',
            cssClasses: Styles.NavLink + (pathname === '/about' ? ' ' + Styles.active : '')
        },
        {
            text: 'Clients',
            href: '/testimonials',
            cssClasses: Styles.NavLink + (pathname === '/testimonials' ? ' ' + Styles.active : '')
        },
        {
            text: 'Contact',
            href: '/contact',
            cssClasses: Styles.NavLink + (pathname === '/contact' ? ' ' + Styles.active : '')
        }
    ];

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link href="/" className="flex items-center">
                    <img src="/images/logo.png" className="h-8 mr-3 sm:h-9" alt="CF Technologies logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap">CF Technologies</span>
                </Link>
                <button onClick={(e) => setIsMenuOpen(!isMenuOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <IoMenu className="text-2xl" />
                </button>
                <div className={menuClasses} id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} className={link.cssClasses}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;