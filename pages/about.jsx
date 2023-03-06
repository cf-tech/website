const AboutPage = () =>
{
    return (
        <>

            <div>
                <h1 className="text-4xl p-5 text-center font-bold">About Us</h1>
            </div>

            <div className="p-5" >
                <p className="p-6 text-2xl text-center">At CF technologies, we offer software development services, including web application development, mobile applications and desktop experiences. <br /> <br />
                    Our offices are physically located in London, GB but we work with a variety of companies across the globe!
                </p>
            </div>

            <div className="flex-auto box-content h-50 w-50 md:px-40 md:py-10 p-5 bg-gray-900 rounded-full md:ml-80 md:mr-80 mb-10">
                <h1 className="text-2xl text-center text-yellow-300 font-semibold">Our skill set:</h1>
                <ul className="list-inside text-yellow-300 text-center">
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Web Application Development</li>
                    <li>Server Management</li>
                    <li>Software Architecture</li>
                    <li>NextJs</li>
                </ul>

            </div>
        </>
    );
};

export default AboutPage;