import styles from "../styles/Projects.module.css";
import Image from "next/image";

export default function ProjectCard(props) {
  return (
    <div className={styles.card}>
      <a href={props.link}>
        <Image src={props.image} width={200} height={200} layout="responsive" />
        <h2>{props.title}</h2>
      </a>
    </div>
  );
}
