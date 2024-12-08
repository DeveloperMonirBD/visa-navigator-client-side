//motion
import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fadeIn } from '../variants';

const LatestVisas = () => {
    const [latestVisas, setLatestVisas] = useState([]);

    useEffect(() => {
        const fetchLatestVisas = async () => {
            try {
                const response = await fetch('https://b10-a10-server-side-ten.vercel.app/api/latestVisas');
                const data = await response.json();
                setLatestVisas(data);
            } catch (error) {
                console.error('Error fetching latest visas:', error);
            }
        };

        fetchLatestVisas();
    }, []);

    return (
        <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.6 }} className="container mx-auto py-8 px-4">
            <h2 className="text-brandPrimary text-4xl font-bold mb-8">Latest Visas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
                {latestVisas.map(visa => (
                    <div
                        key={visa._id}
                        className="bg-brandLight rounded-2xl p-4 lg:p-8 space-y-1 transform transition-all hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl duration-300 dark:bg-neutral  dark:text-[#dddddd]">
                        <img src={visa.countryImage} alt={visa.countryName} className="w-full h-48 lg:h-56 object-cover rounded-lg mb-4" />
                        <h2 className="text-2xl font-semibold mb-3">{visa.countryName}</h2>
                        <p className="pt-1">
                            <strong>Visa Type:</strong> {visa.visaType}
                        </p>
                        <p>
                            <strong>Processing Time:</strong> {visa.processingTime}
                        </p>
                        <p>
                            <strong>Fee:</strong> ${visa.fee} USD
                        </p>
                        <p>
                            <strong>Validity:</strong> {visa.validity}
                        </p>
                        <p className="pb-3">
                            <strong>Application Method:</strong> {visa.applicationMethod}
                        </p>
                        <Link to={`/visaDetails/${visa._id}`} className="bg-blue-500 text-brandLight px-4 py-3 rounded mt-4 inline-block">
                            See Details
                        </Link>
                    </div>
                ))}
            </div>
            <Link to="/allVisas" className="bg-blue-500 text-brandLight px-4 py-3 rounded mt-8 inline-block">
                See All Visas
            </Link>
        </motion.div>
    );
};

export default LatestVisas;
