import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { login, setValidationErrors } from "src/Features/auth/authSlice";
import useOnlineStatus from "src/Hooks/Helper/useOnlineStatus";
import ShowHidePassword from "../../Shared/MiniComponents/ShowHidePassword/ShowHidePassword";
import s from "./LogInForm.module.scss";

const LogInForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isWebsiteOnline = useOnlineStatus();
  const { validationErrors, error } = useSelector((state) => state.auth);

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

    dispatch(login({ email, password: passwordValue }));
  }

  return (
    <form className={s.form} onSubmit={handleLogin}>
      <h2>Log in to Fortune Derma</h2>
      <p>{t("loginSignUpPage.enterDetails")}</p>

      <div className={s.inputs}>
        <input
          type="text"
          name="emailOrPhone"
          placeholder={t("inputsPlaceholders.emailOrPhone")}
          ref={emailOrPhone}
          aria-required="false"
          className={validationErrors.email ? s.error : ''}
        />
        {validationErrors.email && <span>Email Required</span>}

        <div className={s.input}>
          <input
            type="password"
            name="Password"
            placeholder={t("inputsPlaceholders.password")}
            ref={password}
            aria-required="false"
            className={validationErrors.password ? s.error : ''}
          />
          {validationErrors.password && <span>Password Required</span>}
          <ShowHidePassword />
        </div>
      </div>

      {error && <div className={s.serverError}><span>{error}</span></div>}

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
