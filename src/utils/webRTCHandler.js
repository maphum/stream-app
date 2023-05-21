import { store } from "../store/store";
import { setShowOverlay } from "../store/actions";
import * as wss from './wss';
const defaultConstrains = {
    audio: true,
    video: true,
} 

let localStream;

export const getLocalPreviewAndInitRoomConnection = async (
    isRoomHost,
    identity,
    roomId = null
) => {
    navigator.mediaDevices.getUserMedia(defaultConstrains).then((stream) => {
        console.log('successfully got access to local media');
        // disable over lay
        store.dispatch(setShowOverlay(false));
        localStream = stream;
        showLocalVideoPreview(localStream);
        isRoomHost ? wss.createNewRoom(identity) : wss.joinRoom(roomId, identity);
    }).catch(err => {
        console.log('error occured when trying to get an access to get local stream');
        console.log(err);
    });
}

const showLocalVideoPreview = (stream) => {

}