import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ApplyModal from '../components/ApplyModal';
import { useAuth } from '../provider/AuthProvider';
import { fadeIn } from '../variants';

const VisaDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [visa, setVisa] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        console.log('Visa ID:', id); // ID চেক করার জন্য কনসোল লগ যোগ করুন

        if (!user) {
            navigate('/auth/login');
        } else {
            const fetchVisaDetails = async () => {
                try {
                    const response = await fetch(`https://b10-a10-server-side-ten.vercel.app/api/visas/${id}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    console.log('Fetched Visa Data:', data);
                    setVisa(data);
                } catch (error) {
                    console.error('Error fetching visa details:', error);
                }
            };
            if (id) {
                fetchVisaDetails(); // ID সঠিক হলে ফাংশন কল করুন
            }
        }
    }, [id, user, navigate]);

    if (!user) {
        return <p>Redirecting to login...</p>;
    }

    return (
        <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="container mx-auto px-4 py-8">
            {visa ? (
                <>
                    <h2 className="text-2xl font-bold mb-4">{visa.countryName} Visa Details</h2>
                    <div className="bg-brandLight shadow-md rounded-lg p-4">
                        <img src={visa.countryImage} alt={visa.countryName} className="w-full h-32 object-cover rounded-md mb-4" />
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
                        <p>
                            <strong>Description:</strong> {visa.description}
                        </p>
                        <button className="bg-blue-500 text-brandLight px-4 py-2 rounded mt-4" onClick={() => setShowModal(true)}>
                            Apply for the Visa
                        </button>
                    </div>
                    {showModal && <ApplyModal visa={visa} setShowModal={setShowModal} />}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </motion.div>
    );
};

export default VisaDetails;
