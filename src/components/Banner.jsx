//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

import { Carousel } from 'flowbite-react';
import banner3 from '../assets/frame.png';
import banner1 from '../assets/hero-graphics.svg';
import banner2 from '../assets/hero1.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="min-h-[700px] sm:h-64 xl:h-80 2xl:h-96 px-4 lg:px-14  h-screen bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-0 pb-10 md:pt-20 md:pb-24 -mt-[52px] md:-mt-[40px] py-16 rounded-md">
            <Carousel className="w-full mx-auto">
                {/* banner1  */}
                <div className=" container md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:px-20 lg:px-12">
                    <div className="animate-updown">
                        <img src={banner1} alt="" />
                    </div>
                    {/* hero text  */}
                    <div className="md:w-2/3">
                        <h1 className="text-3xl lg:text-5xl font-semibold mb-4 text-white md:w-3/4 leading-snug">
                            Build Vocabulary with <br /> <span className="text-gray-900">Comprehensive Practice Tools</span>
                        </h1>
                        <p className="text-neutralSilver text-base mb-8 ">Enhance your vocabulary with interactive exercises and real-world usage.</p>
                        <Link to="/auth/register" className="button-secondary ">Register</Link>
                    </div>
                </div>

                {/* banner2  */}
                <div className="container md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:px-20 lg:px-12">
                    <div className="animate-updown">
                        <img src={banner2} alt="" />
                    </div>
                    {/* hero text  */}
                    <div className="md:w-2/3">
                        <h1 className="text-3xl lg:text-5xl font-semibold mb-4 text-white md:w-3/4 leading-snug">
                            Unlock Your Language Potential <br /> <span className="text-gray-900">with Interactive Lessons</span>
                        </h1>
                        <p className="text-neutralSilver text-base mb-8 ">Explore our engaging lessons designed to cater to learners of all levels.</p>
                        <Link to="/auth/register" className="button-secondary ">Register</Link>
                    </div>
                </div>

                {/* banner3  */}
                <div className="container md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:px-20 lg:px-12">
                    <div className="animate-updown">
                        <img src={banner3} alt="" />
                    </div>
                    {/* hero text  */}
                    <div className="md:w-2/3">
                        <h1 className="text-3xl lg:text-5xl font-semibold mb-4 text-white md:w-3/4 leading-snug">
                            Customize Your Learning Path <br /> <span className="text-gray-900">to Achieve Your Goals</span>
                        </h1>
                        <p className="text-neutralSilver text-base mb-8 ">Create personalized learning paths to align with your language learning objectives.</p>
                        <Link to="/auth/register" className="button-secondary ">Register</Link>
                    </div>
                </div>
            </Carousel>
        </motion.div>
    );
};

export default Banner;
