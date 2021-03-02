import React from 'react';
import Layout from '../components/layout';

function ContactPage() {
  return (
    <Layout>
      <main className="page-main">
        <h1 className="textcenter">Contact</h1>
        <p className="textcenter">LinkedIn: <a href="https://linkedin.com/in/themattsykes" target="_blank" rel="noreferrer">@TheMattSykes</a></p>
        <p className="textcenter">Twitter: <a href="https://twitter.com/themattsykes" target="_blank" rel="noreferrer">@TheMattSykes</a></p>
        <p className="textcenter">Contact form currently in development.</p>
        <p className="contactinfo textcenter">Professional and career related enquiries only.</p>
        <p className="contactinfo textcenter">Unless otherwise noted, all content on this website, including graphics,
        screen shots, music, logos and other files, is the property of Matthew Sykes and is protected by United Kingdom
        and international copyrights. The logos/names of other companies and products mentioned on this site are copyright
        and/or trademarks of their respective owners.</p>
      </main>
    </Layout>
  );
}

export default ContactPage;