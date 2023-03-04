import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';



export default function MainLayout({ children })
{
  return (
    <>
      <div className="bg-gray-300 md:flex h-500 flex-row justify-start">
        <Navbar style={{ width: "200px" }} />
        <main className="font-mono text-gray-900 md:grow">{children}</main>
      </div>
      <Footer />
    </>
  );
}

