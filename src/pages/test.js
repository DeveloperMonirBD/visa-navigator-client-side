import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${user?.email}`
                    }
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
        try {
            const response = await fetch(`https://b10-a10-server-side-ten.vercel.app/api/visas/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setMyAddedVisas(myAddedVisas.filter(visa => visa._id !== id));
                alert('Visa deleted successfully!');
            } else {
                alert('Failed to delete the visa.');
            }
        } catch (error) {
            console.error('Error deleting visa:', error);
            alert('An error occurred while deleting the visa.');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <h2 className="text-2xl font-bold mb-6">My Added Visas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {myAddedVisas.map(visa => (
                    <div key={visa._id} className="bg-white shadow-md rounded-lg p-4">
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
                        <p>
                            <strong>Validity:</strong> {visa.validity}
                        </p>
                        <p>
                            <strong>Application Method:</strong> {visa.applicationMethod}
                        </p>
                        <Link to={`/updateVisa/${visa._id}`} className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block">
                            Update
                        </Link>
                        <button className="bg-red-500 text-white px-4 py-2 rounded mt-4 ml-2" onClick={() => handleDelete(visa._id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAddedVisas;
