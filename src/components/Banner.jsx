//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

import { Carousel } from 'flowbite-react';

const Banner = () => {
    return (
        <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="min-h-[700px] sm:h-64 xl:h-80 2xl:h-96 h-screen rounded-md">
            <Carousel className="w-full h-full">
                <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co.com/ZGQLjrR/visa-requirements.jpg')" }}>
                    <div className="flex  items-center justify-center h-full bg-black bg-opacity-60 px-14">
                        <div className="lg:max-w-5xl space-y-4 lg:space-y-6 border-l-8 border-yellow-400 pl-6 md:pl-10 ">
                            <h1 className="text-brandLight text-3xl md:text-5xl lg:text-6xl  lg:text-start font-bold lg:leading-snug">
                                Discover Your Next <br /> Destination
                            </h1>
                            <p className="text-brandLight lg:text-start  mt-4 lg:w-2/3 text-base">
                                Explore the world with our comprehensive visa services. Whether you're planning a trip for business, study, or leisure, we help make your travel dreams a reality.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co.com/vQ1jHfk/f26bca-a68cfe86e4524811b2ad8dd64c4b8237mv2.jpg')" }}>
                    <div className="flex  items-center justify-center h-full bg-black bg-opacity-60 px-14">
                        <div className="lg:max-w-5xl space-y-4 lg:space-y-6 border-l-8 border-yellow-400 pl-6 md:pl-10">
                            <h1 className="text-brandLight text-3xl md:text-5xl lg:text-6xl  lg:text-start font-bold lg:leading-snug">Get Ready to Explore</h1>
                            <p className="text-brandLight lg:text-start  mt-4 lg:w-2/3 text-base">
                                Unlock new opportunities and experiences with our reliable visa services. Let us handle the paperwork while you prepare for your adventure.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co.com/FsXt271/NEW-WEBSITE-BLOG-PICS-1706858929.jpg')" }}>
                    <div className="flex  items-center justify-center h-full bg-black bg-opacity-80 px-14">
                        <div className="lg:max-w-5xl space-y-4 lg:space-y-6 border-l-8 border-yellow-400 pl-6 md:pl-10">
                            <h1 className="text-brandLight text-3xl md:text-5xl lg:text-6xl  lg:text-start font-bold lg:leading-snug">
                                Your Gateway to <br /> the World
                            </h1>
                            <p className="text-brandLight lg:text-start  mt-4 lg:w-2/3 text-base">
                                Experience seamless and efficient visa processing with us. Whether it's for business or pleasure, we're here to make your journey smooth and enjoyable.
                            </p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </motion.div>
    );
};

export default Banner;
