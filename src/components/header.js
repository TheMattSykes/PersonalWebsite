import React from 'react';
import {Link} from 'gatsby';
import headerStyles from './header.module.scss';

function Header() {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/"><img id={headerStyles.mainLogo} src={'/images/m-logo-white.svg'} alt="Main Website Logo"/></Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;