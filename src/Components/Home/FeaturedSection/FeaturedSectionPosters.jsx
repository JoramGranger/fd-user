import { useTranslation } from "react-i18next";
import {
  perfumeGucci,
  ps5,
  speakers,
  womanWithHat,
} from "src/Assets/Images/Images";
import { p008, p001, p002, p003, p004, p005, p006, p007 } from "src/Assets/Products/ProductImgs";
import HorizontalPoster from "../../Shared/Posters/HorizontalPoster";
import MediumPoster from "../../Shared/Posters/MediumPoster";
import SmallPoster from "../../Shared/Posters/SmallPoster";
import s from "./FeaturedSectionPosters.module.scss";

const FeaturedSectionPosters = () => {
  const { t } = useTranslation();
  const medPosterTitleTrans = t("featuredSection.mediumPoster.title");
  const medPosterDescTrans = t("featuredSection.mediumPoster.description");
  const smallPoster1TitleTrans = t("featuredSection.smallPoster1.title");
  const smallPoster1DescTrans = t("featuredSection.smallPoster1.description");
  const smallPoster2TitleTrans = t("featuredSection.smallPoster2.title");
  const smallPoster2DescTrans = t("featuredSection.smallPoster2.description");
  const horizontalPosterTitleTrans = t("featuredSection.horizontalPoster.title");
  const horizontalPosterDescTrans = t("featuredSection.horizontalPoster.description");

  return (
    <div className={s.posters}>
      <MediumPoster
        title={'Acne Products'}
        description={'description'}
        posterUrl={p001}
      />

      <div className={s.smallPosters}>
        <HorizontalPoster
          title={'Vitamin B serums'}
          description={'description'}
          posterUrl={p008}
        />

        <div className={s.smallerPosters}>
          <SmallPoster
            title={'hyperpigmentation'}
            description={'description'}
            posterUrl={p002}
          />

          <SmallPoster
            title={'Dry Skin Products'}
            description={'description'}
            posterUrl={p006}
          />
        </div>
      </div>
    </div>
  );
};
export default FeaturedSectionPosters;
