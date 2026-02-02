import styles from './MuseumPlacard.module.css';

export default function MuseumPlacard({ filename, title, showFilename = true }) {
    return (
        <div className={styles.placard}>
            <h3 className={styles.title}>{title}</h3>
            {/* Spec: filename always visible like a museum placard */}
            {showFilename && filename && (
                <p className={styles.filename}>{filename}</p>
            )}
        </div>
    );
}
