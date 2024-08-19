import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { showAlert } from "src/Features/globalSlice";
import { addToArray, removeByKeyName } from "src/Features/productsSlice";
import { isItemFound } from "src/Functions/helper";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./AddToCartButton.module.scss";

const AddToCartButton = ({ product }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth); // Updated selector
  const isProductAlreadyExist = isItemFound(cartProducts, product, "shortName");
  const [iconNameState, setIconName] = useState(isProductAlreadyExist ? "trashCan" : "cart3");
  
  const buttonText = t(
    `productCard.buttonText.${
      isProductAlreadyExist ? "removeFromCart" : "addToCart"
    }`
  );

  function handleCartButton() {
    if (!user.isAuthenticated) { // Updated check
      dispatch(
        showAlert({
          alertText: t("toastAlert.addToCart"),
          alertState: "warning",
        })
      );

      return;
    }
    isProductAlreadyExist ? removeFromCart() : addToCart();
  }

  function addToCart() {
    dispatch(addToArray({ key: "cartProducts", value: product }));
    setIconName("trashCan");
  }

  function removeFromCart() {
    dispatch(removeByKeyName({
      dataKey: "cartProducts",
      itemKey: "shortName",
      keyValue: product.shortName,
    }));
    setIconName("cart3");
  }

  return (
    <button
      type="button"
      className={`${s.addToCartBtn} ${s.addToCartButton}`}
      onClick={handleCartButton}
      aria-label={buttonText}
      data-add-to-cart-button
    >
      <SvgIcon name={iconNameState} />
      <span>{buttonText}</span>
    </button>
  );
};

export default AddToCartButton;