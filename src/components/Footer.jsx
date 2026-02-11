import { NavLink } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <h3>Procura Insights</h3>
          <p>
            Data-driven procurement market research that strengthens sourcing
            confidence.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="footer-meta">
        © {new Date().getFullYear()} Procura Insights. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
