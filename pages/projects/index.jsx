import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/Projects.module.css";

const projectList = [
  {
    title: "iOS App",
    image: "/projectPics/stockTrackerApp.png",
    link: "https://www.behance.net/gallery/115517541/Stock-Tacker-App/modules/659203887",
  },
  {
    title: "Logo Design",
    image: "/projectPics/tetiLogo.png",
    link: "https://www.behance.net/gallery/133423139/Logo-Design",
  },
];

function ProjectsPage() {
  return (
    <div className={styles.grid}>
      {projectList.map((project) => (
        <ProjectCard
          title={project.title}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default ProjectsPage;
