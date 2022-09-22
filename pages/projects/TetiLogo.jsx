import styles from '../../styles/Projects.module.css';
import Image from 'next/image';

export default function TetiLogo() {
    return (
        <div>
            <h1>Logo Redesign</h1>
            <div className={styles.container}>
                <div className={styles.section}>
                    To refresh my brand presence, I redesigned my logo and
                    marketing materials using <b>Canva</b> and <b>AdobeXD</b>.
                </div>
                <div className={styles.image_wrapper}>
                    <Image
                        alt="Yellow poster with Teti brand name in center."
                        src="/portfolio/tetiRebrand/poster.png"
                        width={1132}
                        height={944}
                        layout="responsive"
                    />
                </div>
                <div className={styles.image_wrapper}>
                    <Image
                        alt="Eight images of business card front and backs."
                        src="/portfolio/tetiRebrand/businessCards.png"
                        width={1566}
                        height={1054}
                        layout="responsive"
                    />
                </div>
                <div className={styles.image_wrapper}>
                    <Image
                        alt="Eight images of stickers with the top row simply Teti in 
                        4 different colors and the bottom row with a teddy bear logo in 4 different colors."
                        src="/portfolio/tetiRebrand/stickers.png"
                        width={1107}
                        height={494}
                        layout="responsive"
                    />
                </div>
            </div>
        </div>
    );
}
