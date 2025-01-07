import Banner from '../components/Banner';
import ContactSection from '../components/ContactSection';
import CounterSection from '../components/CounterSection';
import CustomerReviews from '../components/CustomerReviews';
import LatestVisas from '../components/LatestVisas';
import PageTitle from '../components/PageTitle';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    return (
        <div className="space-y-20">
            {/* Setup Page-Title by react Helmet */}
            <PageTitle title="Home" />

            <Banner />
            <LatestVisas />
            <WhyChooseUs />
            <CounterSection />
            <CustomerReviews />
            <ContactSection />
        </div>
    );
};

export default Home;
