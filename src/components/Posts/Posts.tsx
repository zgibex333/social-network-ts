import React, { ElementType } from 'react'
import { Post } from './Post'
import s from '../css-modules/Posts.module.css'
import { profilePageType } from '../../types/types'
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from '../../redux/reducers/profile-reducer'

type propsPostsType = {
    profilePage: profilePageType
    dispatch: (action: any) => void
}

export const Posts = ({ profilePage, dispatch }: propsPostsType) => {
    const clickPostHandler = () => {
        dispatch(addPostActionCreator())
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextActionCreator(e.target.value))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    value={profilePage.newPostText}
                    onChange={onChangeHandler}
                />
                <button onClick={clickPostHandler}>Add</button>
            </div>
            <ul className={s.posts}>
                {profilePage.postsData.map((post) => (
                    <Post
                        key={post.id}
                        message={post.message}
                        likesCounter={post.likesCount}
                    />
                ))}
            </ul>
        </div>
    )
}
