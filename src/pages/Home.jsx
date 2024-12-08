import Banner from '../components/Banner';
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
        </div>
    );
};

export default Home;
