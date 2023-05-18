import React from "react";
import CheckImg from "../resources/images/check.png";

const OnlyWithAudioCheckbox = ({
    connectOnlyWithAudio,
    setConnectOnlyWithAudioAction,
}) => {
  const handleConnectionTypeChange = () => {
    setConnectOnlyWithAudioAction(!connectOnlyWithAudio);
  };

  return (
    <div className="checkbox_container">
      <div className="checkbox_connection" onClick={handleConnectionTypeChange}>
        {connectOnlyWithAudio && (
          <img alt="" className="checkbox_image" src={CheckImg}></img>
        )}
      </div>
      <p className="checkbox_container_paragraph">Only audio</p>
    </div>
  );
};

export default OnlyWithAudioCheckbox;
