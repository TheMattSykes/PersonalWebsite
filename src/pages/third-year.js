import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import '../styles/years.scss';

function ThirdYearPage() {
  return (
    <Layout>
      <main className="page-main">
        <h1 className="page-title-center">Third Year</h1>

        <p className="center-block">Overall Year Grade: 2.1 (67.8%)</p>

        <section className="section-light">
            <h2 className="subtitle-center">Dissertation Project (Hustings)</h2>
            <img className="hustings-logo" src="images/HustingsLogoGreen.png" alt="COM3420 project dashboard with three menu 
            items and a titlebar."/>
            <p className="project-description">
                An iOS application designed to teach beginners politics. The application was developed using SwiftUI and is
                compatible with iOS, iPadOS and macOS through Project Catalyst. Hustings enables students to view a range of
                text based lessons on various political topics, followed up by a quiz testing their knowledge. Students are
                able to join a class so that teachers can view their progress. Debates can also be held in classes with
                debate sides allocated randomly to prevent bias. The database is managed using NoSQL on Firebase.
            </p>
            <div className="projectImgWrapper">
                <img className="projectImg-narrow" src="images/com3610screenshot.png" alt="Learn menu where students can view
                a list of topics."/>
                <img className="projectImg-narrow" src="images/com3610screenshot2.png" alt="Student dashboard overviewing
                progress."/>
            </div>
        </section>

        <section className="section-dark">
            <h2 className="subtitle-center">3D Graphics Snowman</h2>
            <p className="project-description">
                An animated snowman scene developed in OpenGL using Java. There are multiple buttons that allow the user to
                interact with the scene and modify the effects.
            </p>
            <div className="projectImgWrapper">
                <img className="projectImg" src="images/com3503screenshot.jpg" alt="Smowman scene in OpenGL"/>
            </div>
        </section>

      </main>
    </Layout>
  );
}

export default ThirdYearPage;