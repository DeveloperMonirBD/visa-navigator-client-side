import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className="font-poppins">
            <Toaster position="top-right" reverseOrder={false} />
            <header className="sticky top-0 bg-white bg-opacity-30 backdrop-blur-sm shadow-sm z-10">
                {/* Navbar */}
                <Navbar />
            </header>

            <main className="bg-neutralSilver">
                {/* Dynamic Section  */}
                <div className="min-h-[calc(100vh-232px)] px-3">
                    <Outlet />
                </div>
            </main>

            <footer>
                {/* Footer  */}
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;
