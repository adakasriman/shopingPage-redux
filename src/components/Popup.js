import React from "react";

function Popup(props) {
    
    return (
        <div className="popup-box">
            <div className="box">
                <div>
                    <span className="close-icon" onClick={props.handleClose}>x</span>
                    {props.content}
                </div>
            </div>
        </div>
    );
}

export default Popup;