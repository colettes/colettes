import Image from "next/image";
import styles from "../styles/Resume.module.css";
import resumePic from "../public/resume.jpeg";

function ResumePage() {
  return (
    <div className={styles.resume}>
      <Image src={resumePic} layout="intrinsic" />
    </div>
  );
}

export default ResumePage;
