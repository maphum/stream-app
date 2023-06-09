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
    SET_SOCKET_ID: 'SET_SOCKET_ID',
    SET_USER_ID: 'SET_USER_ID',
    SET_LINK: 'SET_LINK',
    SET_RESOLUTIONS: 'SET_RESOLUTIONS'
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

export const setShowOverlay = (showOverlay) => {
  return {
    type: Actions.SET_SHOW_OVERLAY,
    showOverlay,
  }
}

export const setParticipants = (participants) => {
  return {
    type: Actions.SET_PARTICIPANTS,
    participants,
  }
}

export const setUserId = (userId) => {  
  return {
    type: Actions.SET_USER_ID,
    userId,
  }
}

export const setMessages = (message) => {
  return {
    type: Actions.SET_MESSAGES,
    message,
  }
}

export const setLink = (link) => {
  return {
    type: Actions.SET_LINK,
    link,
  }
}

export const setResolutions = (resolutions) => {
  return {
    type: Actions.SET_RESOLUTIONS,
    resolutions
  }
}

export default Actions;
