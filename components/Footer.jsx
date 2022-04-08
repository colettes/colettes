import styles from "../styles/Layout.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_links}>
          <a href="https://github.com/colettes">
            <i class="bi bi-github"></i>
          </a>
          <i class="bi bi-linkedin"></i>

          <i class="bi bi-behance"></i>
          <i class="bi bi-envelope"></i>
        </div>
        <div>Colette Smith 2022</div>
      </div>
    </footer>
  );
}
