import Link from "next/link";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.version}>Version: {process.env.appVersion}</div>
      <ul className={styles.links}>
        <Link href="#">Docs</Link>
        <Link href="#">API</Link>
        <Link href="#">Help</Link>
        <Link href="#">Community</Link>
      </ul>
      <div className={styles.logo}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.logo} src="/icons/logo-small.svg" alt="logo" />
      </div>
    </footer>
  );
}
