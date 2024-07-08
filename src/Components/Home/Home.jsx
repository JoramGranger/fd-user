import { Helmet } from "react-helmet-async";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import FeaturedSectionFeatures from "./FeaturedSection/FeaturedSectionFeatures";
import s from "./Home.module.scss";
import MainSlider from "./Introduction/MainSlider/MainSlider";
import SectionsMenu from "./Introduction/SectionsMenu/SectionsMenu";
import OurProductsSection from "./OurProductsSection/OurProductsSection";
import ProductPoster from "./ProductPoster/ProductPoster";
import ThisMonthSection from "./ThisMonthSection/ThisMonthSection";
import TodaySection from "./TodaySection/TodaySection";

const Home = () => {
  useScrollOnMount(0);

  return (
    <>
      <Helmet>
        <title>Fortune Derma</title>
        <meta
          name="description"
          content="Get your Cosmeceutical products today in Kampala and suburbs."
        />
      </Helmet>

      <div className={s.home}>
        <div className={s.container}>
          <div className={s.introductionContainer}>
            <SectionsMenu />

            <div className={s.line}></div>

            <MainSlider />
          </div>
          <CategoriesSection />
          <TodaySection />          
          <ThisMonthSection />
          <ProductPoster />
          <OurProductsSection />
          <FeaturedSection />
          <FeaturedSectionFeatures />
        </div>
      </div>
    </>
  );
};

export default Home;
