import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../../styles/layout/navbar.css';

const DropdownChevron = ({ isOpen }) => (
  <svg
    aria-hidden="true"
    className={`navbar__chevron ${isOpen ? 'navbar__chevron--open' : ''}`}
    viewBox="0 0 13.7339 13.7339"
    focusable="false"
  >
    <path
      d="M0.8 3.83L6.86695 9.89695L12.9339 3.83"
      fill="none"
      stroke="#E9F4F9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.14"
    />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutionsItems = [
    { label: 'Core Banking CB7', href: '#core-banking' },
    { label: 'Digital Banking N7', href: '#digital-banking' },
    { label: 'Open Banking', href: '#open-banking' },
    { label: 'Loan Origination System', href: '#loan-origination' },
    { label: 'Loan Management System', href: '#loan-management' },
  ];

  const resourcesItems = [
    { label: 'Insights', href: '#insights' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Careers', href: '#careers' },
    { label: 'Company', href: '#company' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="/" className="navbar__logo">
          N7
        </a>

        <div className="navbar__content">
          <ul className="navbar__links">
            <li
              className="navbar__item navbar__item--dropdown"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="navbar__link" type="button">
                SOLUTIONS <DropdownChevron isOpen={activeDropdown === 'solutions'} />
              </button>
              {activeDropdown === 'solutions' && (
                <div className="navbar__dropdown">
                  {solutionsItems.map(item => (
                    <a key={item.label} href={item.href} className="navbar__dropdown-item">
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
            <li
              className="navbar__item navbar__item--dropdown"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="navbar__link" type="button">
                RESOURCES <DropdownChevron isOpen={activeDropdown === 'resources'} />
              </button>
              {activeDropdown === 'resources' && (
                <div className="navbar__dropdown">
                  {resourcesItems.map(item => (
                    <a key={item.label} href={item.href} className="navbar__dropdown-item">
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
            <li className="navbar__item">
              <a href="#about" className="navbar__link">ABOUT US</a>
            </li>
          </ul>

          <div className="navbar__actions">
            <a href="#demo" className="btn btn-outline navbar__cta">REQUEST DEMO</a>
            <button className="navbar__hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        <div className="container">
          <div className="navbar__mobile-section">
            <p className="navbar__mobile-label">SOLUTIONS</p>
            {solutionsItems.map(item => (
              <a key={item.label} href={item.href} className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="navbar__mobile-section">
            <p className="navbar__mobile-label">RESOURCES</p>
            {resourcesItems.map(item => (
              <a key={item.label} href={item.href} className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="navbar__mobile-section">
            <a href="#about" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>ABOUT US</a>
          </div>
          <a href="#demo" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }} onClick={() => setMobileOpen(false)}>
            REQUEST DEMO
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
