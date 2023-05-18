import React from "react";
import './IntroductionPage.css';
import ConnectButtons from "./ConnectingButtons";
const IntroductionPage = () => { 
    return (
        <div className="introduction_page_container">
            <div className="introduction_page_panel">
                <h1 style={{fontSize: '64px', color: '#2d8cff'}}>Chat with me</h1>
                <ConnectButtons />
            </div>
        </div>
    );
};

export default IntroductionPage;