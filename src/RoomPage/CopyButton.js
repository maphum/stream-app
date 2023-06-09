import React, { useState } from "react";
import '../JoinRoomPage/JoinRoomPage.css';

const CopyButton = ({text}) => {
    const [copy, setCopy] = useState(false);
    const  copyFunction = async () => {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
          } else {
            const textarea = document.createElement('textarea');
            textarea.value = text;
        
            // Move the textarea outside the viewport to make it invisible
            textarea.style.position = 'absolute';
            textarea.style.left = '-99999999px';
        
            document.body.prepend(textarea);
        
            // highlight the content of the textarea element
            textarea.select();
        
            try {
              document.execCommand('copy');
            } catch (err) {
              console.log(err);
            } finally {
              textarea.remove();
            }
    }
    setCopy(true)
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