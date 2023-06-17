import './header.module.scss'
import Nav from '../navigation/nav';

const Header = () => {
    return (
        <header className='header'>
            <Nav headerNav={true}/>
        </header>
    )
}

export default Header;