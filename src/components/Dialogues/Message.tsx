import s from "../css-modules/Dialogues.module.css";

type messageType = {
    message: string
}

export const Message = ({message}: messageType) => {
    return (
        <div className={s.message}>{message}</div>
    )
}