import React from "react";
import setting from '../../resources/images/setting.svg';
import { connect } from 'react-redux';
import { setShowOverlay } from "../../store/actions";
const SwitchToScreenShareButton = ({setShowOverlayAction}) => {
    const handleSetting = () => {
        setShowOverlayAction(true);
    }
    return <>
        <div className="video_button_container">
        <img alt="" src={setting}
            onClick={handleSetting}
            className="video_button_image"/>
        </div>
    </>

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

export default connect(mapStoreStateToProps, mapActionsToProps)(SwitchToScreenShareButton)