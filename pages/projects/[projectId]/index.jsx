import { useRouter } from 'next/router';
import styles from '../../../styles/Projects.module.css';
import { projectList } from '../../../public/projectList';

export default function ProjectDetailPage() {
    const router = useRouter();
    const projectID = router.query.id;
    const projectInfo = projectList.find((project) => project.id == projectID);
    console.log(projectInfo);
    return (
        <div>
            <h1>{projectInfo.title}</h1>
            <div className={styles.container}>
                <div>description</div>
                <div>goals</div>
                <div>details</div>
                <div>{projectInfo.info}</div>
            </div>
        </div>
    );
}
