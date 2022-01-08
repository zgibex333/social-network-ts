import s from "../css-modules/Dialogues.module.css";
import {NavLink} from "react-router-dom";

type dialogueItem = {
    name: string
    id: number
}

export const DialogueItem = ({name, id}: dialogueItem) => {
    return (
        <li className={`${s.dialoguesItem} ${s.active}`}>
            <NavLink to={`/dialogues/${id}`}>{name}</NavLink>
        </li>
    )
}
