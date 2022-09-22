import styles from '../../styles/Projects.module.css';
import Image from 'next/image';

export default function ColetteCodes() {
    return (
        <div>
            <h1>
                Colette.codes
                <div className={styles.source_links}>
                    <a href="https://github.com/colettes/colettes.github.io">
                        Source Code
                    </a>
                </div>
            </h1>
            <div className={styles.container}>
                <div className={styles.section_title}>The Objective</div>
                <div className={styles.section}>
                    I wanted to create a completely personalized resume site
                    with my own design and coding style. I look forward to
                    treating this as a space for continually adding,
                    refactoring, and modifying; as my own little note pad.
                </div>
                <div className={styles.section_title}>The Process</div>
                <div className={styles.section}>
                    I started the site utilizing Create React App, although I
                    switched to <b>Next.js</b> in order to tryout a new
                    framework and platform. Looking through the source code, you
                    can see that there have been several changes to the overall
                    design in <b>CSS</b> styling and <b>HTML</b> which I credit
                    to not creating a wireframe in the first place.
                </div>
                <div className={styles.section_title}>The Process</div>
                <div className={styles.section}>
                    I made the decision to not use any external components in
                    the design and slowly create my own libary of components. I
                    will continue to refactor and focus on a <b>functional</b>{' '}
                    style of programming.
                </div>
            </div>
        </div>
    );
}
