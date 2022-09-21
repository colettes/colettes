import styles from '../../styles/Projects.module.css';
import Image from 'next/image';

export default function TetiLogo() {
    return (
        <div>
            <h1>Teti Logo Design</h1>
            <div className={styles.container}>
                <div className={styles.section_image}>
                    <Image
                        alt="" //TODO
                        src="/portfolio/tetiRebrand/poster.png"
                        width={1132}
                        height={944}
                        layout="responsive"
                    />
                </div>
                <div className={styles.section_image}>
                    <Image
                        alt="" //TODO
                        src="/portfolio/tetiRebrand/businessCards.png"
                        width={1566}
                        height={1054}
                        layout="responsive"
                    />

                    <Image
                        alt="" //TODO
                        src="/portfolio/tetiRebrand/stickers.png"
                        width={1107}
                        height={494}
                        layout="responsive"
                    />
                </div>
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
            </div>
        </div>
    );
}
