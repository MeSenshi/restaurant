import React from "react";
import './GuestsQueue.css'

const GuestsQueue = ({waitingGuests}) =>{
    return (
        <div className="guests_container">
            <h1 className="guests_header">Waiting Gusts</h1>
            <span className="guests">{waitingGuests}</span>
        </div>
    )
}

export default GuestsQueue