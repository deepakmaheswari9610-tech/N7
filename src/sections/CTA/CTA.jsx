import '../../styles/sections/cta.css';

const CTA = () => {
  return (
    <section className="final-cta" id="demo">
      <div className="final-cta__inner">
        <div className="final-cta__content">
          <h2>Take the full advantage of<br />going paper-less now.</h2>
          <p>CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations</p>
        </div>
        <div className="final-cta__actions">
          <a href="#contact" className="btn btn-outline">CONTACT US</a>
          <a href="#demo" className="btn btn-primary">REQUEST DEMO</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
