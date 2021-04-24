import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import SoundCloudFrame from '../components/souncloudframe';
import '../styles/music.scss';

function MusicPage() {
  return (
    <Layout>
      <main className="page-main">
        <h1 className="page-title-center">Music</h1>

        <div className="block"></div>

        <img src="/images/neutrinoaudiologo.png" className="neutrinoaudiologo" alt="Neutrino Audio Logo"/>

        <SoundCloudFrame />

        <div className="textcenter">
          <a className="button" href="https://soundcloud.com/neutrinoaudio">Visit SoundCloud</a>
        </div>
        
        <div className="block"></div>

        <h2 className="textcenter instrumentstitle">Instruments</h2>
        <div className="instruments">
          <div className="instrument">
            <img src="/images/iconpiano.png" className="instrumenticon" alt="Piano Icon"/>
            <p className="instrumentname">Piano</p>
            <p className="instrumentgrade"></p>
          </div>

          <div className="instrument">
            <img src="/images/iconkeyboard.png" className="instrumenticon" alt="Piano Icon"/>
            <p className="instrumentname">Electronic Keyboard</p>
            <p className="instrumentgrade">Grade 6 (Trinity)</p>
          </div>

          <div className="instrument">
            <img src="/images/iconviolin.png" className="instrumenticon" alt="Piano Icon"/>
            <p className="instrumentname">Violin</p>
            <p className="instrumentgrade">Grade 1 (Trinity)</p>
          </div>

          <div className="instrument">
            <img src="/images/iconrecorder.png" className="instrumenticon" alt="Piano Icon"/>
            <p className="instrumentname">Recorder</p>
            <p className="instrumentgrade"></p>
          </div>
        </div>

        <p className="textcenter icons8">Instrument icons from <a href="https://icons8.com">Icons8</a></p>

      </main>
    </Layout>
  );
}

export default MusicPage;