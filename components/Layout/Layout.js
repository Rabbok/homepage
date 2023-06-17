import Header from '../header/Header';
import Footer from '../Footer/footer';
import Main from '../main/main';

function Layout() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default Layout;