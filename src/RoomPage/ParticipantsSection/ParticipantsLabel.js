import React from "react";
import { connect } from "react-redux";
const ParticipantsLabel = ({participants}) => {
    return <div className="participants_label_container">
        <p className="participants_label_paragraph">Viewer{participants.length === 1 ? '' : 's'}</p>
        <div className="participants_label_paragraph">
            <p>{participants ? participants.length : 1}</p>
        </div>
    </div>
}

const mapStoreStateToProps = (state) => {
    return {
      ...state,
    };
};

export default connect(mapStoreStateToProps)(ParticipantsLabel);