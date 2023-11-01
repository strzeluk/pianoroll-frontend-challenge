import logo from "../assets/white.svg";
import styles from "./nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_container}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
