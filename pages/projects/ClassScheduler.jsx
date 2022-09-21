import styles from '../../styles/Projects.module.css';
import Image from 'next/image';

export default function ClassScheduler() {
    return (
        <div>
            <h1>Class Scheduler</h1>
            <div className={styles.container}>
                <div></div>
                <div className={styles.section_title}>The Objective</div>
                <div className={styles.section}>
                    The current system that students use to schedule classes at
                    Depaul is clunky and counterintuitive. It requires multiple
                    applications that are not integrated, meaning a frustrating
                    amount of going back and forth between web pages. The goal
                    was to design a user friendly solution to the current
                    system, using the principles of interaction design and
                    applying usability methods.
                </div>
                <div className={styles.section_title}>The Process</div>
                <div className={styles.section}>
                    After identifying the problem personally, I conducted
                    several interviews with DePaul students to target the main
                    issues. I created two personas / based on the results in
                    order to guide the next steps and center the team on one
                    idea.
                </div>
                <div className={styles.section_image}>
                    <Image
                        alt="Graphic demonstrating opinions of a theoretical DePaul student."
                        src="/portfolio/classScheduler/persona1.png"
                        width={1566}
                        height={1054}
                        layout="responsive"
                    />
                    <Image
                        className={styles.section_image}
                        alt="Second graphic demonstrating opinions of a theoretical DePaul student."
                        src="/portfolio/classScheduler/persona2.png"
                        width={1566}
                        height={1054}
                        layout="responsive"
                    />
                </div>

                <div className={styles.section}>
                    I lead a team by creating the basic wireframe, editing
                    teammates pages, and completing the project which you can
                    view on Figma. It was constructed to address user flow
                    issues and simplify the UX design, based on ongoing feedback
                    from DePaul students.
                </div>
                <iframe
                    className={styles.frame}
                    width="800"
                    height="450"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTydyHMmsqSb3MnpNl2PJX5%2FClass-Scheduler-(Copy)%3Fnode-id%3D15%253A2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D15%253A2"
                    allowfullscreen
                ></iframe>

                <div className={styles.section}>
                    <ul>
                        Key Concepts
                        <li>Figma wireframing</li>
                        <li>Developing personas</li>
                        <li>Conducting formal research</li>
                        <li>Handling ambiguity </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
