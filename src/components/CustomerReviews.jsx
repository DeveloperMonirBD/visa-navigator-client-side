//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const CustomerReviews = () => {
    const reviews = [
        {
            name: 'Hameed J',
            time: '3 days ago',
            rating: '★★★★★',
            text: 'I never would have been able to navigate the application without the help of iVisa. The speed at which they processed the documents was amazing.',
            image: 'https://i.ibb.co.com/TKPFv7S/team-2.jpg'
        },
        {
            name: 'Rita I.',
            time: '12 hours ago',
            rating: '★★★★★',
            text: 'Excellent service! Communication and response time were swift. They were professional and I felt confident in their ability. I would recommend them and use them again!',
            image: 'https://i.ibb.co.com/qsk9JR4/c2.jpg'
        },
        {
            name: 'Ranjan Sharma, MD',
            time: '20 hours ago',
            rating: '★★★★★',
            text: 'iVisa made our Angola eVisa experience very easy! Thank you very much! We will definitely use your services in the future!',
            image: 'https://i.ibb.co.com/0ZZCyDT/team-1.jpg'
        },
        {
            name: 'MC F',
            time: '5 ddays ago',
            rating: '★★★★★',
            text: '"Visa is a class act! The customer service is impeccable! Virgil, from VisaHQ, walked me through my visa application for Australia. He was knowledgeable, patient, and detailed. Virgil went above and beyond.',
            image: 'https://i.ibb.co.com/SxghNXJ/team-3.jpg'
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-indigo-50 via-white to-blue-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.4 }} className="text-center">
                    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Customer Reviews</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brandPrimary sm:text-4xl">What Our Customers Are Saying</p>
                    <p className="mt-4 max-w-lg text- text-gray-500 lg:mx-auto">Hear from our satisfied customers who have used our visa services.</p>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.5 }}
                    className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg transform transition-all hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl duration-300">
                            <div className="flex items-center mb-4">
                                <div className="flex-shrink-0">
                                    <img className="h-12 w-12 rounded-full" src={review.image} alt={review.name} />
                                </div>
                                <div className="ml-4">
                                    <div className="text-lg font-medium text-gray-900">{review.name}</div>
                                    <div className="text-sm text-gray-500">{review.time}</div>
                                    <div className="text-yellow-400">{review.rating}</div>
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm">{review.text}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CustomerReviews;
