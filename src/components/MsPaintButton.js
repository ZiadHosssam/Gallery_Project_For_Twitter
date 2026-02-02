import Link from 'next/link';
import styles from './MsPaintButton.module.css';

export default function MsPaintButton({
    children,
    href,
    onClick,
    variant = 'primary',
    size = 'medium'
}) {
    const className = `${styles.button} ${styles[variant]} ${styles[size]}`;

    if (href) {
        return (
            <Link href={href} className={className}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
}
