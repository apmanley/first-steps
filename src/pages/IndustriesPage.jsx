import { industries } from '../data/content';

function IndustriesPage() {
  return (
    <section className="section container">
      <p className="eyebrow">Industries</p>
      <h1>Industry expertise across complex procurement environments</h1>
      <p className="intro">
        We support procurement organizations in highly regulated, rapidly
        evolving, and cost-sensitive markets.
      </p>

      <div className="industry-grid">
        {industries.map((industry) => (
          <article className="industry-tile" key={industry}>
            <h3>{industry}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default IndustriesPage;
