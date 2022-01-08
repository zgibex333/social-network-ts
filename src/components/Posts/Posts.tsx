import React from "react";
import {Post} from "./Post";
import {ProfileInfo} from "../ProfileInfo";
import s from "../css-modules/Posts.module.css"

type postItem = {
    message: string
    id: number
    likesCount: number
}

export const Posts = () => {
    const postsData: Array<postItem> = [
        {message: "Ivan", id: 1, likesCount: 0},
        {message: "Katy", id: 2, likesCount: 0},
        {message: "Hannah", id: 3, likesCount: 20},
        {message: "Osvald", id: 4, likesCount: 0},
        {message: "Kristin", id: 5, likesCount: 0},
        {message: "Michael", id: 6, likesCount: 0},
        {message: "Steve", id: 7, likesCount: 0},
    ]
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className="">
                <textarea name="" id=""></textarea>
                <button>Add</button>
            </div>
            <ul className={s.posts}>
                {postsData.map(post => (
                    <Post key={post.id} message={post.message} likesCounter={post.likesCount}/>
                ))}
            </ul>
        </div>
    )
}
