import { ArrowRight, Check } from 'lucide-react';
import marqueeSpark from '../../assets/icons/marquee-spark.svg';
import coreAmlFrame from '../../assets/images/core-aml-frame.png';
import coreCb7Bg from '../../assets/images/core-cb7-bg.png';
import coreKycFrame from '../../assets/images/core-kyc-frame.png';
import marqueeHandWave from '../../assets/images/marquee-hand-wave.png';
import '../../styles/sections/core-banking.css';

const coreFeatures = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
];

const MarqueeGroup = () => (
  <div className="marquee__group">
    <img src={marqueeSpark} alt="" className="marquee__spark" aria-hidden="true" />
    <span>N7</span>
    <img src={marqueeSpark} alt="" className="marquee__spark" aria-hidden="true" />
    <b>Say</b>
    <img src={marqueeHandWave} alt="" className="marquee__hand" aria-hidden="true" />
    <b>to the new way of banking</b>
    <img src={marqueeSpark} alt="" className="marquee__spark" aria-hidden="true" />
    <span>CB7</span>
    <img src={marqueeSpark} alt="" className="marquee__spark" aria-hidden="true" />
    <b>Say</b>
  </div>
);

const CoreBanking = () => {
  return (
    <section className="core" id="core-banking">
      <div className="core__hero">
        <img src={coreCb7Bg} alt="" className="core__hero-bg" aria-hidden="true" loading="lazy" decoding="async" />
        <div className="core__content">
          <h2>A complete cloud-based<br />core banking.</h2>
          <p>Faster time to market with our cloud-based core banking services</p>
          <div className="core__actions">
            <a href="#demo" className="btn btn-primary">REQUEST DEMO</a>
            <a href="#solutions" className="link-arrow"><span>LEARN MORE</span> <ArrowRight size={15} /></a>
          </div>
        </div>
        <figure className="core__image core__image--right">
          <img src={coreAmlFrame} alt="AML dashboard interface" loading="lazy" decoding="async" />
        </figure>
      </div>

      <div className="core__details">
        <figure className="core__image core__image--left">
          <img src={coreKycFrame} alt="KYC dashboard interface" loading="lazy" decoding="async" />
        </figure>

        <div className="core__copy">
          <h3>Run a more efficient, flexible,and digitally connected corebanking system</h3>
          <p className="core__eyebrow">What you will get:</p>
          <ul className="check-list core__list">
            {coreFeatures.map((feature) => (
              <li key={feature}>
                <span><Check size={14} /></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="paperless-panel">
        <div className="paperless-panel__copy">
          <h2>Take the full advantage of<br />going paper-less now.</h2>
          <p>CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations</p>
        </div>
        <div className="paperless-panel__actions">
          <a href="#contact" className="btn btn-outline">CONTACT US</a>
          <a href="#demo" className="btn btn-primary">REQUEST DEMO</a>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          <MarqueeGroup />
          <MarqueeGroup />
          <MarqueeGroup />
          <MarqueeGroup />
        </div>
      </div>
    </section>
  );
};

export default CoreBanking;

