import HeroSection from "../../Components/HeroSection/HeroSection";
import ClientFeedback from "../HomePageSection/ClientFeedback";
import FeaturedProduct from "../HomePageSection/FeaturedProduct";
import FurnitureAndDeals from "../HomePageSection/FurnitureAndDeals";
import HotDealFurniture from "../HomePageSection/HotDealFurniture";
import JionUsCommunity from "../HomePageSection/JionUsCommunity";
import OfferSection from "../HomePageSection/OfferSection";
import OurBrans from "../HomePageSection/OurBrans";
import RecentBlog from "../HomePageSection/RecentBlog";
import ServicesSection from "../HomePageSection/ServicesSection";
import TrendyCollection from "../HomePageSection/TrendyCollection";

const Home = () => {
  return (
    <div>
   
      <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <OfferSection></OfferSection>
      <FeaturedProduct></FeaturedProduct>
      <HotDealFurniture></HotDealFurniture>
      <TrendyCollection></TrendyCollection>
      <FurnitureAndDeals></FurnitureAndDeals>
      <ClientFeedback></ClientFeedback>
      <RecentBlog></RecentBlog>
      <JionUsCommunity></JionUsCommunity>
      <OurBrans></OurBrans>
    </div>
  );
};

export default Home;
