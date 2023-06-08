import React from 'react'
import '../JoinRoomPage/JoinRoomPage.css'
import {live_stream_server} from '../utils/server_domain'
import CopyButton from './CopyButton'
// import {linkUpdate} from './../utils/wss'
const Overlay = ({roomId, setShowOverLay}) => {
    const onConfirm = () => {
        setShowOverLay(false);
    }
    const onClose = () => {
        setShowOverLay(false);
    }
    return <div className='overlay_container'>
        <div className='join_room_page_panel'>
            <p className='join_room_title'>STREAM SETTINGS</p>
        <div className='copy_to_link_container'>
            <div className="copy_to_link">
                <div className='link_url'>
                    <label className='label_modal'>Stream URL</label>
                    <input className='join_room_input_copy' value={live_stream_server} readOnly />
                </div>
                <CopyButton text={live_stream_server} />
            </div>
            <div className="copy_to_link">
                <div className='link_url'>
                    <label className='label_modal'>Stream Key</label>
                    <input className='join_room_input_copy' value={roomId} type='password' readOnly/>
                </div>
                <CopyButton text={roomId} />
            </div>

        </div>
        <div className="error_message_container"></div>
        <div className="join_room_buttons_container">
            <button className="join_room_success_button" onClick={onConfirm}>Confirm</button>
            <button className="join_room_cancel_button" onClick={onClose}>Close</button>
            </div>
        </div>
    </div>
}

export default Overlay;