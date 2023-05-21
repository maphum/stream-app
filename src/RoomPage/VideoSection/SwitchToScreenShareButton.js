import React from "react";
import ScreenShareButtonImg from '../../resources/images/switchToScreenSharing.svg'

const SwitchToScreenShareButton = () => {
    const handleCameraButtonClick = () => {
    }

    return <div className="video_button_container">
        <img alt="" src={ScreenShareButtonImg}
            onClick={handleCameraButtonClick}
            className="video_button_image"/>
    </div>
}

export default SwitchToScreenShareButton