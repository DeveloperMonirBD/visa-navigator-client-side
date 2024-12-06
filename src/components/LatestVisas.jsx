import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LatestVisas = () => {
    const [latestVisas, setLatestVisas] = useState([]);

    useEffect(() => {
        const fetchLatestVisas = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/latestVisas');
                const data = await response.json();
                setLatestVisas(data);
            } catch (error) {
                console.error('Error fetching latest visas:', error);
            }
        };

        fetchLatestVisas();
    }, []);

    return (
        <div className="container mx-auto py-8 px-4">
            <h2 className="text-2xl font-bold mb-6">Latest Visas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {latestVisas.map(visa => (
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
                        <p>
                            <strong>Validity:</strong> {visa.validity}
                        </p>
                        <p>
                            <strong>Application Method:</strong> {visa.applicationMethod}
                        </p>
                        <Link to={`/visaDetails/${visa._id}`} className="bg-blue-500 text-brandLight px-4 py-2 rounded mt-4 inline-block">
                            See Details
                        </Link>
                    </div>
                ))}
            </div>
            <Link to="/allVisas" className="bg-blue-500 text-brandLight px-4 py-2 rounded mt-6 inline-block">
                See All Visas
            </Link>
        </div>
    );
};

export default LatestVisas;
