import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div className="font-poppins bg-base-200 dark:bg-gray-800 dark:text-white">
            <Toaster position="top-right" reverseOrder={false} />
            <header className="sticky top-0 backdrop-blur-2xl shadow-sm z-10 dark:backdrop-blur-none dark:bg-neutral dark:text-white">
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
