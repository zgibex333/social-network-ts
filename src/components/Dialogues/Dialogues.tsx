import s from '../css-modules/Dialogues.module.css'
import { DialogueItem } from './DialogueItem'
import { Message } from './Message'
import { dialoguesItem, dialoguesMessage } from '../../types/types'
import React from 'react'
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from '../../redux/reducers/dialogs-reducer'
import { DialoguesPropsType } from './DialoguesContainer'

export const Dialogues = ({
    dialoguesData,
    dialoguesContents,
    dialoguesMessage,
    updateMessage,
    addMessage,
}: DialoguesPropsType) => {
    return (
        <div className={s.dialogues}>
            <ul className={s.dialoguesItems}>
                {dialoguesData.map((dialogue) => (
                    <DialogueItem
                        key={dialogue.id}
                        name={dialogue.name}
                        id={dialogue.id}
                    />
                ))}
            </ul>
            <div className={s.messages}>
                {dialoguesContents.map((mess) => (
                    <Message key={mess.id} message={mess.name} />
                ))}
            </div>
            <div>
                <div>
                    <textarea
                        value={dialoguesMessage}
                        onChange={(e) => updateMessage(e.target.value)}
                        placeholder="enter message..."
                    />
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}
