import React from 'react';
// import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'hls.js'
import Hls from 'hls.js';
import Plyr from 'plyr';
import { connect } from 'react-redux';
import { server_docker } from '../../utils/server_domain';
export const VideoJS = ({link, roomId}) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  // eslint-disable-next-line no-unused-vars
  React.useEffect(() => {
    console.log(link); 
    // Make sure Video.js player is only initialized once
    if (!playerRef.current && link) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
      const videoElement = document.createElement("video");

      // videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const defaultOptions = {};
      const options = {
        manifestLoadingMaxRetry: 10,
        manifestLoadingRetryDelay: 3000,
        manifestLoadingMaxRetryTimeout: 64000,
        startLevel: undefined,
        levelLoadingTimeOut: 30000,
        levelLoadingMaxRetry: 10,
        levelLoadingRetryDelay: 3000,
        levelLoadingMaxRetryTimeout: 64000,
        fragLoadingTimeOut: 20000,
        fragLoadingMaxRetry: 10,
        fragLoadingRetryDelay: 2000,
        fragLoadingMaxRetryTimeout: 64000,
      }
      if (Hls.isSupported() && link){ 
        setTimeout(() => {
          const _link = server_docker + roomId + '.m3u8'; 
          const hls = new Hls(options);
          hls.loadSource(_link)
          hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
            const availableQualities = hls.levels.map(l => l.height);
            defaultOptions.controls = [
              'restart', // Restart playback
              // 'rewind', // Rewind by the seek time (default 10 seconds)
              'play', // Play/pause playback
              'fast-forward', // Fast forward by the seek time (default 10 seconds)
              'progress', // The progress bar and scrubber for playback and buffering
              'current-time', // The current time of playback
              'duration', // The full duration of the media
              'mute', // Toggle mute
              'volume', // Volume control
              'captions', // Toggle captions
              'settings', // Settings menu
              'pip', // Picture-in-picture (currently Safari only)
              'airplay', // Airplay (currently Safari only)
              'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
              'fullscreen', // Toggle fullscreen
            ];
            defaultOptions.autoplay = true; 
            defaultOptions.quality = {
              default: availableQualities[0],
              options: availableQualities, 
              forced: true,
              onChange: e => updateQuality(e)
            }
            new Plyr(videoElement, defaultOptions)
          });
          hls.attachMedia(videoElement);
          window.hls = hls; 
        }, 5000)
      }
      function updateQuality(newQuality) {
        window.hls.levels.forEach((level, levelIndex) => {
          if (level.height === newQuality) {
            window.hls.currentLevel = levelIndex
          }
        })
      }

    // You could update an existing player in the `else` block here
    // on prop change, for example:
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link]);


  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
}
const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};



export default connect(mapStoreStateToProps)(VideoJS);