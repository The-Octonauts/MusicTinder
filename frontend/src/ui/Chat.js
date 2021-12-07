import React from "react";
import {Avatar} from "@mui/material";

export function Chat({name, message, profilePic, timestamp}) {
    return (
        <>
            <div className="chat">
                <Avatar className="chatImage" alt={name} src={profilePic}/>
            </div>
            <div>
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
        </>
    )
}