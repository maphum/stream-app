import React, {useEffect} from "react";
import './RoomPage.css';
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import ChatSection from "./ChatSection/ChatSection";
import * as webRTCHandler from '../utils/webRTCHandler';
import { connect } from 'react-redux';
import Overlay from "./Overlay";

const RoomPage = ({roomId, identity, isRoomHost, showOverlay}) => {
    
    useEffect(() => {
        webRTCHandler.getLocalPreviewAndInitRoomConnection(isRoomHost, identity, roomId);
        // eslint-disable-next-line
    }, []) 

    return <div className="room_container">
        <ParticipantsSection />
        <VideoSection/>
        <ChatSection />
        {showOverlay && <Overlay />}
    </div>;
}

const mapStoreStateToProps = (state) => {
    return {
      ...state,
    };
  };
  
export default  connect(mapStoreStateToProps)(RoomPage);
