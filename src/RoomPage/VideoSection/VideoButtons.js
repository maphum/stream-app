import React from "react";
import SwitchToScreenShareButton from "./SwitchToScreenShareButton";
import LeaveRoomButton from "./LeaveRoomButton";
import { connect } from "react-redux";

const VideoButtons = ({isRoomHost}) => {
    return (
        <div className="video_buttons_container">
            {
    isRoomHost &&            
    <SwitchToScreenShareButton />

            }

            <LeaveRoomButton />
        </div>
    )
}

const mapStoreStateToProps = (state) => {
    return {
      ...state,
    };
};

export default connect(mapStoreStateToProps)(VideoButtons);