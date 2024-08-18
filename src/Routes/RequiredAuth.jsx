import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { pagesRequireSignIn } from "../Data/globalVariables";
import { showAlert } from "../Features/globalSlice";

const RequiredAuth = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const pathName = location.pathname;
  const isLoginOrSignUpPage = pathName === "/login" || pathName === "/signup";

  const isPageRequiringSignIn = (page) =>
    pagesRequireSignIn.includes(page) && !isAuthenticated;

  if (isLoginOrSignUpPage && isAuthenticated) return <Navigate to="/" />;
  if (isPageRequiringSignIn(pathName)) {
    loginFirstAlert();
    return <Navigate to="/signup" />;
  }

  function loginFirstAlert() {
    const alertText = t("toastAlert.pageRequiringSignIn");
    const alertState = "warning";
    setTimeout(() => dispatch(showAlert({ alertText, alertState })), 300);
  }

  return children;
};

export default RequiredAuth;