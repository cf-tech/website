import { FaRocket } from 'react-icons/fa';

const Footer = () =>
{
    const year = new Date().getFullYear();

    return (
        <footer className="p-10 border justify-between bg-gray-900 shadow md:px-6 md:py-5 dark:bg-gray-900">

            <div className="container  items-center text-center justify-between mx-auto">
                <span className="block text-sm text-yellow-200 sm:text-center dark:text-yellow-200">
                    <FaRocket className="block w-4 h-4 mx-auto" />
                    CF Technologies &copy; {year}
                </span>
            </div>
        </footer>
    );
};

export default Footer;