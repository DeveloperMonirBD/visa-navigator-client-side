import { FaGithub, FaInstalod, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/visaNavigator logo.png';

const Footer = () => {
    return (
        <div id="footer" className=" bg-[#2C2C54] text-brandLight px-3 pt-20 dark:bg-neutral  dark:text-[#dddddd]">
            <footer className="footer p-10 container mx-auto lg:flex lg:justify-between items-start gap-10">
                <nav>
                    <div>
                        <Link className=" text-brandPrimary text-4xl font-bold">
                            <img className=" w-24 rounded-xl transform transition-all hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl duration-300" src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="text-base space-y-2 mt-2">
                        <p>Location: Dhaka, Bangladesh</p>
                        <p>Phone: +88 01745286828</p>
                        <p>Email: mrmonir0558@gmail.com</p>
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
                        <form action="https://api.web3forms.com/submit" method="POST" className=" space-y-4">
                            <input type="hidden" name="access_key" value="affcf978-2dba-4c37-90b4-c96a6fc47a92" />
                            <div>
                                <input type="text" name="email" placeholder="username@site.com" className="input input-bordered join-item w-full" />
                            </div>

                            <button type="submit" className="btn text-lg bg-brandPrimary text-brandLight hover:text-gray-900 join-item w-full">
                                Subscribe
                            </button>
                        </form>
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
