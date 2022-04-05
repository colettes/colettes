import styles from "../styles/Cards.module.css";
import Image from "next/image";

export default function ProjectCard(props) {
  return (
    <div className={styles.card}>
      <a href={props.link}>
        <Image src={props.image} width={100} height={100} layout="responsive" />
        <h2>{props.title}</h2>
      </a>
    </div>
  );
}
