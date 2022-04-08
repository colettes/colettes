import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/Projects.module.css";

const projectList = [
  {
    title: "Fullstack: iOS App",
    image: "/projectPics/stockTrackerApp.png",
    path: "/projects/stocktracker",
    link: "https://www.behance.net/gallery/115517541/Stock-Tacker-App/modules/659203887",
    info: "TODO",
  },
  {
    title: "Design: Logo Design",
    image: "/projectPics/tetiLogo.png",
    path: "/projects/tetilogo",
    link: "https://www.behance.net/gallery/133423139/Logo-Design",
    info: "TODO",
  },
  {
    title: "Fullstack: D2L Redesign",
    image: "/projectPics/d3l.png",
    path: "projects/d3l",
    info: "TODO",
  },
  {
    title: "UXD: Class Scheduler",
    image: "/projectPics/classscheduler",
    path: "projects/classScheduler",
    info: "TODO",
  },
];

function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
      <div className={styles.grid}>
        {projectList.map((project) => (
          <ProjectCard
            title={project.title}
            image={project.image}
            path={project.path}
            info={project.info}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
