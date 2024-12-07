//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

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
        <div className="container mx-auto pt-10 pb-20 px-4">
            <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.4 }}>
                <h1 className="text-brandPrimary text-4xl font-bold mb-6">All Visas</h1>

                <div className="mb-8">
                    <label htmlFor="visaType" className="block text-base font-medium text-gray-700">
                        Filter by Visa Type:
                    </label>
                    <select
                        id="visaType"
                        name="visaType"
                        value={selectedType}
                        onChange={handleFilterChange}
                        className="mt-2 block w-full pl-3 pr-10 py-4 text-base border-brandPrimary focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md rounded-lg">
                        <option value="">All Visa Types</option>
                        <option value="Tourist visa">Tourist Visa</option>
                        <option value="Student visa">Student Visa</option>
                        <option value="Official visa">Official Visa</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredVisas.map(visa => (
                        <div key={visa._id} className="bg-brandLight shadow-lg rounded-2xl p-6 md:p-6 space-y-1">
                            <img src={visa.countryImage} alt={visa.countryName} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h2 className="text-2xl font-semibold">{visa.countryName}</h2>
                            <p className="pt-2">
                                <strong>Visa Type:</strong> {visa.visaType}
                            </p>
                            <p>
                                <strong>Processing Time:</strong> {visa.processingTime}
                            </p>
                            <p className="pb-2">
                                <strong>Fee:</strong> ${visa.fee} USD
                            </p>
                            <Link to={`/visaDetails/${visa._id}`} className="bg-brandPrimary text-brandLight px-4 py-3 rounded mt-4 inline-block">
                                See Details
                            </Link>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default AllVisas;
