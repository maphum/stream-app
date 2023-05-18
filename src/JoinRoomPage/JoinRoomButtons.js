import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ cancelButton, buttonText, onClickHandler}) => {
    const buttonClass = cancelButton
    ? "join_room_cancel_button"
    : "join_room_success_button";
    return <button className={buttonClass} onClick={onClickHandler} >{buttonText}</button>
}

const JoinRoomButtons = ({ handleJoinRoom, isRoomHost }) => {
    const navigate = useNavigate();

    const pushToIntroductionPage = () => {
        navigate('/');
    }

    return (
        <div className="join_room_buttons_container">
            <Button buttonText={isRoomHost ? 'Host' : 'Join'} onClickHandler={handleJoinRoom} />
            <Button cancelButton={true} buttonText="Cancel" onClickHandler={pushToIntroductionPage}/>
        </div>
    );
}

export default JoinRoomButtons;