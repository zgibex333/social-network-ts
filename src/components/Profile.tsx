import React from 'react'
import s from './css-modules/Profile.module.css'
import { Posts } from './Posts/Posts'
import { ProfileInfo } from './ProfileInfo'
import { profilePageType } from '../types/types'

type profilePropsType = {
    profilePage: profilePageType
    dispatch: (action: any) => void
}

export const Profile = ({ profilePage, dispatch }: profilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <Posts dispatch={dispatch} profilePage={profilePage} />
        </div>
    )
}
