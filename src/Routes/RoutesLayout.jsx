import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import FirstHeader from "../Components/Header/FirstHeader/FirstHeader";
import Header from "../Components/Header/Header/Header";
import ConnectionLabelAlert from "../Components/Shared/MiniComponents/ConnectionLabelAlert/ConnectionLabelAlert";
import GlobalOverlay from "../Components/Shared/MiniComponents/GlobalOverlay/GlobalOverlay";
import ScrollToTop from "../Components/Shared/MiniComponents/ScrollToTop/ScrollToTop";
import SkipContentLink from "../Components/Shared/MiniComponents/SkipContentLink";
import MobileNav from "../Components/Shared/MobileNav/MobileNav";
import ToastAlert from "../Components/Shared/PopUps/ToastAlert";
import useCurrentSkipLinkId from "../Hooks/App/useCurrentSkipLinkId";
import useOnlineStatus from "../Hooks/Helper/useOnlineStatus";
import Announcement from "../Components/Header/Announcement/Announcement";

const RoutesLayout = () => {
  const skipLinkSectionId = useCurrentSkipLinkId();
  const isWebsiteOnline = useOnlineStatus();

  return (
    <div className="App" tabIndex="-1">
      <SkipContentLink scrollTo={skipLinkSectionId} />
      {/* <FirstHeader /> */}
      <Header />
      <Announcement />
      <MobileNav />
      <GlobalOverlay />
      <ScrollToTop />
      <Outlet />
      <Footer />
      <ConnectionLabelAlert isOnline={isWebsiteOnline} />
      <ToastAlert />
    </div>
  );
};
export default RoutesLayout;
