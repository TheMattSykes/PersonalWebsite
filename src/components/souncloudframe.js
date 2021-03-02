import React from 'react';

class SoundCloudFrame extends React.Component {
  render () {
    var src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/840087736&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";

    return (
      <iframe
        scrolling = "no"
        frameBorder = "no"
        autoPlay = "no"
        src = { src }
        className = "soundcloudwrapper"
      />
    );
  }
}

export default SoundCloudFrame;