import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Programming from '../components/programming';
import '../styles/index.scss';
import '../styles/scroll.scss';

function IndexPage() {
  return (
    <Layout>

      <div className="welcome-area">
        <img src={'/images/background.png'} className="background" alt="Background."></img>
        <div className="welcome-info">
          <img src={'/images/full-logo-white.svg'} className="background-logo" alt="Main Logo (Non-link)"/>
          <p className="welcome-desc">Full-Stack Web and iOS Developer</p>
          <div className="social-icons">
            <a href=""><img src={'/images/twitter-round-icon.svg'} alt="Twitter social link." className="social-icon"/></a>
            <a href=""><img src={'/images/github-round-icon.png'} alt="Github social link." className="social-icon"/></a>
            <a href=""><img src={'/images/linkedin-icon.png'} alt="LinkedIn social link." className="social-icon"/></a>
          </div>
          <div className="container">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
          </div>
        </div>
      </div>

      <main className="main-index">
        <h1 className="index-title">About me</h1>
        <p>
          I'm Matt, a fourth year Computer Science integrated masters student at the University of Sheffield. Throughtout my degree 
          I've learned and developed my knowledge in software engineering practices as well as the theoretical aspects of computing.
          From the team based projects developing software in Ruby on Rails to Data Driven Computing and 3D Computer Graphics.
        </p>
        <p>
          My main areas of interest are full stack web development and iOS development; for my dissertation I designed an application
          for iOS/iPadOS/macOS designed to teach politics to beginners using swiftUI.
        </p>
        <p>
          I'm also the current President and Webmaster of Sheffield Pokémon Society which runs weekly (online) socials and regular 
          tournaments. As I have an interest in politics, I'm the Secretary and Publicity Officer of Sheffield Young Liberals. For
          both of these societies I enjoy designing graphics and editing videos to engage with our memebers.
        </p>
        <p>
          In my spare time I'm a keen keyboard/piano player and composer for my channel Neutrino Audio using Logic Pro. I'm also
          learning the violin and ocarina.
        </p>
      </main>

      <section className="programming-section">
        <h2>Programming</h2>
        <Programming className="programming" name="Java" amount="85"/>
        <Programming className="programming" name="Swift" amount="85"/>
        <Programming className="programming" name="HTML/CSS" amount="85"/>
        <Programming className="programming" name="C#" amount="75"/>
        <Programming className="programming" name="JavaScript/JSX" amount="70"/>
        <Programming className="programming" name="C/C++" amount="55"/>
        <Programming className="programming" name="Python" amount="55"/>
        <Programming className="programming" name="Ruby" amount="50"/>
      </section>

    </Layout>
  );
}

export default IndexPage;
