import styles from './header.module.scss'
import Nav from '../navigation/Nav';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Nav headerNav={true}/>
        </header>
    )
}

export default Header;