//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

import { useContext, useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { AuthContext } from '../provider/AuthProvider';

const MyVisaApplication = () => {
    const { user } = useContext(AuthContext);
    const [applications, setApplications] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredApplications, setFilteredApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await fetch(`https://b10-a10-server-side-ten.vercel.app/api/applications?email=${user.email}`);
                const data = await response.json();
                setApplications(data);
                setFilteredApplications(data);
            } catch (error) {
                console.error('Error fetching applications:', error);
            }
        };

        fetchApplications();
    }, [user.email]);

    const handleCancel = async id => {
        const swalWithTailwindButtons = Swal.mixin({
            customClass: {
                confirmButton: 'bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded',
                cancelButton: 'bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded'
            },
            buttonsStyling: true
        });

        swalWithTailwindButtons
            .fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            })
            .then(async result => {
                if (result.isConfirmed) {
                    try {
                        const response = await fetch(`https://b10-a10-server-side-ten.vercel.app/api/applications/${id}`, {
                            method: 'DELETE'
                        });
                        if (response.ok) {
                            setApplications(applications.filter(application => application._id !== id));
                            setFilteredApplications(filteredApplications.filter(application => application._id !== id));
                            swalWithTailwindButtons.fire({
                                title: 'Deleted!',
                                text: 'Your application has been cancelled.',
                                icon: 'success'
                            });
                        } else {
                            swalWithTailwindButtons.fire({
                                title: 'Failed',
                                text: 'Failed to cancel the application.',
                                icon: 'error'
                            });
                        }
                    } catch (error) {
                        console.error('Error cancelling application:', error);
                        swalWithTailwindButtons.fire({
                            title: 'Error',
                            text: 'An error occurred while cancelling the application.',
                            icon: 'error'
                        });
                    }
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithTailwindButtons.fire({
                        title: 'Cancelled',
                        text: 'Your application is safe :)',
                        icon: 'error'
                    });
                }
            });
    };

    const handleSearchChange = e => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);
        if (searchTerm === '') {
            setFilteredApplications(applications);
        } else {
            setFilteredApplications(applications.filter(application => application.countryName.toLowerCase().includes(searchTerm.toLowerCase())));
        }
    };

    const handleSearch = () => {
        if (searchTerm === '') {
            setFilteredApplications(applications);
        } else {
            setFilteredApplications(applications.filter(application => application.countryName.toLowerCase().includes(searchTerm.toLowerCase())));
        }
    };

    return (
        <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="container mx-auto pt-16 pb-20 px-4">
            <h2 className="text-brandPrimary text-4xl font-bold mb-8">My Visa Applications</h2>

            <div className="mb-8 flex items-center">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onKeyUp={handleSearch}
                    placeholder="Search by Country Name"
                    className="mt-1 block w-full pl-3 pr-10 py-4 text-base border-brandPrimary focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-neutral  dark:text-[#dddddd]"
                />
                <button onClick={handleSearch} className="bg-blue-500 text-white px-10 py-4 rounded-md ml-2 hidden lg:flex">
                    Search
                </button>
            </div>

            {/* Table start */}
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="font-extrabold bg-brandPrimary text-white rounded-md">
                            <th>Sl. No</th>
                            <th>Country</th>
                            <th>Processing Time</th>
                            <th>Fee</th>
                            <th>Validity</th>
                            <th>Application Method</th>
                            <th>Applied Date</th>
                            <th>Applicant's Name</th>
                            <th>Applicant's Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredApplications.map((application, index) => (
                            <tr key={application._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={application.countryImage} alt={application.countryName} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{application.countryName}</div>
                                            <div className="text-sm opacity-50">{application.visaType}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{application.processingTime}</td>
                                <td>${application.fee} USD</td>
                                <td>{application.validity}</td>
                                <td>{application.applicationMethod}</td>
                                <td>{application.appliedDate}</td>
                                <td>{`${application.firstName} ${application.lastName}`}</td>
                                <td>{application.email}</td>
                                <th>
                                    <button className="bg-red-500 text-white btn rounded mt-4" onClick={() => handleCancel(application._id)}>
                                        Cancel
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* card start  */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {filteredApplications.map(application => (
                    <div
                        key={application._id}
                        className="bg-white rounded-2xl p-6 lg:p-8 space-y-1 transform transition-all hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl duration-300 dark:bg-neutral  dark:text-[#dddddd]">
                        
                        <img src={application.countryImage} alt={application.countryName} className="w-full h-48 lg:h-56 object-cover rounded-lg mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">{application.countryName}</h2>
                        <p className="pt-2">
                            <strong>Visa Type:</strong> {application.visaType}
                        </p>
                        <p>
                            <strong>Processing Time:</strong> {application.processingTime}
                        </p>
                        <p>
                            <strong>Fee:</strong> ${application.fee} USD
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
                        <p className="pb-3">
                            <strong>Applicant's Email:</strong> {application.email}
                        </p>
                        <button className="bg-red-500 text-white px-6 py-3 rounded mt-4" onClick={() => handleCancel(application._id)}>
                            Cancel
                        </button>
                    </div>                  
                ))}
            </div>  */}

        </motion.div>
    );
};

export default MyVisaApplication;
