import React from "react";
import s from "./css-modules/Profile.module.css"
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo";
import {profilePageType} from "../types/types";




type profilePropsType = {
    profilePage: profilePageType
    addPost: (item: string) => void
    changeNewPostText: (item: string) => void
}

export const Profile = ({profilePage, addPost, changeNewPostText}:profilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts addPost={addPost} profilePage={profilePage} changeNewPostText={changeNewPostText}/>
        </div>
    )
}
