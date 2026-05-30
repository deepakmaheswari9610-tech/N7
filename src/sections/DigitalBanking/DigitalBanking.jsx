import { ArrowRight, Check } from 'lucide-react';
import sevenImage from '../../assets/images/7.png';
import n7Image from '../../assets/images/N7.png';
import phoneAnalyticsImage from '../../assets/images/phone-analytics.png';
import phoneHomeImage from '../../assets/images/phone-home.png';
import phoneProfileImage from '../../assets/images/phone-profile.png';
import vectorImage from '../../assets/images/Vector.png';
import '../../styles/sections/digital-banking.css';

const digitalBlocks = [
  {
    title: 'Fully compliant with regulatory requirement',
    copy: 'The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank\'s operational-risk protocols and procedures.',
    points: ['Pre-integrated Security System', 'Fully Compliant With Regulatory Requirement', 'Digitally Connected Core'],
    image: phoneHomeImage,
  },
  {
    title: 'No legacy IT systems',
    copy: 'Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.',
    points: ['Adaptive & Intelligent API monetization', 'Ambient User Experience', 'Cloud-native With lower TCO'],
    image: phoneAnalyticsImage,
  },
  {
    title: 'No traditional branches',
    copy: 'Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.',
    points: ['Branchless & Paperless Banking', 'Digital Transformation Capability', 'Optimized, Adoptable and Scalable'],
    image: phoneProfileImage,
  },
];

const DigitalBanking = () => {
  return (
    <section className="digital" id="digital-banking">
      <img src={vectorImage} alt="" className="digital__vector-bg" aria-hidden="true" />
      <img src={sevenImage} alt="" className="digital__seven-bg" aria-hidden="true" />
      <div className="container">
        <div className="digital__intro">
          <img src={n7Image} alt="" className="digital__watermark" aria-hidden="true" />
          <div className="digital__intro-copy">
            <div className="digital__intro2-copy">
            <h2>Digital banking<br />out-of-the-box</h2>
            <p>N7 helps your financial institution improve the client experience, automate and optimize procedures</p>
            </div>
            <div className="digital__actions">
              <a href="#demo" className="btn btn-primary">REQUEST DEMO</a>
              <a href="#digital-details" className="link-arrow link-arrow--dark">
                <span>LEARN MORE</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="digital__timeline" id="digital-details">
          {digitalBlocks.map((block, index) => (
            <article key={block.title} className={`digital__block digital__block--${index + 1}`}>
              <div className="digital__phone-wrap">
                <img src={block.image} alt={`${block.title} mobile banking screen`} />
              </div>
              <div className="digital__copy">
                <div className="digital__copy-text">
                  <h3>{block.title}</h3>
                  <p>{block.copy}</p>
                </div>
                <ul className="check-list check-list--dark">
                  {block.points.map((point) => (
                    <li key={point}>
                      <span><Check size={14} /></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="paperless-panel paperless-panel--digital">
          <div className="paperless-panel__copy">
            <h2>Take the full advantage of<br />going paper-less now.</h2>
            <p>N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations.</p>
          </div>
          <div className="paperless-panel__actions">
            <a href="#contact" className="btn btn-outline">CONTACT US</a>
            <a href="#demo" className="btn btn-primary">REQUEST DEMO</a>
          </div>
        </div>
      </div>  
    </section>
  );
};

export default DigitalBanking;
