import React from "react";
import {Post} from "./Post";

export const Posts = () => {
    return (
        <div className="">
            My posts
            <div className="">
                <textarea name="" id=""></textarea>
                <button>Add</button>
            </div>
            <ul className="posts">
                <Post message='Hi How Are You?' likesCounter={20}/>
                <Post message='Some text' />
            </ul>
        </div>
    )
}
