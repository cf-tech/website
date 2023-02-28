import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function MainLayout({ children })
{
  return (
    <>
      <Navbar />
      <main className="font-mono text-gray-900">{children}</main>
      <Footer />
    </>
  );
}