import styles from './footer.module.scss';
import Nav from '../navigation/Nav';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Nav/>
        </footer>
    )
}

export default Footer;