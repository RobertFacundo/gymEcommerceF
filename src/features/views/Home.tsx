import HomeHeroSlider from "../home/components/HomeHeroSlider/HomeHeroSlider";
import HomeHighlights from "../home/components/HomeHighlights/HomeHighlights";
import FeaturedProductsCarousel from "../home/components/FeaturedProductsCarousel/FeaturedProductsCarousel";
import HomeCTAMembership from "../home/components/HomeCTAMembership/HomeCTAMembership";
import HomeTestimonials from "../home/components/HomeTestimonials/HomeTestimonials";

const Home = () => {
    return (
        <>
            <HomeHeroSlider />
            <HomeHighlights />
            <FeaturedProductsCarousel />
            <HomeCTAMembership />
            <HomeTestimonials />
        </>
    )
};

export default Home;