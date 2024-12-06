import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyVisaApplication = () => {
    const { user } = useContext(AuthContext);
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/applications?email=${user.email}`);
                const data = await response.json();
                setApplications(data);
            } catch (error) {
                console.error('Error fetching applications:', error);
            }
        };

        fetchApplications();
    }, [user.email]);

    const handleCancel = async id => {
        try {
            const response = await fetch(`http://localhost:5000/api/applications/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setApplications(applications.filter(application => application._id !== id));
                alert('Application cancelled successfully!');
            } else {
                alert('Failed to cancel the application.');
            }
        } catch (error) {
            console.error('Error cancelling application:', error);
            alert('An error occurred while cancelling the application.');
        }
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <h2 className="text-2xl font-bold mb-6">My Visa Applications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {applications.map(application => (
                    <div key={application._id} className="bg-white shadow-md rounded-lg p-4">
                        <img src={application.countryImage} alt={application.countryName} className="w-full h-32 object-cover rounded-md mb-4" />
                        <h2 className="text-xl font-semibold mb-2">{application.countryName}</h2>
                        <p>
                            <strong>Visa Type:</strong> {application.visaType}
                        </p>
                        <p>
                            <strong>Processing Time:</strong> {application.processingTime}
                        </p>
                        <p>
                            <strong>Fee:</strong> {application.fee} USD
                        </p>
                        <p>
                            <strong>Validity:</strong> {application.validity}
                        </p>
                        <p>
                            <strong>Application Method:</strong> {application.applicationMethod}
                        </p>
                        <p>
                            <strong>Applied Date:</strong> {application.appliedDate}
                        </p>
                        <p>
                            <strong>Applicant's Name:</strong> {`${application.firstName} ${application.lastName}`}
                        </p>
                        <p>
                            <strong>Applicant's Email:</strong> {application.email}
                        </p>
                        <button className="bg-red-500 text-white px-4 py-2 rounded mt-4" onClick={() => handleCancel(application._id)}>
                            Cancel
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyVisaApplication;
