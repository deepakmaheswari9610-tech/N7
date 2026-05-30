import heroPreview from '../../assets/images/hero-banking-preview.png';
import '../../styles/sections/hero.css';

const ShellsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a10 10 0 0 0 10-10c0-5.52-4.48-10-10-10S2 6.48 2 12a10 10 0 0 0 10 10z" />
    <path d="M12 6a6 6 0 0 1 6 6c0 3.31-2.69 6-6 6s-6-2.69-6-6" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const SmartFinderIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 12l10 10 10-10L12 2z" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
);

const ZoomerrIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
  </svg>
);

const ArtVenueIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14M9 11h6M9 15h6" />
  </svg>
);

const KontrastrIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v20A10 10 0 0 0 12 2z" fill="currentColor" />
  </svg>
);

const WavesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 10c3-3 5-3 8 0s5 3 8 0 3-3 4-2" />
    <path d="M2 14c3-3 5-3 8 0s5 3 8 0 3-3 4-2" opacity="0.6" />
  </svg>
);

const brandLogos = [
  { name: 'SHELLS', icon: ShellsIcon },
  { name: 'SmartFinder', icon: SmartFinderIcon },
  { name: 'Zoomerr', icon: ZoomerrIcon },
  { name: 'ArtVenue', icon: ArtVenueIcon },
  { name: 'kontrastr', icon: KontrastrIcon },
  { name: 'WAVESMARATHON', icon: WavesIcon },
];

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__copy">
            <h1 className="hero__title">
              The new foundation<br />
              of modern banking
            </h1>
            <p className="hero__subtitle">
              We drive innovation and growth, provide seamless
              customer experience and operational excellence
            </p>
          </div>
          <div className="hero__actions">
            <a href="#demo" className="btn btn-primary">REQUEST DEMO</a>
            <a href="#contact" className="btn btn-outline">CONTACT US</a>
          </div>
        </div>

        <div className="hero__visual-glow" aria-hidden="true" />

        <div className="hero__visual" aria-label="N7 digital banking dashboard preview">
          <div className="hero__visual-container">
            <img src={heroPreview} alt="N7 digital banking dashboard preview" className="hero__preview-image" />
          </div>
        </div>

        <div className="hero__trusted">
          <div className="hero__trusted-inner">
            <p className="hero__trusted-label">Trusted By:</p>
            <div className="hero__trusted-logos">
              {brandLogos.map((brand) => (
                <span key={brand.name} className="hero__logo-item">
                  <brand.icon />
                  {brand.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
