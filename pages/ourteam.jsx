import Link from "next/link";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";



const OurteamPage = () =>
{
    return (
        <>
            <div>
                <h1 className="text-4xl p-10 text-center font-bold">Meet Our Team!</h1>
            </div>
            <div className="box-content h-50 w-100 md:px-30 md:py-10 p-30 bg-gray-900 rounded-lg md:ml-40 md:mr-40 mb-10">
                <ul className="list-inside text-yellow-300 text-center text-3xl">
                    <li>Carlos Ferreira <br /> <p className="text-2xl">Senior Web Developer & Founder of CF Tech</p></li>
                    <Link href="https://carlos.fyi/" target="_blank">
                        <img className="mx-auto py-5 align-middle object-center rounded-full" src="/images/carlos.jpg" width={300} />
                    </Link>
                    <div className="flex place-content-center">
                        <Link href="https://www.linkedin.com/in/cajogos/" target="_blank">
                            <SiLinkedin className="mx-5" />
                        </Link>
                        <Link href="https://github.com/cajogos" target="_blank">
                            <SiGithub />
                        </Link>
                    </div>
                </ul>
            </div>

            <div className="box-content h-50 w-100 md:px-30 md:py-10 p-30 bg-gray-900 rounded-lg md:ml-40 md:mr-40 mb-10">
                <ul className="list-inside text-yellow-300 text-center text-3xl">
                    <li>Daniela Sismey<br /> <p className="text-2xl">Intern Developer</p></li>
                    <Link href="https://danielasismey.netlify.app/" target="_blank">
                        <img className="mx-auto py-5 align-middle object-center rounded-full" src="/images/daniela.jpg" width={300} />
                    </Link>
                    <div className="flex place-content-center">
                        <Link href="https://www.linkedin.com/in/daniela-sismey-7b1572260/" target="_blank">
                            <SiLinkedin className="mx-5" />
                        </Link>
                        <Link href="https://github.com/yumemiku" target="_blank">
                            <SiGithub />
                        </Link>
                    </div>
                </ul>
            </div>

        </>
    );
};

export default OurteamPage;;;