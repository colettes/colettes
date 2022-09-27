import ProjectCard from '../../components/ProjectCard';
import styles from '../../styles/Projects.module.css';
import { projectList } from '../../public/projectList';

export default function ProjectsPage() {
    return (
        <div>
            <h1>Projects</h1>
            <div className={styles.grid}>
                {projectList.map((project) => (
                    <ProjectCard
                        title={project.title}
                        key={project.id}
                        image={project.image}
                        path={project.path}
                        info={project.info}
                    />
                ))}
            </div>
        </div>
    );
}
