import React from "react";

const Popup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                {props.content}
                <button className="close-icon" onClick={props.handleConfirm}>Confirm</button>
                <button className="close-icon" onClick={props.handleClose}>Cancel</button>
            </div>
        </div>
    )
}

export default Popup;