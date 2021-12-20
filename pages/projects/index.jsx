import stockPic from "../../public/projectPics/stockTrackerApp.png";
import logoPic from "../../public/projectPics/tetiLogo.png";
import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/Home.module.css";

function ProjectsPage() {
  return (
    <div className={styles.grid}>
      <ProjectCard
        link="https://www.behance.net/gallery/115517541/Stock-Tacker-App/modules/659203887"
        image={stockPic}
        title="iOS App"
      />
      <ProjectCard
        link="https://www.behance.net/gallery/133423139/Logo-Design"
        image={logoPic}
        title="Logo Design"
      />
    </div>
  );
}

export default ProjectsPage;
