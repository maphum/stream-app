import React, {useEffect} from "react";
import './RoomPage.css';
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import ChatSection from "./ChatSection/ChatSection";
import * as webRTCHandler from '../utils/webRTCHandler';
import { connect } from 'react-redux';
import Overlay from "./Overlay";
import { useLocation, useNavigate } from "react-router-dom";
import { setShowOverlay } from "../store/actions";
const RoomPage = ({roomId, identity, isRoomHost, showOverlay, setShowOverlayAction}) => {
    const navigate = useNavigate();
    const search = useLocation().search;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (identity === "") {
        const roomId = new URLSearchParams(search).get('roomId');
        if (roomId) {
            navigate(`/join-room?roomId=${roomId}`);
        }
        else {
            navigate(`/`);
        }
      }
      else webRTCHandler.getLocalPreviewAndInitRoomConnection(isRoomHost, identity, roomId);
        // eslint-disable-next-line
    }, []) 
    useEffect(() => {
      // Update the URL when the roomId prop changes
      if (roomId) window.history.pushState({}, '', `/room/?roomId=${roomId}`);
    }, [roomId]);
    if (identity === "") return <div></div>
    return <div className="room_container">
        <ParticipantsSection />
        <VideoSection/>
        <ChatSection />
        {isRoomHost && showOverlay && <Overlay setShowOverLay={setShowOverlayAction} roomId={roomId}/>}
    </div>;
}

const mapStoreStateToProps = (state) => {
    return {
      ...state,
    };
  };

const mapActionsToProps = (dispatch) => {
    return {
        setShowOverlayAction: (showOverlay) => dispatch(setShowOverlay(showOverlay))
    }
}
  
export default  connect(mapStoreStateToProps, mapActionsToProps)(RoomPage);
