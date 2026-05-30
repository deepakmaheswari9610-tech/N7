import { ArrowLeft, ArrowRight, Zap } from 'lucide-react';
import { useState } from 'react';
import caseStudyArt from '../../assets/images/insights-card-art.png';
import '../../styles/sections/case-studies.css';

const caseStudies = [
  {
    title: 'How we help brand reach out to more people',
    company: 'Zoomerr',
    category: 'GETTING STARTED',
  },
  {
    title: 'How banks can launch paper-less journeys faster',
    company: 'N7 Banking',
    category: 'DIGITAL BANKING',
  },
  {
    title: 'How lending teams shorten origination cycles',
    company: 'CB7 Lending',
    category: 'LOAN ORIGINATION',
  },
  {
    title: 'How operations teams scale with smarter workflows',
    company: 'Core Banking',
    category: 'OPERATIONS',
  },
];

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousIndex = (activeIndex - 1 + caseStudies.length) % caseStudies.length;
  const nextIndex = (activeIndex + 1) % caseStudies.length;
  const activeCase = caseStudies[activeIndex];

  const goToPrevious = () => {
    setActiveIndex(previousIndex);
  };

  const goToNext = () => {
    setActiveIndex(nextIndex);
  };

  return (
    <section className="case-studies" id="case-studies">
      <div className="case-studies__inner">
        <h2>Our Case Studies</h2>

        <div className="case-studies__carousel" aria-live="polite">
          {[previousIndex, nextIndex].map((index, position) => (
            <article
              className={`case-study-card case-study-card--ghost case-study-card--${position === 0 ? 'previous' : 'next'}`}
              aria-hidden="true"
              key={caseStudies[index].title}
            >
              <img src={caseStudyArt} alt="" aria-hidden="true" />
              <div>
                <p>{caseStudies[index].category}</p>
                <h3>{caseStudies[index].title}</h3>
              </div>
            </article>
          ))}

          <article className="case-study-card case-study-card--active">
            <img src={caseStudyArt} alt="" className="case-study-card__image" aria-hidden="true" />
            <div className="case-study-card__content">
              <p className="case-study-card__kicker">{activeCase.category}</p>
              <h3>{activeCase.title}</h3>
              <p className="case-study-card__company"><Zap size={20} fill="currentColor" /> {activeCase.company}</p>
              <a href="#case-studies" className="btn btn-outline case-study-card__button">READ MORE</a>
            </div>
          </article>

          <div className="case-studies__footer">
            <div className="case-studies__controls" aria-label="Case study carousel controls">
              <button type="button" className="case-studies__arrow" onClick={goToPrevious} aria-label="Previous case study">
                <ArrowLeft size={24} />
              </button>

              <div className="case-studies__dots" aria-label="Case study slides">
                {caseStudies.map((item, index) => (
                  <button
                    type="button"
                    className={`case-studies__dot ${index === activeIndex ? 'case-studies__dot--active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${item.company} case study`}
                    aria-current={index === activeIndex}
                    key={item.company}
                  />
                ))}
              </div>

              <button type="button" className="case-studies__arrow" onClick={goToNext} aria-label="Next case study">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>

          <a href="#case-studies" className="link-arrow case-studies__all">VIEW ALL <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
