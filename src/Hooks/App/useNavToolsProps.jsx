import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const useNavToolsProps = () => {
  const [navToolsProps, setNavToolsProps] = useState({});
  const { isAuthenticated } = useSelector((state) => state.auth); // Pull from auth slice
  const location = useLocation();
  const path = location.pathname;

  const navProps = {
    signIn: {
      showHeart: true,
      showCart: true,
      showUser: true,
    },
    notSignIn: {
      showHeart: false,
      showCart: false,
      showUser: false,
    },
    signUpPage: {
      showHeart: false,
      showCart: false,
      showUser: false,
    },
    default: {
      showHeart: false,
      showCart: false,
      showUser: false,
    },
  };

  const setSelectedNavProps = () => {
    let selectedNavProps = navProps.default;

    if (!isAuthenticated) {
      selectedNavProps = navProps.notSignIn;
    } else if (path === "/signup" || path === "/login") {
      selectedNavProps = navProps.signUpPage;
    } else if (isAuthenticated) {
      selectedNavProps = navProps.signIn;
    }

    setNavToolsProps(selectedNavProps);
  };

  useEffect(() => {
    setSelectedNavProps();
  }, [isAuthenticated, path]);

  return navToolsProps;
};

export default useNavToolsProps;
