import Navbar from '../Navigation/Navbar';
import Footer from '../Navigation/Footer';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
