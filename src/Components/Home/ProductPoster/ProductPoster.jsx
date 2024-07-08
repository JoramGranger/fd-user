import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { stereo } from "src/Assets/Images/Images";
import { p008 } from "src/Assets/Products/ProductImgs";
import PostCounter from "./PostCounter";
import s from "./ProductPoster.module.scss";

const ProductPoster = () => {
  const { t } = useTranslation();

  return (
    <section className={s.productPoster}>
      <div className={s.content}>
        <span>Resplash your skin</span>
        <h2>The all new Vitamin B Skin Serum</h2>
        <PostCounter />
        <Link to="/products">Buy Now</Link>
      </div>

      <div className={s.productHolder}>
        <img src={p008} alt="product" loading="lazy" decoding="async" />
      </div>
    </section>
  );
};
export default ProductPoster;
