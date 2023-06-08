import io from 'socket.io-client';
import { server_domain } from "./server_domain";
import { store } from '../store/store';
import { setRoomId, setParticipants, setMessages, setUserId, setLink, setResolutions } from '../store/actions';
import * as webRTCHandler from './webRTCHandler';
const SERVER = server_domain;

let socket = null;

export const connectWithSocketIOServer = () => {
    socket = io(SERVER);

    socket.on('connect', () => {
        console.log('connected to socket io server');
        console.log(socket.id);
    });

    socket.on('room-id', (data) => {
        const {roomId} = data ;
        store.dispatch(setRoomId(roomId));
    })

    socket.on('user-id', (data) => {
        const {userId} = data ;
        store.dispatch(setUserId(userId));
    })

    socket.on('room-update', (data) => {
        store.dispatch(setParticipants(data.connectedUsers));
    } )

    socket.on('conn-prepare', (data) => {
        const { connUserSocketId } = data;
        
        webRTCHandler.prepareNewPeerConnection(connUserSocketId, false);

        socket.emit('conn-init', {connUserSocketId: connUserSocketId})
    })

    socket.on('conn-signal', (data) => {
        webRTCHandler.handleSignalingData(data);
    })

    socket.on('conn-init', (data) => {
        const {connUserSocketId} = data;

        webRTCHandler.prepareNewPeerConnection(connUserSocketId, true);
    })

    socket.on('user-disconnected', data => {
        webRTCHandler.removePeerConnection(data);
    })

    socket.on('message', (data) => {
        const {message} = data;
        store.dispatch(setMessages(message));
    })

    socket.on('stream', ({stream, connUserSocketId}) => {
        console.log(stream, connUserSocketId)
        webRTCHandler.addStream(stream, connUserSocketId);
    })

    socket.on('link-update', ({resolutions}) => {
        store.dispatch(setResolutions(resolutions));
    }
    )

}

export const linkUpdate = (data) => {
    socket.emit('link-update', data); 
}

export const createNewRoom = (identity) => {
    const data = {
        identity,
    };

    socket.emit('create-new-room', data);
}

export const joinRoom = (roomId, identity) => {
    const data = {
        roomId,
        identity,
    }

    socket.emit('join-room', data); 
}

export const signalPeerData = (data) => {
    socket.emit('conn-signal', data);
}

export const sendMessageUsingSocket = (message, roomId) => {
    socket.emit('send-message', {message, roomId});
}

export const broadcastStream = (stream) => {
    console.log(stream)
    const mediaStreamTrack = stream.getTracks()[0];
    const mediaStream = new MediaStream([mediaStreamTrack]);

    const mediaRecorder = new MediaRecorder(mediaStream);

    mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        console.log(event);
        console.log(event.data); 
        socket.emit('stream', event.data);
      }
    };
    mediaRecorder.start();
}