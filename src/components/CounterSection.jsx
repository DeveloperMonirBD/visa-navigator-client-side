//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

import { useEffect, useState } from 'react';
import { FaDollarSign, FaGlobe, FaPassport, FaUserTie } from 'react-icons/fa';

const CounterSection = () => {
    const [countries, setCountries] = useState(0);
    const [visas, setVisas] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const [experience, setExperience] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountries(prevCount => (prevCount < 35 ? prevCount + 1 : 35));
            setVisas(prevCount => (prevCount < 320 ? prevCount + 10 : 320));
            setRevenue(prevCount => (prevCount < 55 ? prevCount + 1 : 55));
            setExperience(prevCount => (prevCount < 3 ? prevCount + 1 : 3));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="countersection bg-gray-100 dark:bg-gray-800 py-8">
            <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.4 }} className="container mx-auto px-4">
                <div className="flex flex-wrap justify-around">
                    <div className="counter-item text-center p-4 flex flex-col justify-center items-center gap-5">
                        <div className="counter-icon mb-2">
                            <FaGlobe className="text-5xl text-blue-500 dark:text-blue-300" />
                        </div>
                        <div className="counter-number text-3xl font-bold text-gray-900 dark:text-gray-100">{countries}+</div>
                        <div className="counter-label text-base text-gray-600 dark:text-gray-400">Countries Represented</div>
                    </div>
                    <div className="counter-item text-center p-4 flex flex-col justify-center items-center gap-5">
                        <div className="counter-icon mb-2">
                            <FaPassport className="text-5xl text-green-500 dark:text-green-300" />
                        </div>
                        <div className="counter-number text-3xl font-bold text-gray-900 dark:text-gray-100">{visas}+</div>
                        <div className="counter-label text-base text-gray-600 dark:text-gray-400">Completed Visa Passport</div>
                    </div>
                    <div className="counter-item text-center p-4 flex flex-col justify-center items-center gap-5">
                        <div className="counter-icon mb-2">
                            <FaDollarSign className="text-5xl text-yellow-500 dark:text-yellow-300" />
                        </div>
                        <div className="counter-number text-3xl font-bold text-gray-900 dark:text-gray-100">{revenue}M+</div>
                        <div className="counter-label text-base text-gray-600 dark:text-gray-400">Revenue In per year</div>
                    </div>
                    <div className="counter-item text-center p-4 flex flex-col justify-center items-center gap-5">
                        <div className="counter-icon mb-2">
                            <FaUserTie className="text-5xl text-purple-500 dark:text-purple-300" />
                        </div>
                        <div className="counter-number text-3xl font-bold text-gray-900 dark:text-gray-100">{experience}+</div>
                        <div className="counter-label text-base text-gray-600 dark:text-gray-400">Experience immigration officer</div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CounterSection;
