import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div className="font-poppins dark:bg-gray-800 dark:text-white">
            <Toaster position="top-right" reverseOrder={false} />
            <header className="sticky top-0 backdrop-blur-xl shadow-sm z-10">
                {/* Navbar */}
                <Navbar />
            </header>

            <main>
                {/* Dynamic Section  */}
                <div className="min-h-[calc(100vh-232px)] px-3 pb-20">
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
