import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function ProjectCard(props) {
  return (
    <div>
      <a href={props.link} className={styles.card}>
        <Image src={props.image} layout="responsive" />
        <h2>{props.title}</h2>
      </a>
    </div>
  );
}
