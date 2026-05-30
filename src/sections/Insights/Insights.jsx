import { ArrowRight } from 'lucide-react';
import cardArt from '../../assets/images/insights-card-frame.png';
import '../../styles/sections/insights.css';

const insights = [
  {
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
    featured: true,
  },
  {
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
  },
  {
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
  },
];

const Insights = () => {
  return (
    <section className="insights" id="insights">
      <div className="container insights__grid">
        <div className="insights__intro">
          <h2>Get yourself up-to-speed on all the things happening in fintech</h2>
          <a href="#insights" className="btn btn-outline">INSIGHTS</a>
        </div>

        <div className="insights__cards">
          {insights.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className={`insight-card ${item.featured ? 'insight-card--featured' : ''}`}
            >
              {item.featured && (
                <img src={cardArt} alt="" className="insight-card__art" aria-hidden="true" loading="lazy" decoding="async" />
              )}
              <div className="insight-card__body">
                <p className="insight-card__kicker">GETTING STARTED</p>
                <h3>{item.title}</h3>
                <p className="insight-card__meta">{item.author} <span>{item.date}</span></p>
                <a href="#insights" className="btn btn-outline insight-card__btn">READ MORE</a>
              </div>
            </article>
          ))}
          <a href="#insights" className="link-arrow insights__all">READ ALL INSIGHTS <ArrowRight size={15} /></a>
        </div>
      </div>
    </section>
  );
};

export default Insights;
