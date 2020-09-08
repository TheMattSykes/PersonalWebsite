import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import '../styles/index.scss';

function IndexPage() {
  return (
    <Layout>
      <div class="welcome-area">
        <img src={'/images/background.png'} className="background" alt="Background image."></img>
        <div>
          <img src={'/images/full-logo-white.svg'} className="background-logo"/>
          <p className="welcome-desc">Full-Stack Web and iOS Developer</p>
          <div class="social-icons">
            <a href=""><img src={'/images/twitter-round-icon.svg'} alt="Twitter social link." className="social-icon"/></a>
            <a href=""><img src={'/images/github-round-icon.png'} alt="Github social link." className="social-icon"/></a>
            <a href=""><img src={'/images/linkedin-icon.png'} alt="LinkedIn social link." className="social-icon"/></a>
          </div>
        </div>
      </div>
      <h1>Hello</h1>
      <h2>Description</h2>
      <p>Need a developer? <Link to="contact">Contact me</Link></p>
    </Layout>
  );
}

export default IndexPage;
