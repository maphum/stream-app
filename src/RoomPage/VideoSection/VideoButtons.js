import React from "react";
import MicButton from "./MicButton";
import CameraButton from "./CameraButton";
import SwitchToScreenShareButton from "./SwitchToScreenShareButton";
import LeaveRoomButton from "./LeaveRoomButton";

const VideoButtons = () => {
    return (
        <div className="video_buttons_container">
            <MicButton />
            <CameraButton />
            <SwitchToScreenShareButton />
            <LeaveRoomButton />
        </div>
    )
}

export default VideoButtons;