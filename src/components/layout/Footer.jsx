import { ArrowRight } from 'lucide-react';
import footerEllipse from '../../assets/images/footer-ellipse.png';
import footerLogo from '../../assets/images/footer-n7.svg';
import '../../styles/layout/footer.css';

const solutions = [
  'Core Banking CB7',
  'Digital Banking N7',
  'Open Banking',
  'Loan Origination System',
  'Loan Management System',
  'Digital Transformation',
];

const bankingLinks = ['About Us', 'Solutions', 'Contact', 'Company', 'Careers', 'Insights', 'Core Team', 'Brand Center'];

const locationColumns = [
  {
    city: 'London',
    address: 'Linktia Infosystems Ltd - CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.',
    title: 'Solutions',
    links: solutions.map((label) => ({ label, href: '#solutions' })),
  },
  {
    city: 'Dubai',
    address: 'Linktia Infosystems Ltd - CB7, Jumeirah Business Center 5, Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates.',
    title: 'N7 Banking',
    links: bankingLinks.map((label) => ({
      label,
      href: `#${label.toLowerCase().replaceAll(' ', '-')}`,
    })),
  },
  {
    city: 'Pune',
    address: 'Linktia Infosystems Ltd - CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India.',
    title: 'Our Socials',
    links: [
      { label: 'LinkedIn', href: '#linkedin' },
      { label: 'X', href: '#x' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <img src={footerEllipse} alt="" className="footer__ellipse" aria-hidden="true" loading="lazy" decoding="async" />
      <div className="footer__inner">
        <a href="#home" className="footer__logo" aria-label="N7 home">
          <img src={footerLogo} alt="N7" loading="lazy" decoding="async" />
        </a>

        <div className="footer__content" id="company">
          {locationColumns.map((column) => (
            <div className="footer__column" key={column.title}>
              <div className="footer__location">
                <h3>{column.city}</h3>
                <p>{column.address}</p>
              </div>

              <div className="footer__link-group">
                <h3>{column.title}</h3>
                {column.links.map((item) => (
                  <a key={item.label} href={item.href}>
                    {item.label}
                    <ArrowRight size={15} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="footer__copy">
          Copyright (c) 2022 by Linktia Infosystems Limited - [CB7 and N7 as Commercial Brand] - [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </footer>
  );
};

export default Footer;
