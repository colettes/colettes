import styles from '../styles/Layout.module.css';

export default function Footer() {
    return (
        <footer>
            <div className={styles.footer_wrapper}>
                <div className={styles.footer_links}>
                    <a href="https://github.com/colettes">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/colette-smith-a468a6132/">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.behance.net/colettes">
                        <i className="bi bi-behance"></i>
                    </a>
                    <a href="mailto:smithcolettem@gmail.com">
                        <i className="bi bi-envelope"></i>
                    </a>
                </div>
                <div className={styles.signature}>Colette Smith 2022</div>
            </div>
        </footer>
    );
}
