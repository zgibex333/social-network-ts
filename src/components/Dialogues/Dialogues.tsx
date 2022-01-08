import s from "../css-modules/Dialogues.module.css"
import {NavLink} from "react-router-dom";
import {DialogueItem} from "./DialogueItem";
import {Message} from "./Message";


type dialoguesItem = {
    name: string
    id: number
}
type dialoguesMessage = {
    name: string
    id: number
}


export const Dialogues = () => {
    const dialoguesData: Array<dialoguesItem> = [
        {name: "Ivan", id: 1},
        {name: "Katy", id: 2},
        {name: "Hannah", id: 3},
        {name: "Osvald", id: 4},
        {name: "Kristin", id: 5},
        {name: "Michael", id: 6},
        {name: "Steve", id: 7},
    ]
    const dialoguesContents: Array<dialoguesMessage> = [
        {name: "Hi", id: 1},
        {name: "Ho", id: 2},
        {name: "Foy", id: 3}
    ]
    return (
        <div className={s.dialogues}>
            <ul className={s.dialoguesItems}>
                {dialoguesData.map(dialogue => (
                    <DialogueItem key={dialogue.id} name={dialogue.name} id={dialogue.id}/>
                ))}
            </ul>
            <div className={s.messages}>
                {dialoguesContents.map(mess => (
                    <Message key={mess.id} message={mess.name}/>
                ))}
            </div>
        </div>
    )
}