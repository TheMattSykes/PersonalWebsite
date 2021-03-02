import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import ProjectButtons from '../components/projectbuttons';

function ProjectsPage() {
  return (
    <Layout>
      <main className="page-main">
        <h1 className="page-title-center">Personal Projects</h1>

        <div className="block"></div>

        <section className="section-light">
            <h2 className="subtitle-center">Pokémon Society Sheffield Website</h2>
            <p className="project-description">
                A website designed to inform students about the Sheffield Pokémon Society. This is built using a custom PHP
                WordPress theme and a MySQL database. The site includes news and event pages which are dynamically updated
                by WordPress.
            </p>
            <div className="projectImgWrapper">
                <img className="projectImg" src="images/pokesocsheffieldwebsite.png" alt="Image of pie project website 'The Grain Sheff' 
                with navigation menu, testimonial and images of pies."/>
            </div>
            <ProjectButtons projecturl="https://pokemon-soc.union.shef.ac.uk/" projectEnable={true}/>
        </section>
      </main>
    </Layout>
  );
}

export default ProjectsPage;