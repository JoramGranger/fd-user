import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import AccountMenuSection from "./AccountMenuSection/AccountMenuSection";
import s from "./AccountPage.module.scss";
import EditProfileForm from "./EditProfileForm/EditProfileForm";

const AccountPage = () => {
  // Use the 'auth' slice to get the user information
  const { user } = useSelector((state) => state.auth); // Access user from auth slice
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta
          name="description"
          content="Update your personal information easily on Exclusive. Manage your account details, shipping addresses, and preferences for a personalized shopping experience."
        />
      </Helmet>

      <div className="container">
        <main className={s.accountPage} id="account-page">
          <div className={s.wrapper}>
            <PagesHistory history={["/", t("nav.profile")]} />

            <p className={s.welcomeMessage}>
              {t("common.welcome")}
              {"! "}
              <Link to="/profile">{user.username || "User"}</Link> {/* Provide fallback text */}
            </p>
          </div>

          <div className={s.accountPageContent}>
            <AccountMenuSection />
            <EditProfileForm />
          </div>
        </main>
      </div>
    </>
  );
};

export default AccountPage;