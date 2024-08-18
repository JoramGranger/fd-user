import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { userImg, userPicturePlaceholder } from "src/Assets/Images/Images";
import { mobileNavData } from "src/Data/staticData";
import { camelCase } from "src/Functions/helper";
import useSignOut from "src/Hooks/App/useSignOut";
import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./MobileNav.module.scss";

const MobileNav = () => {
  const { isMobileMenuActive } = useSelector((state) => state.global);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { username } = user || {}; // Safely handle potential null user
  const handleSignOut = useSignOut();
  const { t } = useTranslation();

  return (
    <div className={`${s.mobileMenu} ${isMobileMenuActive ? s.active : ""}`}>
      <div className={s.userInfo}>
        <Link to="/profile" title={t("mobileNav.profile")} className={s.img}>
          <img
            src={isAuthenticated ? userImg : userPicturePlaceholder}
            alt="user's picture"
            loading="lazy"
            decoding="async"
          />
        </Link>

        <p>
          {t("mobileNav.hey")} 🖐️
          <Link
            to="/profile"
            title={t("mobileNav.profile")}
            className={s.userName}
          >
            {username || 'Guest'} {/* Fallback to 'Guest' */}
          </Link>
        </p>
      </div>

      <nav className={s.navLinks}>
        <ul>
          {mobileNavData.map(({ name, link, icon, requiteSignIn }, index) => {
            const shouldShow = requiteSignIn ? isAuthenticated : true;
            const currentPage =
              window.location.pathname === link ? "page" : undefined;

            if (!shouldShow) return null;

            return (
              <li key={"mobile-nav-link-" + index}>
                <NavLink to={link} aria-current={currentPage}>
                  <SvgIcon name={icon} />
                  <span>{t(`mobileNav.${camelCase(name)}`)}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <hr className={s.line}></hr>

      {isAuthenticated && (
        <button
          className={s.signOutButton}
          type="button"
          onClick={handleSignOut}
        >
          <SvgIcon name="boxArrowRight" />
          <span>{t("mobileNav.signOut")}</span>
        </button>
      )}

      {!isAuthenticated && (
        <Link to="/signup" className={s.signOutButton}>
          <SvgIcon name="boxArrowRight" />
          <span>{t("mobileNav.signIn")}</span>
        </Link>
      )}
    </div>
  );
};

export default MobileNav;
