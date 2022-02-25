import styles from "../styles/Home.module.css";
import Head from "next/head";
import NavBar from "./NavBar";
import Link from "next/link";
import Footer from "./Footer";

export default function Layout(props) {
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
        <Link href="/">
          <a className={styles.title}> Colette Smith</a>
        </Link>
        <NavBar />
        {props.children}
        <Footer />
      </main>
    </div>
  );
}
