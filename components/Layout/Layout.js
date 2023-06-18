import Header from '../header/Header';
import Footer from '../Footer/footer';
import Main from '../main/main';
import styles from './Layout.module.scss'

function Layout() {
  return (
    <div className={styles.app}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default Layout;