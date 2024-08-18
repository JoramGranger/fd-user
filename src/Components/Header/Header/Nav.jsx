import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.scss";

const Nav = () => {
  const { t } = useTranslation();
  const { isAuthenticated } = useSelector((state) => state.auth); // Updated to use auth state
  const navDirection = i18next.dir() === "ltr" ? "ltr" : "rtl";

  return (
    <nav className={s.nav} dir={navDirection}>
      <ul>
        <li>
          <NavLink to="/">{t("nav.home")}</NavLink>
        </li>

        <li>
          <NavLink to="/products">{t("nav.shop")}</NavLink>
        </li>

        <li>
          <NavLink to="/contact">{t("nav.contact")}</NavLink>
        </li>

        <li>
          <NavLink to="/about">{t("nav.about")}</NavLink>
        </li>

        <li>
          {isAuthenticated ? ( // Updated to use isAuthenticated from auth state
            <NavLink to="/profile">{t("nav.profile")}</NavLink>
          ) : (
            <>
              <NavLink to="/signup">{t("nav.signUp")}</NavLink>
              <NavLink
                to="/login"
                style={{
                  marginLeft: '10px',
                  backgroundColor: '#040404',
                  color: '#FDE2F3',
                  padding: '15px',
                  borderRadius: '5px'
                }}
              >
                {t("nav.login")}
              </NavLink>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
