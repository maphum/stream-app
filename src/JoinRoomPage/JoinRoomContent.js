import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { setIsRoomHost, setConnectOnlyWithAudio, setIdentity, setRoomId } from "../store/actions";
import JoinRoomInputs from "./JoinRoomInput";
import OnlyWithAudioCheckbox from "./OnlyWithAudioCheckbox";
import ErrorMessage from "./ErrorMessage";
import JoinRoomButtons from "./JoinRoomButtons";
import { getRoomExist } from "../utils/api";
import { useNavigate } from "react-router-dom";

const JoinRoomContent = ({isRoomHost, setConnectOnlyWithAudioAction, connectOnlyWithAudio, setIdentityAction, setRoomIdAction}) => {
    const [roomIdValue, setRoomIdValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const handleJoinRoom = async (roomIdValue) => {
        setIdentityAction(nameValue);
        if (isRoomHost) {
            createRoom(); 
        }
        else {
            await joinRoom();
        }
    };
    const createRoom = () => {
        navigate('/room')
    }
    const joinRoom = async () => {
        const responseMessage = await getRoomExist(roomIdValue);
        const {roomExists, full} = responseMessage;
        if (roomExists) {
            if (full) {
                setErrorMessage("Room is full");
            }
            else {
                setRoomIdAction(roomIdValue);
                navigate(`/room`);
            }
        }
        else {
            setErrorMessage("Room does not exist, check room id again");
        }
    }

    return <>
        <JoinRoomInputs roomIdValue={roomIdValue} setRoomIdValue={setRoomIdValue} nameValue={nameValue} setNameValue={setNameValue} isRoomHost={isRoomHost} />
        <OnlyWithAudioCheckbox setConnectOnlyWithAudioAction={setConnectOnlyWithAudioAction}
        connectOnlyWithAudio={connectOnlyWithAudio}/>
        <ErrorMessage errorMessage={errorMessage}/>
        <JoinRoomButtons handleJoinRoom={handleJoinRoom} isRoomHost={isRoomHost} />
    </>
}

const mapStoreStateToProps = (state) => {
    return {
        ...state
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
        setConnectOnlyWithAudioAction: (onlyWithAudio) => dispatch(setConnectOnlyWithAudio(onlyWithAudio)),
        setIdentityAction: (identity) => dispatch(setIdentity(identity)),
        setRoomIdAction: (roomId) => dispatch(setRoomId(roomId)),
    }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(JoinRoomContent);