/* eslint-disable @next/next/no-img-element */
import styles from "./error.module.scss";

interface ErrorProps {
  message: string;
  clickHandler: () => void;
}

export function Error({ message, clickHandler }: ErrorProps) {
  return (
    <div className={styles.container} data-testid="error">
      <img src="/icons/alert-circle.svg" alt="alert" />
      <div>There was a problem while loading the project data: {message}</div>
      <button className={styles.button} onClick={clickHandler}>
        Try again
        <img src="/icons/arrow-right.svg" alt="alert" />
      </button>
    </div>
  );
}
