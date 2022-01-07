import s from "../css-modules/Post.module.css"

type postType = {
    message: string
    likesCounter?: number
}


export const Post = ({message, likesCounter}: postType) => {
    return (
        <div className={s.post}>
            <img
                src="https://preview.redd.it/dh5otp8kcf741.png?width=640&crop=smart&auto=webp&s=d795f12b5e3eea1ef4d7ceb8244fca98e2384dbf"
                alt="avatar"/>
            <p>{message}</p>
            <p>like {likesCounter}</p>
        </div>
    )
}