/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import 'tailwindcss/tailwind.css';
import { AuthContext } from '../provider/AuthProvider';

const ApplyModal = ({ visa, setShowModal }) => {
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: user.email,
        firstName: user.displayName ? user.displayName.split(' ')[0] : '',
        lastName: user.displayName ? user.displayName.split(' ')[1] || '' : '',
        appliedDate: new Date().toISOString().slice(0, 10),
        fee: visa.fee,
        countryName: visa.countryName,
        visaType: visa.visaType,
        processingTime: visa.processingTime,
        validity: visa.validity,
        applicationMethod: visa.applicationMethod,
        description: visa.description,
        countryImage: visa.countryImage
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch('https://b10-a10-server-side-ten.vercel.app/api/applications/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                toast.success('Application submitted successfully!');
                setShowModal(false);
            } else {
                toast.error(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-brandLight p-6 md:p-8 mx-4 rounded-xl w-full  md:w-1/2 dark:bg-neutral  dark:text-[#dddddd]">
                <h2 className="text-brandPrimary text-2xl font-bold mb-6">Apply for {visa.countryName} Visa</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-[#dddddd]">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border rounded w-full dark:bg-neutral  dark:text-[#dddddd]" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-[#dddddd]">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded w-full dark:bg-neutral  dark:text-[#dddddd]"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-[#dddddd]">Last Name</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 p-2 border rounded w-full dark:bg-neutral  dark:text-[#dddddd]" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-[#dddddd]">Applied Date</label>
                        <input
                            type="date"
                            name="appliedDate"
                            value={formData.appliedDate}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded w-full dark:bg-neutral  dark:text-[#dddddd]"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-[#dddddd]">Fee (USD)</label>
                        <input type="number" name="fee" value={formData.fee} onChange={handleChange} className="mt-1 p-2 border rounded w-full dark:bg-neutral  dark:text-[#dddddd]" required />
                    </div>
                    <button type="submit" className="bg-blue-500 text-brandLight px-4 py-2 rounded mt-4">
                        Apply
                    </button>
                    <button type="button" className="bg-gray-500 text-brandLight px-4 py-2 rounded mt-4 ml-2" onClick={() => setShowModal(false)}>
                        Cancel
                    </button>
                </form>
            </div>

            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default ApplyModal;
