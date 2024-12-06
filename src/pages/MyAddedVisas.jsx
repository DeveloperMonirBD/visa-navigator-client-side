import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyAddedVisas = () => {
    const { user } = useContext(AuthContext);
    const [visas, setVisas] = useState([]);
    const [selectedVisa, setSelectedVisa] = useState(null);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    useEffect(() => {
        const fetchVisas = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/visas?email=${user.email}`);
                const data = await response.json();
                setVisas(data);
            } catch (error) {
                console.error('Error fetching visas:', error);
            }
        };

        fetchVisas();
    }, [user.email]);

    const handleDelete = async id => {
        try {
            const response = await fetch(`http://localhost:5000/api/visas/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setVisas(visas.filter(visa => visa._id !== id));
                alert('Visa deleted successfully!');
            } else {
                alert('Failed to delete the visa.');
            }
        } catch (error) {
            console.error('Error deleting visa:', error);
            alert('An error occurred while deleting the visa.');
        }
    };

    const handleUpdate = visa => {
        setSelectedVisa(visa);
        setShowUpdateModal(true);
    };

    const handleUpdateSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/visas/${selectedVisa._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(selectedVisa)
            });
            const data = await response.json();
            if (response.ok) {
                setVisas(visas.map(visa => (visa._id === selectedVisa._id ? selectedVisa : visa)));
                setShowUpdateModal(false);
                alert('Visa updated successfully!');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error updating visa:', error);
            alert('An error occurred while updating the visa.');
        }
    };

    const handleChange = e => {
        setSelectedVisa({
            ...selectedVisa,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <h2 className="text-2xl font-bold mb-6">My Added Visas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {visas.map(visa => (
                    <div key={visa._id} className="bg-white shadow-md rounded-lg p-4">
                        <img src={visa.countryImage} alt={visa.countryName} className="w-full h-32 object-cover rounded-md mb-4" />
                        <h2 className="text-xl font-semibold mb-2">{visa.countryName}</h2>
                        <p>
                            <strong>Visa Type:</strong> {visa.visaType}
                        </p>
                        <p>
                            <strong>Processing Time:</strong> {visa.processingTime}
                        </p>
                        <p>
                            <strong>Fee:</strong> {visa.fee} USD
                        </p>
                        <p>
                            <strong>Validity:</strong> {visa.validity}
                        </p>
                        <p>
                            <strong>Application Method:</strong> {visa.applicationMethod}
                        </p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={() => handleUpdate(visa)}>
                            Update
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded mt-4 ml-2" onClick={() => handleDelete(visa._id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            {showUpdateModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md w-1/2">
                        <h2 className="text-xl font-bold mb-4">Update Visa Information</h2>
                        <form onSubmit={handleUpdateSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Country</label>
                                <input type="text" name="countryName" value={selectedVisa.countryName} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Visa Type</label>
                                <input type="text" name="visaType" value={selectedVisa.visaType} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required />{' '}
                            </div>{' '}
                            <div>
                                {' '}
                                <label className="block text-sm font-medium text-gray-700">Processing Time</label>{' '}
                                <input type="text" name="processingTime" value={selectedVisa.processingTime} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required />{' '}
                            </div>{' '}
                            <div>
                                {' '}
                                <label className="block text-sm font-medium text-gray-700">Fee (USD)</label>{' '}
                                <input type="number" name="fee" value={selectedVisa.fee} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required />{' '}
                            </div>{' '}
                            <div>
                                {' '}
                                <label className="block text-sm font-medium text-gray-700">Validity</label>{' '}
                                <input type="text" name="validity" value={selectedVisa.validity} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required />{' '}
                            </div>{' '}
                            <div>
                                {' '}
                                <label className="block text-sm font-medium text-gray-700">Application Method</label>{' '}
                                <input type="text" name="applicationMethod" value={selectedVisa.applicationMethod} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required />{' '}
                            </div>{' '}
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                                {' '}
                                Update{' '}
                            </button>{' '}
                            <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded mt-4 ml-2" onClick={() => setShowUpdateModal(false)}>
                                {' '}
                                Cancel{' '}
                            </button>{' '}
                        </form>{' '}
                    </div>{' '}
                </div>
            )}{' '}
        </div>
    );
};
export default MyAddedVisas;
