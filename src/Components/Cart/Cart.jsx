import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import s from "./Cart.module.scss";
import CartButtons from "./CartButtons/CartButtons";
import AddCoupon from "./CartInfo/AddCoupon";
import CartInfoMenu from "./CartInfo/CartInfoMenu";
import CartProducts from "./CartProducts/CartProducts";

const Cart = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Cart</title>
        <meta
          name="description"
          content="Review and manage your selected items in the Exclusive cart. Add products, apply coupons, and proceed to checkout for a seamless shopping experience."
        />
      </Helmet>

      <div className="container">
        <main className={s.cartPage}>
          <PagesHistory history={["/", t("history.cart")]} />

          <div className={s.pageComponents} id="cart-page">
            <CartProducts />
            <CartButtons />

            <div className={s.wrapper}>
              <AddCoupon />
              <CartInfoMenu />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Cart;
