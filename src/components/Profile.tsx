import React from "react";
import s from "./css-modules/Profile.module.css"
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <Posts/>
        </div>
    )
}
