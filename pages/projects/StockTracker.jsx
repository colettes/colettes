import styles from '../../styles/Projects.module.css';
import Image from 'next/image';

export default function StockTracker() {
    return (
        <div>
            <h1>Stock Tracker</h1>
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

                <div className={styles.section}>
                    With the help of the team, I lead the wireframing and design
                    to a complete prototype that you can view on Figma. It was
                    constructed based with recommendations to address user flow
                    and the hierarchy of information to increase user
                    accessibility.
                </div>
                <iframe
                    width="375"
                    height="812"
                    src="https://xd.adobe.com/embed/4693cea1-a1ad-4dec-b8f4-4740325e9c46-13c0/?fullscreen"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}
