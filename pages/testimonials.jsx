import Link from 'next/link';

const TestimonialsPage = () =>
{
    return (
        <>
            <div>
                <h1 className="text-4xl p-5 text-center font-bold">Our Clients</h1>
            </div>
            <div>
                <div className="flex px-20">
                    <Link href="https://uk.advfn.com/" target="_blank">
                        <img className="p-5" src="/images/advfn.png" width={400} />
                    </Link>
                    <Link href="https://www.pfc-engineering.com/" target="_blank">
                        <img className="object-right pt-5 pl-10" src="/images/pfc.png" width={400} />
                    </Link>
                </div>
                <div className="flex p-10">
                    <Link href="https://nwr-recruitment.com/" target="_blank">
                        <img className="p-1" src="/images/nwr.png" width={370} />
                    </Link>
                    <Link href="https://pypeline.co/" target="_blank">
                        <img className="object-right p-1" src="/images/pypeline.png" width={400} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default TestimonialsPage;