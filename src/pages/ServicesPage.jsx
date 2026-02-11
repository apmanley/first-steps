import Card from '../components/Card';
import { services } from '../data/content';

function ServicesPage() {
  return (
    <section className="section container">
      <p className="eyebrow">Services</p>
      <h1>Core research services for strategic procurement</h1>
      <p className="intro">
        Our analysts combine market data, supplier intelligence, and category
        expertise to support sourcing teams from planning through execution.
      </p>
      <div className="card-grid two-col">
        {services.map((service) => (
          <Card key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesPage;
