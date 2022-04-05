import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/Cards.module.css";

const projectList = [
  {
    title: "Fullstack: iOS App",
    image: "/projectPics/stockTrackerApp.png",
    path: "/projects/stocktracker",
    link: "https://www.behance.net/gallery/115517541/Stock-Tacker-App/modules/659203887",
  },
  {
    title: "Design: Logo Design",
    image: "/projectPics/tetiLogo.png",
    path: "/projects/tetilogo",
    link: "https://www.behance.net/gallery/133423139/Logo-Design",
  },
  {
    title: "Fullstack: D2L Redesign",
    image: "/projectPics/d3l.png",
    path: "projects/d3l",
  },
  {
    title: "UXD: Class Scheduler",
    image: "/projectPics/classscheduler",
    path: "projects/classScheduler",
  },
  {
    title: "Fullstack: Art Application",
    image: "/projectPics/artApplication",
    path: "projects/artapp",
  },
];

function ProjectsPage() {
  return (
    <div>
      <div className={styles.title}>Projects</div>
      <div className={styles.grid}>
        {projectList.map((project) => (
          <ProjectCard
            title={project.title}
            image={project.image}
            path={project.path}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
