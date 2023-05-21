import React from "react";
import { connect } from "react-redux";
// const dummyParticipants = [
//     {
//         identity: "John",
//     },
//     {
//         identity: "Jane",
//     },
//     {
//         identity: "Jack",
//     },
//     {
//         identity: "Jill",
//     }
// ]

const SingleParticipant = ({identity, lastItem, participant}) => {
    return <>
        <p className="participants_paragraph">{identity}</p>
        {!lastItem && <span className="participants_separator_line"></span>}
    </>
}

const Participants = ({participants}) => {
    return <div className="participants_container">
        {participants.map((participant, index) => {
            return <SingleParticipant key={participant.identity} identity={participant.identity} lastItem={index === participants.length - 1} participant={participant} />
        })}
    </div>
}

const mapStoreStateToProps = (state) => {
    return {
      ...state,
    };
};

export default connect(mapStoreStateToProps)(Participants);