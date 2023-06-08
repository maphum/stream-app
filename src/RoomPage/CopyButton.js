import React, { useState } from "react";
import '../JoinRoomPage/JoinRoomPage.css';

const CopyButton = ({text}) => {
    const [copy, setCopy] = useState(false);
    const copyFunction = () => {
        if (text) navigator.clipboard.writeText(text);
        setCopy(true);
    }
    return (               
    <div className='button_copy_container'>
        <button className='button_copy' onClick={copyFunction}>
            <span>{copy ? 'COPIED!' : 'COPY'}</span>
        </button>
    </div>
)
}

export default CopyButton