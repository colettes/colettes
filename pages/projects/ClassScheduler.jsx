import styles from '../../styles/Projects.module.css';
import Image from 'next/image';

export default function ClassScheduler() {
    return (
        <div>
            <h1>Class Scheduler</h1>
            <div className={styles.container}>
                <div className={styles.section}>
                    The current system that students use to schedule classes at
                    Depaul is clunky and counterintuitive. It requires multiple
                    applications that are not integrated, meaning a frustrating
                    amount of going back and forth between web pages. The goal
                    was to design a user friendly solution to the current
                    system, using the principles of interaction design and
                    applying usability methods
                </div>
                <div className={styles.section}>
                    After identifying the problem, I conducted several
                    interviews with DePaul students. Then, I created two
                    personas based on the observations that came to light.
                </div>
                <div className={styles.section_image}>
                    <Image
                        alt="" //TODO
                        src="/portfolio/classScheduler/persona1.png"
                        width={1566}
                        height={1054}
                        layout="responsive"
                    />
                    <Image
                        className={styles.section_image}
                        alt="" //TODO
                        src="/portfolio/classScheduler/persona2.png"
                        width={1566}
                        height={1054}
                        layout="responsive"
                    />
                </div>

                <div className={styles.section}>
                    With the help of the team, I lead the wireframing and design
                    to a complete prototype that you can view on Figma. It was
                    constructed based with recommendations to address user flow
                    and the hierarchy of information to increase user
                    accessibility.
                </div>
                <iframe
                    className={styles.frame}
                    width="800"
                    height="450"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTydyHMmsqSb3MnpNl2PJX5%2FClass-Scheduler-(Copy)%3Fnode-id%3D15%253A2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D15%253A2"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}
