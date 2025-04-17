import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          <h1>Welcomes to Seven Contacts !</h1>
          <p>By Seven Advanced Academy Students</p>
          <a href="/dashboard">View Dashboard</a>
        </div>
      </main>
    </div>
  );
}
