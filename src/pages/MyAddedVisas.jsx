//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
const MyAddedVisas = () => {
    const { user } = useContext(AuthContext);
    const [myAddedVisas, setMyAddedVisas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                if (!user?.email) {
                    console.log('User is not logged in.');
                    setLoading(false);
                    return;
                }
                const response = await fetch('https://b10-a10-server-side-ten.vercel.app/myAddedVisas', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user?.email}` }
                });
                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error fetching data:', errorData.message);
                    setError(errorData.message);
                    setLoading(false);
                    return;
                }
                const data = await response.json();
                setMyAddedVisas(data);
            } catch (error) {
                console.error('Error fetching visa applications:', error);
                setError('An error occurred while fetching data');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [user?.email]);

    const handleDelete = async id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async result => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`https://b10-a10-server-side-ten.vercel.app/api/visas/${id}`, { method: 'DELETE' });
                    if (response.ok) {
                        setMyAddedVisas(myAddedVisas.filter(visa => visa._id !== id));
                        Swal.fire({ title: 'Deleted!', text: 'Your visa has been deleted.', icon: 'success' });
                    } else {
                        Swal.fire({ title: 'Failed!', text: 'Failed to delete the visa.', icon: 'error' });
                    }
                } catch (error) {
                    console.error('Error deleting visa:', error);
                    Swal.fire({ title: 'Error!', text: 'An error occurred while deleting the visa.', icon: 'error' });
                }
            }
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div className="flex justify-center pt-20 text-rose-600 font-bold text-base">{error}</div>;
    }
    return (
        <div className="container mx-auto py-16 px-4">
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.6 }}>
                <h2 className="text-brandPrimary text-4xl font-bold mb-8">My Added Visas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
                    {myAddedVisas.map(visa => (
                        <div key={visa._id} className="bg-white shadow-lg rounded-2xl p-6 lg:p-8 space-y-1">
                            <img src={visa.countryImage} alt={visa.countryName} className="w-full h-48 lg:h-56 object-cover rounded-lg mb-4" />
                            <h2 className="text-2xl font-semibold mb-2">{visa.countryName}</h2>
                            <p className="pt-2">
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
                            <Link to={`/updateVisa/${visa._id}`} className="bg-blue-500 text-white px-6 py-3 rounded mt-4 inline-block">
                                Update
                            </Link>
                            <button className="bg-red-500 text-white px-6 py-3 rounded mt-4 ml-3" onClick={() => handleDelete(visa._id)}>
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};
export default MyAddedVisas;
