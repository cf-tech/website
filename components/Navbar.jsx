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
            text: 'Our Team',
            href: '/ourteam',
            cssClasses: Styles.NavLink + (pathname === '/ourteam' ? ' ' + Styles.active : '')
        }
    ];

    return (
        <div className="h-500 font-mono bg-gray-900 border-gray-200 px-4 pb-4 pt-8 flex justify-between flex-col flex-grow-0 border">
            <div className="p-10">
                <button onClick={(e) => setIsMenuOpen(!isMenuOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <IoMenu className="text-2xl" />
                </button>
                <div className={menuClasses} id="navbar-default">
                    <Link href="/" className="flex items-center">
                        <img src="/images/logo.png" className="h-8 mr-3 sm:h-9" alt="CF Technologies logo" />
                        <span className="self-center text-3xl text-yellow-300 font-semibold whitespace-nowrap">CF Technologies</span>
                    </Link>
                    <ul className="border border-gray-100 rounded-lg bg-gray-50 text-center py-10 pb-10 md:text-2xl md:font-medium md:border-0 md:bg-gray-900">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} className={link.cssClasses}>
                                    {link.text}
                                </Link>
                                <br />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;