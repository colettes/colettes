import styles from "../styles/Home.module.css";
import Link from "next/link";

const pages = ["Hello", "Projects", "Resume", "Shop"];

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      {pages.map((page) => (
        <li>
          <Link href={page}>{page}</Link>
        </li>
      ))}
    </div>
  );
}

// convert styling from li to links
