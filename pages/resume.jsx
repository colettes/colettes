import Image from "next/image";
import styles from "../styles/Resume.module.css";

function ResumePage() {
  return (
    <div className={styles.resume}>
      <h1>Resume</h1>
      <div className={styles.section}>
        <div className={styles.section_title}>Work Experience</div>
        <div className={styles.subsection}>
          <div className={styles.date}>2013 &darr; Now</div>
          <div className={styles.subsection_info}>
            <div className={styles.subsection_title}>Teti Vintage</div>
            <div className={styles.subsection_subtitle}>Founder</div>
            <div className={styles.subsection_desc}>
              In high school, I turned my hobby into a small business which I
              have maintained for several years. I continually provide excellent
              customer service with over 400 5-star reviews across multiple
              platforms through positive engagement and timely responses to
              customer needs.
            </div>
          </div>
        </div>
        <div className={styles.subsection}>
          <div className={styles.date}>2017 &darr; Now</div>
          <div className={styles.subsection_info}>
            <div className={styles.subsection_title}>
              Centro Restaurant Group
            </div>
            <div className={styles.subsection_subtitle}>
              Bartender / Manager
            </div>
            <div className={styles.subsection_desc}>
              I maintain an important role in elevating customer satisfaction by
              sustaining a positive disposition under demanding situations. I
              lead employees to address current business needs in a fast-paced
              environment.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.section_title}>Education</div>
        <div className={styles.subsection}>
          <div className={styles.date}>Jun 2021</div>
          <div className={styles.subsection_info}>
            <div className={styles.subsection_title}>DePaul University</div>
            <div className={styles.subsection_subtitle}>
              B.S. Computer Science
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;

//<Image src={resumePic} layout="intrinsic" />
