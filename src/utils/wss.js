import io from 'socket.io-client';
import { server_domain } from "./server_domain";
import { store } from '../store/store';
import { setRoomId, setParticipants } from '../store/actions';

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

    socket.on('room-update', (data) => {
        store.dispatch(setParticipants(data.connectedUsers));
    } )
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