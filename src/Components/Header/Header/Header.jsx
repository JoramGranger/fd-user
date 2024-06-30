import { Link } from "react-router-dom";
import useNavToolsProps from "src/Hooks/App/useNavToolsProps";
import NavTools from "../../Shared/MidComponents/NavTools/NavTools";
import s from "./Header.module.scss";
import MobileNavIcon from "./MobileNavIcon";
import Nav from "./Nav";
import  AppLogo from '../../../Assets/Images/app-logo-compressed-black.png';
import AppLogo2 from '../../../Assets/Images/app-logo-black.png';

const Header = () => {
  const navToolsProps = useNavToolsProps();

  return (
    <header className={s.header} dir="ltr">
      <div className={s.container}>
        <span style={{paddingTop: '20px'}}>
          <Link to="/"><img src={AppLogo2} alt="Fortune Derma" 
          style={{width: '150px', top: '2%'}}/></Link>
        </span>

        <div className={s.headerContent}>
          <Nav />
          <NavTools {...navToolsProps} />
        </div>

        <MobileNavIcon />
      </div>
    </header>
  );
};

export default Header;
