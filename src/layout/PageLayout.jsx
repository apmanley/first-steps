import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function PageLayout() {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;
