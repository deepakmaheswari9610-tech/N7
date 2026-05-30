import { useLayoutEffect } from 'react';
import { Footer, Navbar } from './components/layout';
import { CTA, CaseStudies, CoreBanking, DigitalBanking, Hero, Insights, Solutions } from './sections';
import './styles/app.css';

function App() {
  useLayoutEffect(() => {
    const scrollToHash = () => {
      const target = window.location.hash ? document.querySelector(window.location.hash) : null;

      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY,
          behavior: 'auto',
        });
      }
    };

    scrollToHash();
    const timers = [100, 400, 900].map((delay) => window.setTimeout(scrollToHash, delay));

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <CoreBanking />
        <DigitalBanking />
        <Insights />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
