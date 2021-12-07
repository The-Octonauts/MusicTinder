import React from "react";
import "./Chats.css"
import {Chat} from "./Chat";

export function Chats() {
    return (
        <>
        <div className="chats">
            <Chat
                name="Joe Mama"
                message="Is Ugly"
                timestamp="1min ago"
                profilePic="https://adultpaintbynumber.com/wp-content/uploads/2020/11/Elastigirl-Character-paint-by-numbers.jpg"/>
        </div>
        </>
    )
}