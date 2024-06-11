import Banner from "../../../Components/HomeBanner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import CategorySection from "../CategorySection/CategorySection";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategorySection></CategorySection>
      <AboutUs></AboutUs>
      <Contact></Contact>
    </div>
  );
};

export default Home;
