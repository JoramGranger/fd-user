import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "src/Features/globalSlice";
import { login } from "src/Features/auth/authSlice";
import { simpleValidationCheck } from "src/Functions/componentsFunctions";
import {
  compareDataToObjValue,
  getUniqueArrayByObjectKey,
} from "src/Functions/helper";
import useOnlineStatus from "src/Hooks/Helper/useOnlineStatus";
import SignUpButtons from "./SignUpButtons/SignUpButtons";
import s from "./SignUpForm.module.scss";
import SignUpFormInputs from "./SignUpFormInputs/SignUpFormInputs";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const users = useSelector((state) => state.users?.users || []); // Handle undefined state
  const isWebsiteOnline = useOnlineStatus();

  function signUp(e) {
    e.preventDefault();

    const inputs = e.target.querySelectorAll("input");
    const formDataObj = new FormData(e.target);
    const formData = {};

    // Set keys and values from formDataObj to formData
    for (let pair of formDataObj.entries()) formData[pair[0]] = pair[1];

    const isFormValid = simpleValidationCheck(inputs);

    if (isFormValid) {
      const isUserAlreadySignedUp = compareDataToObjValue(
        users,
        formData,
        "emailOrPhone"
      );
      if (isUserAlreadySignedUp) return;

      const uniqueSignedUpUsers = getUniqueArrayByObjectKey({
        arr: users,
        newArr: [formData],
        key: "emailOrPhone",
      });

      if (!isWebsiteOnline) {
        internetConnectionAlert();
        return;
      }

      // Dispatch login action with the necessary payload
      dispatch(login({ email: formData.emailOrPhone, password: formData.password }));
      signInAlert(t, dispatch);
    }
  }

  function internetConnectionAlert() {
    const alertText = t("toastAlert.loginFailed");
    const alertState = "error";

    dispatch(showAlert({ alertText, alertState }));
  }

  return (
    <form action="GET" className={s.form} onSubmit={signUp}>
      <h2>{t("loginSignUpPage.createAccount")}</h2>
      <p>{t("loginSignUpPage.enterDetails")}</p>

      <SignUpFormInputs />

      <SignUpButtons />
    </form>
  );
};
export default SignUpForm;

export function signInAlert(t, dispatch) {
  const alertText = t("toastAlert.signInSuccess");
  const alertState = "success";

  setTimeout(() => {
    dispatch(showAlert({ alertText, alertState }));
  }, 1500);
}
