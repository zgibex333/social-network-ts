import React from "react";
import s from "./css-modules/Profile.module.css"
import {Posts} from "./Posts/Posts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt="content"/>
            </div>
            <div className="">
                avatar/description
            </div>
            <Posts/>
        </div>
    )
}
