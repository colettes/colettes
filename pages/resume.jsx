import Image from 'next/image';
import styles from '../styles/Resume.module.css';

function ResumePage() {
    const techSkills = [
        'Javascript / React.js',
        'Java',
        'HTML/CSS',
        'GIT Version Control',
        'Object-Oriented Programming',
        'Functional Programming',
        'AdobeXD Wire Framing',
    ];
    const softSkills = [
        'Customer service',
        'Managing client expectations',
        'Strong verbal communication',
        'Prioritization',
    ];

    return (
        <div className={styles.resume}>
            <h1>Resume</h1>
            <div className={styles.section}>
                <div className={styles.section_title}>Work Experience</div>
                <div className={styles.subsection}>
                    <div className={styles.date}>2013 &darr; Now</div>
                    <div className={styles.subsection_info}>
                        <div className={styles.subsection_title}>
                            Teti Vintage
                        </div>
                        <div className={styles.subsection_subtitle}>
                            Founder
                        </div>
                        <div className={styles.subsection_desc}>
                            In high school, I turned my hobby into a small
                            business which I have maintained for several years.
                            I continually provide excellent customer service
                            with over 400 5-star reviews across multiple
                            platforms through positive engagement and timely
                            responses to customer needs.
                        </div>
                    </div>
                </div>
                <div className={styles.subsection}>
                    <div className={styles.date}>2022 &darr; now</div>
                    <div className={styles.subsection_info}>
                        <div className={styles.subsection_title}>STEPCHLD</div>
                        <div className={styles.subsection_subtitle}>
                            Bartender
                        </div>
                        <div className={styles.subsection_desc}>
                            all the info is bd
                        </div>
                    </div>
                </div>
                <div className={styles.subsection}>
                    <div className={styles.date}>2018 &darr; 2022</div>
                    <div className={styles.subsection_info}>
                        <div className={styles.subsection_title}>
                            Centro Restaurant Group
                        </div>
                        <div className={styles.subsection_subtitle}>
                            Bartender / Manager
                        </div>
                        <div className={styles.subsection_desc}>
                            I maintained an important role in elevating customer
                            satisfaction by remaining calm and calibrated under
                            demanding situations. I lead and directed employees
                            to address current business needs in a fast-paced
                            environment.
                        </div>
                    </div>
                </div>
                <div className={styles.subsection}>
                    <div className={styles.date}>2020 &darr; 2021</div>
                    <div className={styles.subsection_info}>
                        <div className={styles.subsection_title}>
                            Radford J. Smith, Chtrd.
                        </div>
                        <div className={styles.subsection_subtitle}>
                            Office Assistant
                        </div>
                        <div className={styles.subsection_desc}>
                            Provided direct assistance to the office manager by
                            handling confidential information and following
                            strict deadlines. I was required to pay accute
                            attention to detail in order to accurately and
                            fairly bill each client.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.section_title}>Education</div>
                <div className={styles.subsection}>
                    <div className={styles.date}>Jun 2021</div>
                    <div className={styles.subsection_info}>
                        <div className={styles.subsection_title}>
                            DePaul University
                        </div>
                        <div className={styles.subsection_subtitle}>
                            B.S. Computer Science <br /> Concentration: Software
                            Development
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.section_title}>Skills</div>
                <div className={styles.subsection}>
                    <div className={styles.subsection_skills}>
                        <div className={styles.subsection_skills_title}>
                            Tech
                            {techSkills.map((skill) => (
                                <div className={styles.subsection_skill}>
                                    {skill}
                                </div>
                            ))}
                        </div>

                        <div className={styles.subsection_skills_title}>
                            Other
                            {softSkills.map((skill) => (
                                <div className={styles.subsection_skill}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResumePage;

//<Image src={resumePic} layout="intrinsic" />
