import s from "../css-modules/Dialogues.module.css"
import {DialogueItem} from "./DialogueItem";
import {Message} from "./Message";
import {dialoguesItem, dialoguesMessage} from "../../types/types";



type dialoguesPropsType = {
    dialoguesData: Array<dialoguesItem>
    dialoguesContents: Array<dialoguesMessage>

}

export const Dialogues = ({dialoguesData, dialoguesContents}:dialoguesPropsType) => {
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