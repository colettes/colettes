import styles from '../styles/Projects.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard(props) {
    return (
        <div className={styles.card}>
            <Image
                className={styles.image}
                src={props.image}
                width={25}
                height={25}
                layout="responsive"
            />
            <div className={styles.title}>{props.title}</div>
            <div className={styles.description}>{props.info}</div>

            <Link
                href={{
                    pathname: props.path,
                }}
            >
                <button>More info</button>
            </Link>
        </div>
    );
}
