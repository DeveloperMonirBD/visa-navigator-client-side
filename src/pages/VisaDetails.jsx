import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApplyModal from '../components/ApplyModal';
import PageTitle from '../components/PageTitle';
import { fadeIn } from '../variants';

const VisaDetails = () => {
    const { id } = useParams();
    const [visa, setVisa] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
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
    }, [id]);

    return (
        <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="max-w-7xl mx-auto px-4 py-20">
            {/* Setup Page-Title by react Helmet */}
            <PageTitle title="Visa Details" />

            {visa ? (
                <>
                    <h2 className="text- 3xl text-brandPrimary md:text-4xl font-bold mb-6">{visa.countryName} Visa Details</h2>

                    {/* Card start  */}

                    <div className="card md:card-side bg-base-100 shadow-xl space-x-6 md:space-x-10 dark:bg-neutral  dark:text-[#dddddd]">
                        <figure>
                            <div className="h-72 md:h-[500px] md:w-[400px] border dark:border-none">
                                <img src={visa.countryImage} alt={visa.countryName} className="h-full w-56 md:w-full object-cover" />
                            </div>
                        </figure>

                        <div className="text-base pr-3">
                            <h2 className="font-bold mt-6 md:mt-10 mb-4 text-lg text-brandSecondary md:text-3xl">{visa.visaType}!</h2>
                            <div className="space-y-2 text-lg">
                                <p>{visa.processingTime}</p>
                                <p>${visa.fee} USD</p>
                                <p>{visa.validity}</p>
                                <p>{visa.applicationMethod}</p>
                            </div>
                            <p className="text-lg mt-4">
                                <strong>Description:</strong>
                            </p>
                            <p className="mt-1 mb-4 mr-8">{visa.description}</p>

                            <div className="card-actions justify-start lg:mr-8 mb-8">
                                <button className="bg-brandPrimary text-brandLight px-4 py-4 rounded mt-6" onClick={() => setShowModal(true)}>
                                    Apply for the Visa
                                </button>
                            </div>
                        </div>
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
