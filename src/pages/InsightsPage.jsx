import { briefs } from '../data/content';

function InsightsPage() {
  return (
    <section className="section container">
      <p className="eyebrow">Insights</p>
      <h1>Recent research briefs</h1>
      <p className="intro">
        Explore examples of procurement research topics we deliver for clients.
      </p>

      <div className="brief-list" role="list">
        {briefs.map((brief) => (
          <article className="brief-item" key={brief.title} role="listitem">
            <h3>{brief.title}</h3>
            <p>
              <span>{brief.type}</span> · <span>{brief.date}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default InsightsPage;
