import React from "react";
import "./Chats.css"
import {Chat} from "./Chat";

export function Chats() {
    return (
        <>
        <div className="chats">
            <Chat
                name="Ellen"
                message="You like the joe rogan experience?"
                timestamp="1 min ago"
                profilePic="https://adultpaintbynumber.com/wp-content/uploads/2020/11/Elastigirl-Character-paint-by-numbers.jpg"/>
            <Chat
                name="Sophie"
                message="Hey"
                timestamp="20 min ago"
                profilePic="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            <Chat
                name="Jessica"
                message="How ya doin"
                timestamp="1 hr ago"
                profilePic="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1150881602%2F0x0.jpg%3Ffit%3Dscale"/>
            <Chat
                name="Brian"
                message="You free sat?"
                timestamp="Yesterday"
                profilePic="https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc="/>
            <Chat
                name="Joshy"
                message="Nice Bro!"
                timestamp="Yesterday"
                profilePic="https://live-production.wcms.abc-cdn.net.au/daa0febfd589b3b0587e5e8e209c0156?impolicy=wcms_crop_resize&cropH=604&cropW=1073&xPos=0&yPos=256&width=862&height=485"/>
        </div>
        </>
    )
}