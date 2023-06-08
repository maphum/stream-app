import React, {useState}  from "react";
import CameraButtonImg from '../../resources/images/camera.svg'
import CameraButtonImgOff from '../../resources/images/cameraOff.svg'
import * as webRTCHandler from '../../utils/webRTCHandler'

const CameraButton = () => {
    const [isCameraOff, setIsCameraOff] = useState(false);
    const handleCameraButtonClick = () => { 
        webRTCHandler.toggleCamera(isCameraOff);
        setIsCameraOff(!isCameraOff)
    }

    return <div className="video_button_container">
        <img alt="" src={isCameraOff ? CameraButtonImgOff : CameraButtonImg}
            onClick={handleCameraButtonClick}
            className="video_button_image"/>
    </div>
}
export default CameraButton;