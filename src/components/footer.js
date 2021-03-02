import React from 'react';
import footerStyles from './footer.module.scss';

function Footer() {
  return(
    <footer className={footerStyles.footer}>
      <p>Created by Matt Sykes, © 2021</p>
    </footer>
  );
}

export default Footer;