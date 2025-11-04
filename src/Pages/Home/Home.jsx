
import HeroSection from '../../Components/HeroSection/HeroSection';
import FeaturedProduct from '../HomePageSection/FeaturedProduct';
import FurnitureAndDeals from '../HomePageSection/FurnitureAndDeals';
import HotDealFurniture from '../HomePageSection/HotDealFurniture';
import OfferSection from '../HomePageSection/OfferSection';
import ServicesSection from '../HomePageSection/ServicesSection';
import TrendyCollection from '../HomePageSection/TrendyCollection';


const Home = () => {
    return (
        <div>
            hello
            <HeroSection></HeroSection>
            <ServicesSection></ServicesSection>
            <OfferSection></OfferSection>
            <FeaturedProduct></FeaturedProduct>
            <HotDealFurniture></HotDealFurniture>
            <TrendyCollection></TrendyCollection>
            <FurnitureAndDeals></FurnitureAndDeals>
        </div>

    );
};

export default Home;