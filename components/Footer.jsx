import styles from '../styles/Layout.module.css';

export default function Footer() {
    return (
        <footer>
            <div className={styles.footer_wrapper}>
                <div className={styles.footer_links}>
                    <a href="https://github.com/colettes">
                        <i className="bi bi-github"></i>
                    </a>
                    <i className="bi bi-linkedin"></i>

                    <i className="bi bi-behance"></i>
                    <i className="bi bi-envelope"></i>
                </div>
                <div className={styles.signature}>Colette Smith 2022</div>
            </div>
        </footer>
    );
}
