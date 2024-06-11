import Banner from "../../../Components/HomeBanner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import CategorySection from "../CategorySection/CategorySection";
import Contact from "../Contact/Contact";
import InspirationSection from "../InspirationSection/InspirationSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategorySection></CategorySection>
      <InspirationSection></InspirationSection>
      <AboutUs></AboutUs>
      <Contact></Contact>
    </div>
  );
};

export default Home;
