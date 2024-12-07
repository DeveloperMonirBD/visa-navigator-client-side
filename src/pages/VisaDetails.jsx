import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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
        console.log('Visa ID:', id);

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
                fetchVisaDetails();
            }
        }
    }, [id, user, navigate]);

    if (!user) {
        return <p>Redirecting to login...</p>;
    }

    return (
        <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="max-w-4xl mx-auto px-4 py-20">
            {visa ? (
                <>
                    <h2 className="text- 3xl text-brandPrimary md:text-4xl font-bold mb-6">{visa.countryName} Visa Details</h2>
                    <div className="bg-brandLight shadow-lg rounded-2xl p-4 md:p-12 text-base md:text-lg md:space-y-2">
                        <img src={visa.countryImage} alt={visa.countryName} className="w-full h-56 md:h-72 object-cover rounded-lg mb-6" />
                        <p>
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
                        <p>
                            <strong>Application Method:</strong> {visa.applicationMethod}
                        </p>
                        <p className="pb-4">
                            <strong>Description:</strong> {visa.description}
                        </p>
                        <button className="bg-brandPrimary text-brandLight px-4 py-4 rounded mt-6" onClick={() => setShowModal(true)}>
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
