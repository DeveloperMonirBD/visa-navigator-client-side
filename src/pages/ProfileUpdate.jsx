/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const ProfileUpdate = () => {
    const { auth, updateUserProfile, setUser } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.currentUser) {
            setDisplayName(auth.currentUser.displayName || '');
            setPhotoURL(auth.currentUser.photoURL || '');
        }
    }, [auth.currentUser]);

    const handleSubmit = async e => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');
        if (displayName.length < 5) {
            setErrorMessage('Display name must be at least 5 characters long.');
            return;
        }
        if (photoURL && !isValidURL(photoURL)) {
            setErrorMessage('Please enter a valid URL for the photo.');
            return;
        }
        try {
            await updateUserProfile({ displayName, photoURL });
            setUser(auth.currentUser);
            toast.success('Profile updated successfully.');
            setTimeout(() => {
                navigate('/myProfile');
            }, 2000);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const isValidURL = string => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-md p-8 shadow-2xl">
                <h2 className="text-3xl font-semibold text-center">Update Profile</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base">Display Name</span>
                        </label>
                        <input
                            type="text"
                            value={displayName}
                            onChange={e => setDisplayName(e.target.value)}
                            placeholder="Enter your display name"
                            className="input input-bordered bg-[#F3F3F3]"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base">Photo URL</span>
                        </label>
                        <input type="text" value={photoURL} onChange={e => setPhotoURL(e.target.value)} placeholder="Enter your photo URL" className="input input-bordered bg-[#F3F3F3]" />
                    </div>
                    {successMessage && <p className="text-green-600 text-center mt-3">{successMessage}</p>}
                    {errorMessage && <p className="text-red-600 text-center mt-3">{errorMessage}</p>}
                    <div className="form-control mt-6">
                        <button className="btn text-white text-base bg-brandPrimary hover:text-gray-900">Update Profile</button>
                    </div>
                </form>
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default ProfileUpdate;
