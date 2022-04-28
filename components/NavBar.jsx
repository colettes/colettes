import styles from '../styles/Layout.module.css';
import Link from 'next/link';

const navItems = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Resume',
        path: '/resume',
    },
    {
        name: 'Projects',
        path: '/projects',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
];

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            {navItems.map((item, index) => (
                <Link href={item.path} key={index}>
                    <a>{item.name}</a>
                </Link>
            ))}
        </div>
    );
}
