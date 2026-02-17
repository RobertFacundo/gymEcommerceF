import HomeHeroSlider from "../home/components/HomeHeroSlider/HomeHeroSlider";
import HomeHighlights from "../home/components/HomeHighlights/HomeHighlights";
import FeaturedProductsCarousel from "../home/components/FeaturedProductsCarousel/FeaturedProductsCarousel";

const Home = () => {
    return (
        <>
            <HomeHeroSlider />
            <HomeHighlights />
            <FeaturedProductsCarousel />
            {/* <HomeCTAMembership />
            <HomeTestimonials /> */}
           
        </>
    )
};

export default Home;