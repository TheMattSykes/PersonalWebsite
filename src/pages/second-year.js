import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import '../styles/years.scss';

function SecondYearPage() {
  return (
    <Layout>
      <main className="page-main">
        <h1 className="page-title-center">Second Year</h1>

        <p className="center-block">Overall Year Grade: 2.1 (61.5%)</p>

        <div className="block"></div>

        <section className="section-light">
            <h2 className="subtitle-center">Software Hut</h2>
            <p className="project-description">
                In a team of five I helped develop a Ruby on Rails web app for a university client. This application was designed
                to allow students to view and select their departmental supervisor as well as view their marks and feedback.
                Supervisors were able to log into the application and either manually or automatically allocate students to their
                supervisors and export the selections to a csv file.
            </p>
            <div className="projectImgWrapper">
                <img className="projectImg" src="images/com3420screenshot.png" alt="Image of com3420 project dashboard with 
                three menu items and a titlebar."/>
                <img className="projectImg" src="images/com3420screenshot2.png" alt="Image of com3420 project supervisor selection."/>
            </div>
        </section>

        <section className="section-dark">
            <h2 className="subtitle-center">Snowbelle University Java GUI</h2>
            <p className="project-description">
                A Java swing application for a fictional university built in a team of four. The project has a strong emphasis on
                security ensuring that passwords were hashed effectively. The system allows different user types from students to
                lecturers to enter the system. Students can view their marks and select modules, teachers can add results. The system
                automatically calculates a students final result from their module results.
            </p>
            <div className="projectImgWrapper">
                <img className="projectImg" src="images/com2008screenshot.png" alt="Image of log in screen."/>
                <img className="projectImg" src="images/com2008screenshot2.jpg" alt="Image module selection screen."/>
            </div>
        </section>

      </main>
    </Layout>
  );
}

export default SecondYearPage;