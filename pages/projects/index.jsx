import ProjectCard from '../../components/ProjectCard';
import styles from '../../styles/Projects.module.css';
import { projectList } from '../../public/projectList';

function ProjectsPage() {
    return (
        <div>
            <h1>Projects</h1>
            <div className={styles.grid}>
                {projectList.map((project) => (
                    <ProjectCard
                        title={project.title}
                        id={project.id}
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
