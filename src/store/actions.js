const Actions = {
    SET_IS_ROOM_HOST: "SET_IS_ROOM_HOST",
    SET_CONNECT_ONLY_WITH_AUDIO: "SET_CONNECT_ONLY_WITH_AUDIO",
    SET_IDENTITY: "SET_IDENTITY",
    SET_ROOM_ID: "SET_ROOM_ID",
    SET_SHOW_OVERLAY: "SET_SHOW_OVERLAY",
    SET_PARTICIPANTS: "SET_PARTICIPANTS",
    SET_MESSAGES: "SET_MESSAGES",
    SET_ACTIVE_CONVERSATION: 'SET_ACTIVE_CONVERSATION',
    SET_DIRECT_CHAT_HISTORY: 'SET_DIRECT_CHAT_HISTORY',
    SET_SOCKET_ID: 'SET_SOCKET_ID'
  };
export const setIsRoomHost = (isRoomHost) => {
    return {
        type: Actions.SET_IS_ROOM_HOST,
        isRoomHost
    }
}

export const setConnectOnlyWithAudio = (onlyWithAudio) => {
    return {
      type: Actions.SET_CONNECT_ONLY_WITH_AUDIO,
      connectOnlyWithAudio: onlyWithAudio,
    };
  };

export const setIdentity = (identity) => {
  return {
    type: Actions.SET_IDENTITY,
    identity,
  }
}

export const setRoomId = (roomId) => {
  return {
    type: Actions.SET_ROOM_ID,
    roomId,
  }
}
export default Actions;
