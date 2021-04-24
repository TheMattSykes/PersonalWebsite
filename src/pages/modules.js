import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import '../styles/university.scss';

function ModulesPage() {
  return (
    <Layout>
      <main className="page-main">
        <h1 className="page-title-center">Module Results</h1>
        <p className="uni-desc">MComp Computer Science - University of Sheffield</p>

        <h2 className="year-title">Fourth Year</h2>
        <table className="modules-table">
          <tr>
            <th>Module Code</th>
            <th>Module Name</th>
            <th>Module Result</th>
          </tr>
          <tr>
            <td>COM4502</td>
            <td>Speech Processing</td>
            <td><p className="grade grade-two-one">2.1</p></td>
          </tr>
          <tr>
            <td>COM4506</td>
            <td>Testing and Verification in Safety-Critical Systems</td>
            <td><p className="grade grade-two-one">2.1</p></td>
          </tr>
          <tr>
            <td>COM4510</td>
            <td>Software Development for Mobile Devices</td>
            <td><p className="grade grade-two-one">2.1</p></td>
          </tr>
          <tr>
            <td>COM4511</td>
            <td>Speech Technology</td>
            <td><p className="grade">Pend.</p></td>
          </tr>
          <tr>
            <td>COM4521</td>
            <td>Parallel Computing with GPUs</td>
            <td><p className="grade">Pend.</p></td>
          </tr>
          <tr>
            <td>COM4525</td>
            <td>Genesys</td>
            <td><p className="grade">Pend.</p></td>
          </tr>
        </table>

        <h2 className="year-title">Third Year</h2>
        <table className="modules-table">
          <tr>
            <th>Module Code</th>
            <th>Module Name</th>
            <th>Module Result</th>
          </tr>
          <tr>
            <td>COM3501</td>
            <td>Computer Security and Forensics</td>
            <td><p className="grade grade-first">First</p></td>
          </tr>
          <tr>
            <td>COM3503</td>
            <td>3D Computer Graphics</td>
            <td><p className="grade grade-two-one">2.1</p></td>
          </tr>
          <tr>
            <td>COM3504</td>
            <td>The Intelligent Web</td>
            <td><p className="grade grade-two-one">2.1</p></td>
          </tr>
          <tr>
            <td>COM3505</td>
            <td>The Internet of Things</td>
            <td><p className="grade grade-two-one">2.1</p></td>
          </tr>
          <tr>
            <td>COM3523</td>
            <td>Software Reengineering</td>
            <td><p className="grade grade-first">First</p></td>
          </tr>
          <tr>
            <td>COM3610</td>
            <td>Dissertation Project</td>
            <td><p className="grade grade-first">First</p></td>
          </tr>
          <tr>
            <td>MGT388</td>
            <td>Finance and Law for Engineers</td>
            <td><p className="grade grade-two-one">2.1</p></td>
          </tr>
          <tr>
            <td>MUS355</td>
            <td>Creative Applications of Music Technology</td>
            <td><p className="grade grade-two-one">2.1</p></td>
          </tr>
        </table>

        <h2 className="year-title">Second Year</h2>
        <table className="modules-table">
          <tr>
            <th>Module Code</th>
            <th>Module Name</th>
            <th>Module Result</th>
          </tr>
          <tr>
            <td>COM2004</td>
            <td>Data Driven Computing</td>
            <td><p className="grade grade-two-two">2.2</p></td>
          </tr>
          <tr>
            <td>COM2008</td>
            <td>Systems Design and Security</td>
            <td><p className="grade grade-two-one">2.1</p></td>
          </tr>
          <tr>
            <td>COM2009</td>
            <td>Human-Machine Interaction and Robotics</td>
            <td><p className="grade grade-two-two">2.2</p></td>
          </tr>
          <tr>
            <td>COM2107</td>
            <td>Logic in Computer Science</td>
            <td><p className="grade grade-pass">Pass</p></td>
          </tr>
          <tr>
            <td>COM2108</td>
            <td>Functional Programming</td>
            <td><p className="grade grade-two-one">2.1</p></td>
          </tr>
          <tr>
            <td>COM2109</td>
            <td>Automata, Computation and Complexity</td>
            <td><p className="grade grade-two-two">2.2</p></td>
          </tr>
          <tr>
            <td>COM3420</td>
            <td>Software Hut</td>
            <td><p className="grade grade-first">First</p></td>
          </tr>
          <tr>
            <td>FCE2001</td>
            <td>Engineering - You're Hired!</td>
            <td><p className="grade grade-pass">Pass</p></td>
          </tr>
        </table>

        <h2 className="year-title">First Year</h2>
        <table className="modules-table">
          <tr>
            <th>Module Code</th>
            <th>Module Name</th>
            <th>Module Result</th>
          </tr>
          <tr>
            <td>COM1001</td>
            <td>Introduction to Software Engineering</td>
            <td><p className="grade grade-two-one">2.1</p></td>
          </tr>
          <tr>
            <td>COM1002</td>
            <td>Foundations of Computer Science</td>
            <td><p className="grade grade-two-two">2.2</p></td>
          </tr>
          <tr>
            <td>COM1003</td>
            <td>Java Programming</td>
            <td><p className="grade grade-first">First</p></td>
          </tr>
          <tr>
            <td>COM1005</td>
            <td>Machines and Intelligence</td>
            <td><p className="grade grade-two-two">2.2</p></td>
          </tr>
          <tr>
            <td>COM1006</td>
            <td>Devices and Networks</td>
            <td><p className="grade grade-two-one">2.1</p></td>
          </tr>
          <tr>
            <td>COM1008</td>
            <td>Web and Internet Technology</td>
            <td><p className="grade grade-first">First</p></td>
          </tr>
          <tr>
            <td>COM1009</td>
            <td>Introduction to Algorithms and Data Structures</td>
            <td><p className="grade grade-two-one">2.1</p></td>
          </tr>
          <tr>
            <td>FCE1001</td>
            <td>Global Engineering Challenge</td>
            <td><p className="grade grade-first">Dist.</p></td>
          </tr>
        </table>

      </main>
    </Layout>
  );
}

export default ModulesPage;