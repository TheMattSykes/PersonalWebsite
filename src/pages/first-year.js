import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import '../styles/years.scss';

function FirstYearPage() {
  return (
    <Layout>
      <main className="page-main">
        <h1 className="page-title-center">First Year</h1>

        <p>Overall Year Grade: 2.1 (63.5%)</p>
        <section className="section-light">
            <h2>COM1001: Introduction to Software Engineering</h2>
            <p>
                This module provided an introduction to web development in Ruby. The start of this module provided a basic overview
                of the Ruby language which was followed by an assignment to correct errors and enhance a Ruby pinball game.
            </p>
            <p>
                For spring semsester, in teams of five we developed a web app which featured an order system for a hypothetical 
                pie baking company, users could sign in through Twitter authentication and view the status of their order. 
                The application would list orders made via Twitter through the company handle, the order could then manually be 
                processed by an adminisrator.
            </p>
            <p className="grade">
                Grade: 2.1
            </p>
            
        </section>

        <section className="section-dark">
            <h2>COM1002: Foundations of Computer Science</h2>
            <p>
                Foundations in Computer Science provided an introduction and overview into discrete mathematics including
                matricies, logic, modulo arithmetic and probability.
            </p>
            <p>
                This module was assessed via an exam, problem sheets and online tests.
            </p>
            <p className="grade">
                Grade: 2.2
            </p>
            
        </section>

        <section className="section-dark">
            <h2>COM1003: Java Programming</h2>
            <p>
                Foundations in Computer Science provided an introduction and overview into discrete mathematics including
                matricies, logic, modulo arithmetic and probability.
            </p>
            <p>
                This module was assessed via an exam, problem sheets and online tests.
            </p>
            <p className="grade">
                Grade: 1st
            </p>
            
        </section>
      </main>
    </Layout>
  );
}

export default FirstYearPage;