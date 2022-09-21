import styles from '../styles/Layout.module.css';
import Head from 'next/head';
import NavBar from './NavBar';
import Link from 'next/link';
import Footer from './Footer';

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div>
                <Head>
                    <title>Colette Smith</title>
                    <meta name="description" content="Colette's Portfolio" />
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        rel="stylesheet"
                        href="https://use.typekit.net/scg1het.css"
                    />
                </Head>
            </div>
            <main className={styles.main}>
                <Link href="/">
                    <a className={styles.title}>
                        Colette <br /> Smith
                    </a>
                </Link>
                <NavBar />
            </main>
            <div className={styles.content}>
                {props.children}
                <Footer />
            </div>
        </div>
    );
}
