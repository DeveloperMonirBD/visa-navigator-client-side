import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllVisas = () => {
    const visas = useLoaderData();
    const [filteredVisas, setFilteredVisas] = useState(visas);
    const [selectedType, setSelectedType] = useState('');

    const handleFilterChange = event => {
        const visaType = event.target.value;
        setSelectedType(visaType);
        if (visaType === '') {
            setFilteredVisas(visas);
        } else {
            setFilteredVisas(visas.filter(visa => visa.visaType === visaType));
        }
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-6">All Visas</h1>

            <div className="mb-6">
                <label htmlFor="visaType" className="block text-sm font-medium text-gray-700">
                    Filter by Visa Type:
                </label>
                <select
                    id="visaType"
                    name="visaType"
                    value={selectedType}
                    onChange={handleFilterChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option value="">All Visa Types</option>
                    <option value="Tourist visa">Tourist Visa</option>
                    <option value="Student visa">Student Visa</option>
                    <option value="Official visa">Official Visa</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredVisas.map(visa => (
                    <div key={visa._id} className="bg-brandLight shadow-md rounded-lg p-4">
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
                        <Link to={`/visaDetails/${visa._id}`} className="bg-blue-500 text-brandLight px-4 py-2 rounded mt-4 inline-block">
                            See Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllVisas;
