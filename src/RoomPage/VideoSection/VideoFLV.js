import React from 'react';
import flvjs from 'flv.js'
import Plyr from 'plyr';
import { server_docker } from '../../utils/server_domain';

export const VideoFLV = ({ roomId, resolutions }) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);

  // eslint-disable-next-line no-unused-vars
  React.useEffect(() => {
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
      const videoElement = document.createElement("video");

      // videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      if (flvjs.isSupported()) {
        setTimeout(() => {
          playerRef.current = flvjs.createPlayer({
            type: 'flv',
            url: `${server_docker}live/${roomId}_${180}.flv`
          }, {
            enableWorker: false,
            lazyLoadMaxDuration: 3 * 60,
            seekType: 'range',
        });
          let flvPlayer = playerRef.current
  
          flvPlayer.attachMediaElement(videoElement);
          flvPlayer.load();
          const availableQualities = resolutions
          const defaultOptions = {};
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
          flvPlayer = null
        }, 3000)

        function updateQuality(newQuality) {
          let obj = {
            type: 'flv',
            url: `${server_docker}live/${roomId}${newQuality === resolutions[resolutions.length - 1] ? '' : '_' + newQuality}.flv`
          }
          if (playerRef.current) {
          playerRef.current.pause();
          playerRef.current.unload();
          playerRef.current.detachMediaElement();
          playerRef.current.destroy();
          playerRef.current = null 
          }
          playerRef.current = flvjs.createPlayer(obj, {
            enableWorker: false,
            lazyLoadMaxDuration: 3 * 60,
            seekType: 'range',
        });
          playerRef.current.attachMediaElement(videoElement);
          playerRef.current.load();
          playerRef.current.play();
        }
      }
      else {

      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div ref={videoRef} className='video_container' />
  );
}


export default VideoFLV;