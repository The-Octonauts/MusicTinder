import React from "react";
import "./SwipeButtons.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import {IconButton} from "@mui/material";

export function SwipeButtons() {
    return(
        <>
            <div className={"swipeButtons"}>
                <IconButton className={"dislikeButton"}>
                    <DoNotDisturbIcon fontSize={"large"}/>
                </IconButton>
                <IconButton className={"likeButton"}>
                    <FavoriteBorderIcon fontSize={"large"}/>
                </IconButton>
            </div>
        </>
    );
}