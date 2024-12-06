import { Link } from 'react-router-dom';
import { FaGithub, FaInstalod, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../assets/visaNavigator logo.png';

const Footer = () => {
    return (
        <div id="footer" className=" bg-gray-900 text-brandLight px-3 py-20 mt-20">
            <footer className="footer p-10 container mx-auto lg:flex lg:justify-between items-start gap-10">
                <nav>
                    <div>
                        <Link className=" text-brandPrimary text-4xl font-bold">
                            <img className=" w-28 rounded-xl shadow-2xl" src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="text-base space-y-2 mt-2">
                        <p>Location: av. Washington 165, NY CA 54003</p>
                        <p>Phone: +31 85 964 47 25</p>
                        <p>Email: info@yourdomain.com</p>
                        <p>Openings hours: 9.00 AM - 5.00 PM</p>
                    </div>
                    <div className="flex gap-10 mt-4">
                        <Link href="https://github.com/DeveloperMonirBD" target="_blank" rel="noopener noreferrer" className="bg-brandPrimary  p-2 rounded-full hover:text-gray-300">
                            <FaGithub />
                        </Link>
                        <Link to="https://www.linkedin.com/in/monirdeveloper/" target="_blank" rel="noopener noreferrer" className="bg-brandPrimary  p-2 rounded-full hover:text-gray-300">
                            <FaLinkedin />
                        </Link>
                        <Link to="https://x.com/Monir_Developer" target="_blank" rel="noopener noreferrer" className="bg-brandPrimary  p-2 rounded-full hover:text-gray-300">
                            <FaTwitter />
                        </Link>
                        <Link to="https://www.instagram.com/monirdeveloper/" target="_blank" rel="noopener noreferrer" className=" bg-brandPrimary  p-2 rounded-full hover:text-gray-300">
                            <FaInstalod />
                        </Link>
                    </div>
                </nav>

                <nav className="text-base">
                    <h6 className="text-2xl font-bold">Useful Links</h6>
                    <Link to="/" className="link link-hover">
                        Home
                    </Link>
                    <Link to="/allVisas" className="link link-hover">
                        All Visas
                    </Link>
                    <Link to="/addVisa" className="link link-hover">
                        Add Visa
                    </Link>
                    <Link to="/myAddedVisas" className="link link-hover">
                        My Added Visas
                    </Link>
                    <Link to="/myVisaApplication" className="link link-hover">
                        My Visa Application
                    </Link>
                    <Link to="/myProfile" className="link link-hover">
                        My Profile
                    </Link>
                </nav>

                <form className="text-gray-900">
                    <h6 className="text-2xl text-brandLight font-bold">Drop a Message</h6>
                    <fieldset className="form-control w-80">
                        <label className="label"></label>
                        <div className=" space-y-4">
                            <div>
                                <input type="text" placeholder="username@site.com" className="input input-bordered join-item w-full" />
                            </div>

                            <button type="submit" className="btn text-lg bg-brandPrimary text-brandLight hover:text-gray-900 join-item w-full">
                                Subscribe
                            </button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <div className="text-center p-8 container mt-4 mx-auto border-t">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by VISA NAVIGATOR</p>
            </div>
        </div>
    );
};

export default Footer;
