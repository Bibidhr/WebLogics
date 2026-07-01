import Navbar from '../Navigation/Navbar';
import Footer from '../Navigation/Footer';
import BackToTop from '../UI/BackToTop';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}
