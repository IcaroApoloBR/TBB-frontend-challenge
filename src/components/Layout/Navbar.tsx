import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../../constants';
import menu from '../../assets/navbar/menu.svg';
import close from '../../assets/navbar/close.svg';
import logo from '../../assets/navbar/logo.png';
import '../../styles/layout.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="component">
        <Link to="/" className="links">
          <img src={logo} alt="Logo Challenge" />
        </Link>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="mobile">
          <img src={toggle ? close : menu} alt="Menu icon" className="icon" onClick={() => setToggle(!toggle)} />
          <div>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id} onClick={() => setToggle(!toggle)} >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar