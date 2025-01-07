import Banner from '../components/Banner';
import ContactSection from '../components/ContactSection';
import CustomerReviews from '../components/CustomerReviews';
import LatestVisas from '../components/LatestVisas';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    return (
        <div className='space-y-20'>
            <Banner />
            <LatestVisas />
            <WhyChooseUs />
            <CustomerReviews />
            <ContactSection />
        </div>
    );
};

export default Home;
