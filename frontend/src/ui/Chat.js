import React from "react";
import {Avatar} from "@mui/material";
import "./Chat.css";

export function Chat({name, message, profilePic, timestamp}) {
    return (
        <>
            <div className="chat">
                <Avatar className="chatImage" alt={name} src={profilePic}/>
                <div className="chatDetails">
                    <h2>{name}</h2>
                    {/*<p>{message}</p>*/}
                </div>
                <p className="chatTimestamp">{timestamp}</p>
            </div>

        </>
    )
}