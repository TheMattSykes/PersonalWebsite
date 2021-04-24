import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import '../styles/university.scss';

function UniversityPage() {
  return (
    <Layout>
      <main className="page-main">
        <h1 className="page-title-center">University</h1>
        <p className="uni-desc">MComp Computer Science - University of Sheffield</p>

        <section className="year-links">
          <Link to="/first-year" className="year-link">
            <h2 className="year-link-number">1</h2>
            <p className="year-link-title">First Year</p>
          </Link>

          <Link to="/second-year" className="year-link">
            <h2 className="year-link-number">2</h2>
            <p className="year-link-title">Second Year</p>
          </Link>

          <Link to="/third-year" className="year-link">
            <h2 className="year-link-number">3</h2>
            <p className="year-link-title">Third Year</p>
          </Link>

          <Link to="/fourth-year" className="year-link">
            <h2 className="year-link-number">4</h2>
            <p className="year-link-title">Fourth Year</p>
          </Link>

          <Link to="/modules" className="year-link module-link">
            <h2 className="year-link-number">M</h2>
            <p className="year-link-title">Module Results</p>
          </Link>
        </section>
      </main>
    </Layout>
  );
}

export default UniversityPage;