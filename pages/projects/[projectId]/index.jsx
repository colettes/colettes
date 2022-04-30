import { useRouter } from 'next/router';

export default function ProjectDetailPage() {
    const router = useRouter();

    return (
        <div>
            <h1>{router.asPath}</h1>
        </div>
    );
}
