import styles from "./page.module.css";
import Signature from "../components/Signature";

export default function Home() {
  //const assetPrefix = process.env.NODE_ENV === 'production' ? '/Photography_Portfolio_2025' : '';

  return (
    <>
      <main className={styles.app}>
      <Signature />
      </main>
    </>
  );
}
