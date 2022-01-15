import React, { ElementType } from 'react'
import { Post } from './Post'
import { ProfileInfo } from '../ProfileInfo'
import s from '../css-modules/Posts.module.css'
import { profilePageType } from '../../types/types'

type propsPostsType = {
    profilePage: profilePageType
    addPost: (item: string) => void
    changeNewPostText: (item: string) => void
}

export const Posts = ({
    profilePage,
    addPost,
    changeNewPostText,
}: propsPostsType) => {
    let newPostEl = React.useRef<HTMLTextAreaElement>(null)
    const clickPostHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (newPostEl.current) {
            addPost(newPostEl.current.value)
        }
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        changeNewPostText(e.target.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className="">
                <textarea
                    ref={newPostEl}
                    value={profilePage.newPostText}
                    onChange={onChangeHandler}
                ></textarea>
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
