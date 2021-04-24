import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import '../styles/years.scss';

function FirstYearPage() {
  return (
    <Layout>
      <main className="page-main">
        <h1 className="page-title-center">First Year</h1>

        <p className="page-title-center">Overall Year Grade: 2.1 (63.5%)</p>

        <section className="section-light">
            <h2 className="subtitle-center">Pie Project</h2>
            <p className="project-description">
                In a team of five I helped develop a web app which featured an order system for a hypothetical 
                pie baking company, users could sign in through Twitter authentication and view the status of their order. 
                The application would list orders made via Twitter through the company handle, the order could then manually be 
                processed by an adminisrator.
            </p>
            <div className="projectImgWrapper">
                <img className="projectImg" src="images/com1001screenshot.jpg" alt="Pie project website 'The Grain Sheff' 
                with navigation menu, testimonial and images of pies."/>
            </div>
        </section>

        <section className="section-dark">
            <h2 className="subtitle-center">Diamond Website</h2>
            <p className="project-description">
                A static website built using HTML and CSS as a guide to the diamond.
            </p>
            <div className="projectImgWrapper">
                <img className="projectImg" src="images/com1008screenshot.jpg" alt="Diamond website."/>
            </div>
        </section>

        <section className="section-light">
            <h2 className="subtitle-center">Chess Project</h2>
            <p className="project-description">
                For the second half of Java Programming we were asked to improve a skeleton code for a chess game and implement a GUI.
            </p>
            <div className="projectImgWrapper">
                <img className="projectImg" src="images/com1003screenshot.png" alt="Chess board in a default starting layout."/>
            </div>
        </section>

      </main>
    </Layout>
  );
}

export default FirstYearPage;