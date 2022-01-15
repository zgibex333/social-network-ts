import { ActionType, messagesPageType } from '../../types/types'
import profileReducer from './profile-reducer'

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

const dialogsReducer = (state: messagesPageType, action: ActionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.dialoguesMessage = action.newText
            return state
        case ADD_MESSAGE:
            const newMessage = {
                name: state.dialoguesMessage,
                id: 4,
            }
            state.dialoguesContents.push(newMessage)
            state.dialoguesMessage = ''
            return state
        default:
            return state
    }
}

export default dialogsReducer
export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
})
export const updateNewMessageTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
})
