
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-100 via-white to-indigo-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}>
                    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Why Choose Us</h2>
                    <p className="mt-2 text-4xl leading-10 font-extrabold text-brandPrimary sm:text-4xl">Our Commitment to Excellence</p>
                    <p className="mt-4 max-w-md text-base text-gray-500 mx-auto">We provide the best services to ensure your success. Here's why you should choose us.</p>
                </motion.div>
                <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.5 }} className="mt-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="pt-6">
                            <div className="flow-root bg-indigo-100 rounded-lg px-6 pb-8 transform transition-all hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl duration-300 h-[220px]">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brandLight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Fast and hassle-free</h3>
                                    <p className="mt-5 text-base text-gray-500">Enjoy a far simpler process than dealing with foreign governments.</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6">
                            <div className="flow-root bg-indigo-100  rounded-lg px-6 pb-8 transform transition-all hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl duration-300 h-[220px]">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brandLight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m-1 8h2M12 2a10 10 0 100 20 10 10 0 000-20z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Secure and Safe</h3>
                                    <p className="mt-5 text-base text-gray-500">All your information is always protected with best-in-class security.</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6">
                            <div className="flow-root bg-indigo-100 rounded-lg px-6 pb-8 transform transition-all hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl duration-300 h-[220px]">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brandLight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7M5 21V9a1 1 0 011-1h3m10 12V9a1 1 0 00-1-1h-3m-7-3h4a1 1 0 011 1v3m-4 0V5m0 8h4m-4 0h4"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Get Approved</h3>
                                    <p className="mt-5 text-base text-gray-500">We have a 98% visa approval rate. Our team is committed to your success!</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6">
                            <div className="flow-root bg-indigo-100 rounded-lg px-6 pb-8 transform transition-all hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl duration-300 h-[220px]">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brandLight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7M5 21V9a1 1 0 011-1h3m10 12V9a1 1 00-1-1h-3m-7-3h4a1 1 0 011 1v3m-4 0V5m0 8h4m-4 0h4"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Awesome support</h3>
                                    <p className="mt-5 text-base text-gray-500">Don't worry! Our customer support is ready to help you 24/7.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
