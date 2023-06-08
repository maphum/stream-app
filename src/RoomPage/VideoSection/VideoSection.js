import React from "react";
import VideoButtons from "./VideoButtons";
// import VideoJS from './VideoJS'
import VideoJS2 from "./VideoJS2";
const VideoSection = () => {

    return <div className="video_section_container">
        {/* <VideoJS/> */}
        <VideoJS2 />
        <VideoButtons />
    </div>
}

export default VideoSection;