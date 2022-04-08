import styles from "../styles/Projects.module.css";
import Image from "next/image";

export default function ProjectCard(props) {
  return (
    <div className={styles.card}>
      <a href={props.path}>
        <Image
          className={styles.image}
          src={props.image}
          width={50}
          height={50}
          layout="responsive"
        />
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.info}</div>
      </a>
    </div>
  );
}
