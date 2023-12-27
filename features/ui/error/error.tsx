import styles from "./error.module.scss";

export function Error() {
  return (
    <div className={styles.container}>
      <img src="/icons/alert-circle.svg" alt="alert" />
      <div>There was a problem while loading the project data</div>
      <button className={styles.button}>
        Try again
        <img src="/icons/arrow-right.svg" alt="alert" />
      </button>
    </div>
  );
}
