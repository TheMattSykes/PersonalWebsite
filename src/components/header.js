import React, {useState} from 'react';
import {Link} from 'gatsby';
import headerStyles from './header.module.scss';

function Header() {
  const [navVisible, setNavVisible] = useState(false);

  function switchNav() {
    setNavVisible(!navVisible);
  }

  return (
    <header className={navVisible ? headerStyles.openHeader : headerStyles.header}>
      <div className={headerStyles.mainLogoWrapper}>
      <Link to="/">
        <img id={navVisible ? headerStyles.mainLogoOpenNav : headerStyles.mainLogo} src={'/images/m-logo-white.svg'} alt="Main Website Logo"/>
      </Link>
      </div>

      <nav className={navVisible ? headerStyles.openNav : headerStyles.closedNav}>
        <ul className={headerStyles.navList}>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/university">University</Link></li>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">Projects</Link></li>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/music">Music</Link></li>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <button className={headerStyles.navIcon} onClick={() => switchNav()}>Click</button>
    </header>
  );
}

export default Header;