import styles from '../styles/Home.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Index() {
    return (
        <div className={styles.container}>
            <h1>
                Hi there!
                <br />
                My name is <b>Colette.</b>
            </h1>
            <h2>
                I like to <b>code</b> things, <br />
                <b>design</b> stuff, <br />
                <b>manage</b> my business, <br />
                and read about mezcal &#38; wine.
            </h2>
        </div>
    );
}
