import styles from '../../styles/Projects.module.css';
import Image from 'next/image';

export default function D3L() {
    return (
        <div>
            <h1>
                D2L Redesign
                <div className={styles.source_links}>
                    <a href="https://github.com/colettes/D3L">Source Code</a>
                </div>
            </h1>

            <div className={styles.container}>
                <div className={styles.section_title}>The Objective</div>
                <div className={styles.section}>
                    To develop a dynamic software system that is more condusive
                    to group projects at the Univesrity level; to replace the
                    current web application and foster collaboration.
                </div>
                <div className={styles.section_title}>The Process</div>

                <div className={styles.section}>
                    Over 10 weeks, a team of 6 people developed the technical
                    documentation, adapted to changing requirements, and
                    completed a testable software system. Employing{' '}
                    <b>ReactJS</b>, we created a full-stack web app through{' '}
                    <b>AGILE</b> development. Individually, I constructed a
                    simple wireframe using <b>AdobeXD</b> and implemented the
                    front-end design using <b>CSS/HTML</b>. I worked closely
                    with the team to build an interactive web application.
                </div>

                <div className={styles.section}>
                    Below is the intial wireframe presentation of the student
                    dashboard appearance.
                </div>

                <iframe
                    className={styles.frame_wrapper}
                    width="640"
                    height="400"
                    src="https://xd.adobe.com/embed/28bde728-1159-4167-ab67-8efc3687383b-7dee/?fullscreen"
                    frameBorder="0"
                    allowFullscreen
                ></iframe>

                <div className={styles.section}>
                    <ul>
                        Highlights
                        <li>ReactJS</li>
                        <li>Create React App</li>
                        <li>NodeJS</li>
                        <li>GitHub</li>
                        <li>Agile Development</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
