import React from 'react';
// import videojs from 'video.js';
import 'video.js/dist/video-js.css';
// import flvjs from 'flv.js'
// import Plyr from 'plyr';
import { connect } from 'react-redux';
// import { server_docker } from '../../utils/server_domain';
import VideoFLV from './VideoFLV';
export const VideoJS2 = ({ resolutions, roomId }) => {
  // const videoRef = React.useRef(null);
  // const playerRef = React.useRef(null);
  // const [qualites] = React.useState([180, 360, 720]);
  // // eslint-disable-next-line no-unused-vars
  // React.useEffect(() => {
  //   console.log(roomId);
  //   // Make sure Video.js player is only initialized once
  //   if (!playerRef.current && link) {
  //     // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
  //     const videoElement = document.createElement("video");

  //     // videoElement.classList.add('vjs-big-play-centered');
  //     videoRef.current.appendChild(videoElement);

  //     if (flvjs.isSupported()) {
  //       setTimeout(() => {
  //         var flvPlayer = flvjs.createPlayer({
  //           type: 'flv',
  //           url: `${server_docker}live/${roomId}_${180}.flv`
  //         });
  //         flvPlayer.attachMediaElement(videoElement);
  //         flvPlayer.load();
  //         flvPlayer.play();
  //         const availableQualities = qualites
  //         const defaultOptions = {};
  //         defaultOptions.controls = [
  //           'restart', // Restart playback
  //           // 'rewind', // Rewind by the seek time (default 10 seconds)
  //           'play', // Play/pause playback
  //           'fast-forward', // Fast forward by the seek time (default 10 seconds)
  //           'progress', // The progress bar and scrubber for playback and buffering
  //           'current-time', // The current time of playback
  //           'duration', // The full duration of the media
  //           'mute', // Toggle mute
  //           'volume', // Volume control
  //           'captions', // Toggle captions
  //           'settings', // Settings menu
  //           'pip', // Picture-in-picture (currently Safari only)
  //           'airplay', // Airplay (currently Safari only)
  //           'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
  //           'fullscreen', // Toggle fullscreen
  //         ];
  //         defaultOptions.autoplay = true; 
  //         defaultOptions.quality = {
  //           default: availableQualities[0],
  //           options: availableQualities, 
  //           forced: true,
  //           onChange: e => updateQuality(e)
  //         }
  //         new Plyr(videoElement, defaultOptions)
  //       }, 3000)
  //       function updateQuality  (newQuality) {
  //         let obj = {
  //           type: 'flv',
  //           url: `${server_docker}live/${roomId}_${newQuality}.flv`
  //         }
  //         const flvPlayer = flvjs.createPlayer(obj)
  //         flvPlayer.attachMediaElement(videoElement);
  //         flvPlayer.load();
  //         flvPlayer.play();
  //       }
  //     }


  //     // You could update an existing player in the `else` block here
  //     // on prop change, for example:
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [link]);


  return (
    <div>
      {
       resolutions && resolutions.length !== 0  && roomId && 
       <VideoFLV roomId={roomId} resolutions={resolutions}/> 
      }
    </div>
  );
}
const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};



export default connect(mapStoreStateToProps)(VideoJS2);