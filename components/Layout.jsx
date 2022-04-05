import styles from "../styles/Layout.module.css";
import Head from "next/head";
import NavBar from "./NavBar";
import Link from "next/link";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div>
      <div>
        <Head>
          <title>Colette Smith</title>
          <meta name="description" content="Colette's Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <main className={styles.main}>
        <Link href="/">
          <div className={styles.title}> Colette Smith</div>
        </Link>
        <NavBar />
      </main>
      <div className={styles.content}>{props.children}</div>
      <Footer />
    </div>
  );
}
