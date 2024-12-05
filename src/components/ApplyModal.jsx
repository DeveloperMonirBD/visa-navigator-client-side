import React, { useContext, useState } from 'react';
import 'tailwindcss/tailwind.css';
import { AuthContext } from '../provider/AuthProvider';

const ApplyModal = ({ visa, setShowModal }) => {
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: user.email,
        firstName: user.displayName ? user.displayName.split(' ')[0] : '',
        lastName: user.displayName ? user.displayName.split(' ')[1] || '' : '',
        appliedDate: new Date().toISOString().slice(0, 10), // Current date in YYYY-MM-DD format
        fee: visa.fee
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
            const response = await fetch('http://localhost:5000/api/applications/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                alert('Application submitted successfully!');
                setShowModal(false);
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded-md w-1/2">
                <h2 className="text-xl font-bold mb-4">Apply for {visa.countryName} Visa</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Applied Date</label>
                        <input type="date" name="appliedDate" value={formData.appliedDate} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Fee (USD)</label>
                        <input type="number" name="fee" value={formData.fee} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                        Apply
                    </button>
                    <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded mt-4 ml-2" onClick={() => setShowModal(false)}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ApplyModal;
