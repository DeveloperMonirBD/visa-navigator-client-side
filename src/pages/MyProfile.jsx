//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';


import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import userIcon from '../assets/user.png';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="text-brandPrimary text-3xl font-bold text-center mb-10 mt-10">
                <span className="text-gray-900">"Welcome To</span> My Profile"
            </motion.div>
            <motion.div
                variants={fadeIn('left', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="flex flex-col w-96 mx-auto justify-center items-center text-center bg-base-200 p-10 rounded-2xl shadow-xl">
                <div className="font-semibold flex">
                    {user && user?.email ? (
                        <div className="space-y-2">
                            <img className="object-cover object-center w-full" src={user?.photoURL} alt="" />
                            <p>{user.email}</p>
                            <p>Welcome To {user.displayName}</p>
                        </div>
                    ) : (
                        <img src={userIcon} alt="" />
                    )}
                </div>
                <Link to="/auth/profileUpdate" className="btn mt-4 bg-brandPrimary text-white hover:bg-gray-900 transition">
                    Update Profile
                </Link>
            </motion.div>
        </>
    );
};

export default MyProfile;
