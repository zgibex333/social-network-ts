import s from '../css-modules/Dialogues.module.css'
import { DialogueItem } from './DialogueItem'
import { Message } from './Message'
import { dialoguesItem, dialoguesMessage } from '../../types/types'
import React from 'react'
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from '../../redux/reducers/dialogs-reducer'

type dialoguesPropsType = {
    dialoguesData: Array<dialoguesItem>
    dialoguesContents: Array<dialoguesMessage>
    dialoguesMessage: string
    dispatch: (action: object) => void
}

export const Dialogues = ({
    dialoguesData,
    dialoguesContents,
    dialoguesMessage,
    dispatch,
}: dialoguesPropsType) => {
    const updateMessageHandler = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        dispatch(updateNewMessageTextActionCreator(e.target.value))
    }

    const addMessageHandler = () => {
        dispatch(addMessageActionCreator())
    }

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
                        onChange={updateMessageHandler}
                        placeholder="enter message..."
                    />
                </div>
                <div>
                    <button onClick={addMessageHandler}>Send</button>
                </div>
            </div>
        </div>
    )
}
