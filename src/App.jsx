import { Footer, Navbar } from './components/layout';
import { CTA, CaseStudies, CoreBanking, DigitalBanking, Hero, Insights, Solutions } from './sections';
import './styles/app.css';

function App() {
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
