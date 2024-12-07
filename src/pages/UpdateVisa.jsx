import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateVisa = () => {
    const navigate = useNavigate();
    const LoadedVisa = useLoaderData();

    const [formData, setFormData] = useState({
        countryImage: '',
        countryName: '',
        visaType: '',
        processingTime: '',
        requiredDocuments: [],
        description: '',
        ageRestriction: '',
        fee: '',
        validity: '',
        applicationMethod: ''
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCheckboxChange = e => {
        if (e.target.checked) {
            setFormData({
                ...formData,
                requiredDocuments: [...formData.requiredDocuments, e.target.value]
            });
        } else {
            setFormData({
                ...formData,
                requiredDocuments: formData.requiredDocuments.filter(doc => doc !== e.target.value)
            });
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch(`https://b10-a10-server-side-ten.vercel.app/visas/${LoadedVisa._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Visa updated successfully!');
                navigate('/myAddedVisas');
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.error('Error updating visa:', error);
            alert('An error occurred while updating the visa.');
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Update Visa Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Country Image</label>
                    <input type="text" name="countryImage" value={formData.countryImage} onChange={handleChange} placeholder="Country Image URL" className="mt-1 p-2 border rounded w-full" required />
                </div>
                <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Country Name</label>
                    <input type="text" name="countryName" value={formData.countryName} onChange={handleChange} placeholder="Country Name" className="mt-1 p-2 border rounded w-full" required />
                </div>
                <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Visa Type</label>
                    <select name="visaType" value={formData.visaType} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required>
                        <option value="">Select Visa Type</option>
                        <option value="Tourist visa">Tourist Visa</option>
                        <option value="Student visa">Student Visa</option>
                        <option value="Official visa">Official Visa</option>
                    </select>
                </div>
                <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Processing Time</label>
                    <input
                        type="text"
                        name="processingTime"
                        value={formData.processingTime}
                        onChange={handleChange}
                        placeholder="Processing Time"
                        className="mt-1 p-2 border rounded w-full"
                        required
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Required Documents</label>
                    <div className="mt-1 space-y-2">
                        <label className="block">
                            <input type="checkbox" value="Valid passport" checked={formData.requiredDocuments.includes('Valid passport')} onChange={handleCheckboxChange} className="mr-2" />
                            Valid passport
                        </label>
                        <label className="block">
                            <input
                                type="checkbox"
                                value="Visa application form"
                                checked={formData.requiredDocuments.includes('Visa application form')}
                                onChange={handleCheckboxChange}
                                className="mr-2"
                            />
                            Visa application form
                        </label>
                        <label className="block">
                            <input
                                type="checkbox"
                                value="Recent passport-sized photograph"
                                checked={formData.requiredDocuments.includes('Recent passport-sized photograph')}
                                onChange={handleCheckboxChange}
                                className="mr-2"
                            />
                            Recent passport-sized photograph
                        </label>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="mt-1 p-2 border rounded w-full" required />
                </div>
                <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Age Restriction</label>
                    <input
                        type="number"
                        name="ageRestriction"
                        value={formData.ageRestriction}
                        onChange={handleChange}
                        placeholder="Age Restriction"
                        className="mt-1 p-2 border rounded w-full"
                        required
                    />
                </div>
                <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Fee (USD)</label>
                    <input type="number" name="fee" value={formData.fee} onChange={handleChange} placeholder="Fee" className="mt-1 p-2 border rounded w-full" required />
                </div>
                <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Validity</label>
                    <input type="text" name="validity" value={formData.validity} onChange={handleChange} placeholder="Validity" className="mt-1 p-2 border rounded w-full" required />
                </div>
                <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Application Method</label>
                    <input
                        type="text"
                        name="applicationMethod"
                        value={formData.applicationMethod}
                        onChange={handleChange}
                        placeholder="Application Method"
                        className="mt-1 p-2 border rounded w-full"
                        required
                    />
                </div>
                <div className="md:col-span-2 flex justify-end space-x-2">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full md:w-auto">
                        Update
                    </button>
                    <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded mt-4 w-full md:w-auto ml-0 md:ml-2" onClick={() => navigate('/myAddedVisas')}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateVisa;
