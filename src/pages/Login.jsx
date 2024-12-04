
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { useContext, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../src/assets/google.png';
import { AuthContext } from '../provider/AuthProvider';

import { toast, Toaster } from 'react-hot-toast';

const Login = () => {
    const { userLogin, setUser, auth } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();

    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : '/');
                toast.success('Successfully logged in!');
            })
            .catch(err => {
                setError({ ...error, login: err.code });
                toast.error(`Error: ${err.message}`);
            });
    };

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                navigate(location?.state ? location.state : '/');
                toast.success('Successfully logged in with Google!');
            })
            .catch(err => {
                toast.error(`Google login failed: ${err.message}`);
            });
    };

    const handleForgetPassword = () => {
        const email = emailRef.current.value;

        if (!email) {
            toast.error('Please provide a valid email address');
        } else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    toast.success('Password reset email sent, please check your email');
                })
                .catch(err => {
                    toast.error(`Error: ${err.message}`);
                });
        }
    };

    return (
        <div className="md:min-h-[calc(100vh-200px)] flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl md:p-8 pt-6">
                <h2 className="text-4xl font-semibold text-center text-brandPrimary pt-6">Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base">Email</span>
                        </label>
                        <input type="email" name="email" ref={emailRef} placeholder="Enter your email" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-base">Password</span>
                        </label>

                        <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter your password" className="input input-bordered bg-[#F3F3F3]" required />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-3 text-lg top-12">
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>

                        {error.login && <label className="label text-red-600 text-sm">{error.login}</label>}

                        <label onClick={handleForgetPassword} className="label">
                            <Link to="#" className="label-text-alt link link-hover text-base">
                                Forgot password?
                            </Link>
                        </label>
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn text-white text-base btn-neutral">Login</button>
                    </div>

                    <div className="form-control mt-6 flex justify-center gap-3">
                        <button type="button" onClick={handleGoogleLogin} className="btn text-base bg-brandPrimary ">
                            <img className="w-6 mr-1 shadow-2xl" src={google} alt="" /> Google Login
                        </button>
                    </div>
                </form>

                <p className="text-center text-gray-500 font-semibold pb-10">
                    <span>Don’t Have An Account ? </span>
                    <Link className="text-red-400 link-hover" to="/auth/register">
                        Register
                    </Link>
                </p>
            </div>

            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default Login;

