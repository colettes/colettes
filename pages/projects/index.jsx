import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/Projects.module.css";

const projectList = [
  {
    key: 1,
    title: "Fullstack: iOS App",
    image: "/projectPics/stockTrackerApp.png",
    path: "/projects/stocktracker",
    link: "https://www.behance.net/gallery/115517541/Stock-Tacker-App/modules/659203887",
    info: "TODO",
  },
  {
    key: 2,
    title: "Design: Logo Design",
    image: "/projectPics/tetiLogo.png",
    path: "/projects/tetilogo",
    link: "https://www.behance.net/gallery/133423139/Logo-Design",
    info: "TODO",
  },
  {
    key: 3,

    title: "Fullstack: D2L Redesign",
    image: "/projectPics/d3l.png",
    path: "projects/d3l",
    info: "TODO",
  },
  {
    key: 4,

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
            key={project.key}
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
