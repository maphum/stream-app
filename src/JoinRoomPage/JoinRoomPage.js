import React, { useEffect } from 'react'
import './JoinRoomPage.css'
import { useLocation } from 'react-router-dom';
import { setIsRoomHost } from '../store/actions';
import { connect } from 'react-redux';
import JoinRoomTitle from './JoinRoomTitle';
import JoinRoomContent from './JoinRoomContent';

const JoinRoomPage = ({setIsRoomHostAction, isRoomHost}) => {
    const search = useLocation().search;
    useEffect(() => {
        console.log('hello')
        const isRoomHost = new URLSearchParams(search).get('host');
        if (isRoomHost) {
            setIsRoomHostAction(true);
        }
        else setIsRoomHostAction(false);
    }, [search, setIsRoomHostAction])
    return <div className='join_room_page_container'>
        <div className='join_room_page_panel'>
            <JoinRoomTitle isRoomHost={isRoomHost} />
            <JoinRoomContent />   
        </div>
    </div>
};

const mapStoreStateToProps = (state) => {
    return {
        ...state
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost))
    }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(JoinRoomPage);