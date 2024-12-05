import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/visaNavigator logo.png';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <li className="hover:text-brandPrimary">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-brandPrimary">
                <NavLink to="/allVisas">All Visas</NavLink>
            </li>
            <li className="hover:text-brandPrimary">
                <NavLink to="/addVisa">Add Visa</NavLink>
            </li>
            <li className="hover:text-brandPrimary">
                <NavLink to="/myAddedVisas">My Added Visas</NavLink>
            </li>
            <li className="hover:text-brandPrimary">
                <NavLink to="/myVisaApplication">My Visa Application</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar container mx-auto px-3 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-md dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-3 shadow text-gray-600 font-semibold gap-2">
                        {links}
                        {user && user?.email ? (
                            <button onClick={logOut} className="btn button-primary font-bold">
                                Log out
                            </button>
                        ) : (
                            <>
                                <Link to="/auth/login" className="btn button-primary font-bold">
                                    Login
                                </Link>
                                <Link to="/auth/register" className="btn button-primary  font-bold lg:ml-2">
                                    Register
                                </Link>
                            </>
                        )}
                    </ul>
                </div>
                <Link to="/" className="text-2xl font-extrabold text-brandPrimary flex items-center gap-2">
                    <img className="hidden md:flex w-52 rounded-xl" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-600 gap-2 font-semibold">{links}</ul>
            </div>
            <div className="navbar-end md:flex gap-3">
                <div className="">
                    {user && user?.email ? (
                        <div className="relative flex items-center gap-2 group">
                            {/* Added group class */}
                            <Link to="/myProfile" className="flex lg:ml-10 items-center gap-2">
                                <img className="w-14 h-14 rounded-full object-cover object-center" src={user?.photoURL} alt="" />
                            </Link>
                            <span className="absolute min-w-48 top-full right-0 lg:-right-10 mt-2 bg-white text-brandPrimary font-bold border border-gray-200 rounded shadow-md p-3 text-sm hidden group-hover:block">{user.displayName}</span>
                        </div>
                    ) : (
                        <img className="rounded-full" src={userIcon} alt="user" />
                    )}
                </div>

                <div className="hidden lg:flex">
                    {user && user?.email ? (
                        <button onClick={logOut} className="btn button-primary font-bold">
                            Log out
                        </button>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link to="/auth/login" className="btn button-primary font-bold">
                                Login
                            </Link>
                            <Link to="/auth/register" className="btn button-primary font-bold">
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
