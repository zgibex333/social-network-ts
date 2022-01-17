import React from 'react'
import s from './css-modules/Profile.module.css'
import { Posts } from './Posts/Posts'
import { ProfileInfo } from './ProfileInfo'
import { profilePageType } from '../types/types'
import { PostsContainer } from './Posts/PostsContainer'
import { StoreType } from '../redux/redux-store'

export const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <PostsContainer />
        </div>
    )
}
