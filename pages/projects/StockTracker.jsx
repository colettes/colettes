import styles from '../../styles/Projects.module.css';
import Image from 'next/image';

export default function StockTracker() {
    return (
        <div>
            <h1>
                Stock Tracker
                <div className={styles.source_links}>
                    <a href="https://github.com/colettes/StockTracker">
                        Source Code
                    </a>
                </div>
            </h1>

            <div className={styles.container}>
                <div className={styles.section}>
                    This is a simple app that uses static data to create a list
                    of stocks with information from the Alpha Advantage API. It
                    is an exploration on <b>API data processing</b> along with
                    app structure and design. This app features Tab Bar
                    Controller, Core Graphics, GestureRecognizer, and
                    URLSession.
                </div>
                <div className={styles.section}>
                    The wireframe below was created using <b>AdobeXD</b>.
                </div>
                <iframe
                    className={styles.frame_wrapper}
                    width="375"
                    height="812"
                    src="https://xd.adobe.com/embed/4693cea1-a1ad-4dec-b8f4-4740325e9c46-13c0/?fullscreen"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}
