import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { login, setValidationErrors } from "src/Features/auth/authSlice";  // Updated import for login action
import useOnlineStatus from "src/Hooks/Helper/useOnlineStatus";
import ShowHidePassword from "../../Shared/MiniComponents/ShowHidePassword/ShowHidePassword";
import s from "./LogInForm.module.scss";

const LogInForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isWebsiteOnline = useOnlineStatus();

  const emailOrPhone = useRef();
  const password = useRef();

  function handleLogin(e) {
    e.preventDefault();

    if (!isWebsiteOnline) {
      internetConnectionAlert(dispatch, t);
      return;
    }

    const email = emailOrPhone.current.value;
    const passwordValue = password.current.value;

    if (!email || !passwordValue) {
      dispatch(setValidationErrors({ email: !email, password: !passwordValue }));
      return;
    }

    // Dispatch login action
    dispatch(login({ email, password: passwordValue }));
  }

  return (
    <form className={s.form} onSubmit={handleLogin}>
      <h2>{t("loginSignUpPage.login")}</h2>
      <p>{t("loginSignUpPage.enterDetails")}</p>

      <div className={s.inputs}>
        <input
          type="text"
          name="emailOrPhone"
          placeholder={t("inputsPlaceholders.emailOrPhone")}
          ref={emailOrPhone}
          aria-required="false"
        />

        <div className={s.input}>
          <input
            type="password"
            name="Password"
            placeholder={t("inputsPlaceholders.password")}
            ref={password}
            aria-required="false"
          />
          <ShowHidePassword />
        </div>
      </div>

      <div className={s.buttons}>
        <button type="submit" className={s.loginBtn}>
          {t("buttons.login")}
        </button>
        <a href="#">{t("loginSignUpPage.forgotPassword")}</a>
      </div>
    </form>
  );
};

export default LogInForm;

function internetConnectionAlert(dispatch, t) {
  const alertText = t("toastAlert.loginFailed");
  const alertState = "error";

  dispatch(showAlert({ alertText, alertState }));
}
