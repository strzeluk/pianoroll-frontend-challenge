import logo from "../assets/white.svg";
import styles from "./nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_container}>
        <img src={logo} alt="Logo" />
      </div>
    </nav>
  );
};

export default Nav;
