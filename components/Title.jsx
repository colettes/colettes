import styles from "../styles/Home.module.css";
import Head from "next/head";
import NavBar from "./NavBar";

export default function Title() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Colette Smith</title>
          <meta name="description" content="Colette's Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}> Colette Smith</h1>
        <NavBar />
      </main>
    </div>
  );
}
