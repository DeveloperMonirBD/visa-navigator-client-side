import { useLoaderData, Link } from 'react-router-dom';

const AllVisas = () => {
    const visas = useLoaderData();

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-6">All Visas</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {visas.map(visa => (
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
                        <Link to={`/visaDetails/${visa._id}`} className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block">
                            See Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllVisas;
