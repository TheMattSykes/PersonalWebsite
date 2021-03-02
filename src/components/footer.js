import React from 'react';
import footerStyles from './footer.module.scss';

function Footer() {
  return(
    <footer className={footerStyles.footer}>
      <p>© Matt Sykes 2021, all rights reserved.</p>
    </footer>
  );
}

export default Footer;