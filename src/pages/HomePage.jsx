import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { highlights } from '../data/content';

function HomePage() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">Procurement Market Research</p>
          <h1>Confidence for every sourcing decision.</h1>
          <p>
            We help procurement teams reduce uncertainty with actionable market
            intelligence, supplier analysis, and category-specific benchmarks.
          </p>
          <Link className="button" to="/contact">
            Speak with an analyst
          </Link>
        </div>
      </section>

      <section className="section container">
        <h2>Why procurement leaders choose us</h2>
        <div className="card-grid three-col">
          {highlights.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-content">
          <h2>Need sharper market visibility this quarter?</h2>
          <p>
            Book a short discovery call and we&apos;ll map the right research scope
            for your category priorities.
          </p>
          <Link className="button button-light" to="/contact">
            Get started
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
