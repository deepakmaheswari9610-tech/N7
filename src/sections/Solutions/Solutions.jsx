import { ArrowRight } from 'lucide-react';
import coreIcon from '../../assets/icons/solution-core.svg';
import digitalIcon from '../../assets/icons/solution-digital.svg';
import managementIcon from '../../assets/icons/solution-management.svg';
import openIcon from '../../assets/icons/solution-open.svg';
import originationIcon from '../../assets/icons/solution-origination.svg';
import '../../styles/sections/solutions.css';

const solutions = [
  {
    icon: coreIcon,
    title: 'Core Banking CB7',
    description: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
    href: '#core-banking',
  },
  {
    icon: digitalIcon,
    title: 'Digital Banking N7',
    description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
    href: '#digital-banking',
  },
  {
    id: 'open-banking',
    icon: openIcon,
    title: 'Open Banking',
    description: 'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
    href: '#open-banking',
  },
  {
    id: 'loan-origination',
    icon: originationIcon,
    kicker: 'NBFC',
    title: 'Loan Origination System',
    description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
    href: '#loan-origination',
  },
  {
    id: 'loan-management',
    icon: managementIcon,
    kicker: 'NBFC',
    title: 'Loan Management System',
    description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
    href: '#loan-management',
  },
];

const Solutions = () => {
  return (
    <section className="solutions section" id="solutions">
      <div className="container solutions__inner">
        <div className="solutions__intro">
          <h2 className="solutions__title">
            All of our solutions are<br />
            tailor-made to your needs
          </h2>
          <a href="#demo" className="btn btn-outline solutions__cta">REQUEST DEMO</a>
        </div>

        <div className="solutions__grid">
          {solutions.map((solution) => (
            <article key={solution.title} id={solution.id} className="solutions__card">
              <div className="solutions__card-top">
                <img src={solution.icon} alt="" className="solutions__icon" aria-hidden="true" loading="lazy" decoding="async" />
                {solution.kicker && <span className="solutions__kicker">{solution.kicker}</span>}
              </div>
              <div className="solutions__card-copy">
                <h3 className="solutions__card-title">{solution.title}</h3>
                <p className="solutions__card-desc">{solution.description}</p>
              </div>
              <a href={solution.href} className="link-arrow">
                <span>LEARN MORE</span> <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
