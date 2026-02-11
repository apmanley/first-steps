import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
];

function NavBar() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <NavLink to="/" className="brand" end>
          Procura Insights
        </NavLink>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`.trim()
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
