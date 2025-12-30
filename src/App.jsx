import { useEffect, useState } from 'react';
import AOS from 'aos';
import SiteHeader from './components/SiteHeader.jsx';
import ScrollTopButton from './components/ScrollTopButton.jsx';
import Preloader from './components/Preloader.jsx';
import HomePage from './pages/HomePage.jsx';

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const onLoad = () => setShowPreloader(false);
    if (document.readyState === 'complete') {
      setShowPreloader(false);
    } else {
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  return (
    <>
      <SiteHeader />
      <main id="home" className="main">
        <HomePage />
      </main>
      <ScrollTopButton />
      <Preloader show={showPreloader} />
    </>
  );
}
