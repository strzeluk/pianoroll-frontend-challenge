import styles from "./error.module.scss";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className={styles.error_container}>
      <div className={styles.wrapper}>
        <h1>Congrats!</h1>
        <h2>You broke it.</h2>
        <i>{error.statusText || error.message}</i>
      </div>
    </div>
  );
};

export default ErrorPage;
