import styles from '../../styles/Projects.module.css';
import Image from 'next/image';

export default function Yesipe() {
    return (
        <div>
            <h1>
                WIP: Yesipe
                <div className={styles.source_links}>
                    <a href="https://github.com/colettes/yesipe">Source Code</a>
                </div>
            </h1>

            <div className={styles.container}>
                <div className={styles.section_title}>Overview</div>
                <div className={styles.section}>
                    A small-scale dynamic website to develop skills in new
                    technologies.
                </div>

                <div className={styles.section_title}>Process</div>
                <div className={styles.section}>
                    The current stack that I am utilizing consists of Next.JS,
                    mySQL, RESTful API endpoints, and prototyping with AdobeXD.
                </div>

                <div className={styles.section}>
                    Below is a mood board for the initial design.
                </div>
                <Image
                    alt="Mood board of colors and fonts"
                    src="/portfolio/yesipe/inspo.png"
                    width={1566}
                    height={1054}
                    layout="responsive"
                />
            </div>
        </div>
    );
}
