import styles from '../styles/Home.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Index() {
    return (
        <div className={styles.container}>
            <h1>Hi there!</h1>
            <h2>
                My name is <b>Colette</b>. <br /> I'm a <b>bartender</b> by
                night and <b>web designer</b> by day. <br /> I like to{' '}
                <b>code</b> things, <b>design</b> stuff, <b>manage</b> my
                business, and read about mezcal &#38; wine.
            </h2>
        </div>
    );
}
