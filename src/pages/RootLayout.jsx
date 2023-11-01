import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import styles from "./rootLayout.module.scss";

const RootLayout = () => {
  return (
    <>
      <Nav />
      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
