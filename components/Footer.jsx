import { FaRocket } from 'react-icons/fa';

const Footer = () =>
{
    const year = new Date().getFullYear();

    return (
        <footer className="p-1 bg-gray-900 rounded-lg shadow md:px-6 md:py-1 dark:bg-gray-900">
            <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
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