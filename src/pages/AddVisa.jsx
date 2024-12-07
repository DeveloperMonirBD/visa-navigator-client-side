import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast, Toaster } from 'react-hot-toast';

const AddVisa = () => {
    const { user } = useContext(AuthContext);
    const [visa, setVisa] = useState({
        email: user.email,
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
        setVisa({
            ...visa,
            [e.target.name]: e.target.value
        });
    };

    const handleCheckboxChange = e => {
        if (e.target.checked) {
            setVisa({
                ...visa,
                requiredDocuments: [...visa.requiredDocuments, e.target.value]
            });
        } else {
            setVisa({
                ...visa,
                requiredDocuments: visa.requiredDocuments.filter(doc => doc !== e.target.value)
            });
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch('https://b10-a10-server-side-ten.vercel.app/api/visas/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(visa)
            });
            const data = await response.json();
            if (response.ok) {
                toast.success('Visa added successfully!');
                // Redirect or update state to show new visa in All Visas page
                setVisa({
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
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-brandPrimary text-4xl font-bold mb-6">Add Visa</h2>
            <form onSubmit={handleSubmit} className="space-y-4 text-base">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Country Image</label>
                    <input type="text" name="countryImage" value={visa.countryImage} onChange={handleChange} placeholder="Country Image URL" className="mt-1 p-2 border rounded w-full" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Country Name</label>
                    <input type="text" name="countryName" value={visa.countryName} onChange={handleChange} placeholder="Country Name" className="mt-1 p-2 border rounded w-full" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Visa Type</label>
                    <select name="visaType" value={visa.visaType} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required>
                        <option value="">Select Visa Type</option>
                        <option value="Tourist visa">Tourist Visa</option>
                        <option value="Student visa">Student Visa</option>
                        <option value="Official visa">Official Visa</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Processing Time</label>
                    <input type="text" name="processingTime" value={visa.processingTime} onChange={handleChange} placeholder="Processing Time" className="mt-1 p-2 border rounded w-full" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Required Documents</label>
                    <div className="mt-1 space-y-2">
                        <label className="block">
                            <input type="checkbox" value="Valid passport" onChange={handleCheckboxChange} className="mr-2" />
                            Valid passport
                        </label>
                        <label className="block">
                            <input type="checkbox" value="Visa application form" onChange={handleCheckboxChange} className="mr-2" />
                            Visa application form
                        </label>
                        <label className="block">
                            <input type="checkbox" value="Recent passport-sized photograph" onChange={handleCheckboxChange} className="mr-2" />
                            Recent passport-sized photograph
                        </label>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea name="description" value={visa.description} onChange={handleChange} placeholder="Description" className="mt-1 p-2 border rounded w-full" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Age Restriction</label>
                    <input type="number" name="ageRestriction" value={visa.ageRestriction} onChange={handleChange} placeholder="Age Restriction" className="mt-1 p-2 border rounded w-full" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Fee (USD)</label>
                    <input type="number" name="fee" value={visa.fee} onChange={handleChange} placeholder="Fee" className="mt-1 p-2 border rounded w-full" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Validity</label>
                    <input type="text" name="validity" value={visa.validity} onChange={handleChange} placeholder="Validity" className="mt-1 p-2 border rounded w-full" required />
                </div>
                <div className="pb-2">
                    <label className="block text-sm font-medium text-gray-700">Application Method</label>
                    <input
                        type="text"
                        name="applicationMethod"
                        value={visa.applicationMethod}
                        onChange={handleChange}
                        placeholder="Application Method"
                        className="mt-1 p-2 border rounded w-full"
                        required
                    />
                </div>
                <button type="submit" className="bg-brandPrimary text-brandLight px-6 py-3 rounded mt-4">
                    Add Visa
                </button>
            </form>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default AddVisa;
