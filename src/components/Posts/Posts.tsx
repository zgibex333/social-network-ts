import React, { ElementType } from 'react'
import { Post } from './Post'
import s from '../css-modules/Posts.module.css'
import { postItem, profilePageType } from '../../types/types'
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from '../../redux/reducers/profile-reducer'

type propsPostsType = {
    profilePosts: Array<postItem>
    profileTextarea: string
    updateNewProfilePage: (text: string) => void
    addPost: () => void
}

export const Posts = ({
    updateNewProfilePage,
    profileTextarea,
    addPost,
    profilePosts,
}: propsPostsType) => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    value={profileTextarea}
                    onChange={(e) => updateNewProfilePage(e.target.value)}
                />
                <button onClick={addPost}>Add</button>
            </div>
            <ul className={s.posts}>
                {profilePosts.map((post) => (
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
