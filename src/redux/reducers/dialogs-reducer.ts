import { ActionType, messagesPageType } from '../../types/types'

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialoguesData: [
        { name: 'Ivan', id: 1 },
        { name: 'Katy', id: 2 },
        { name: 'Hannah', id: 3 },
        { name: 'Osvald', id: 4 },
        { name: 'Kristin', id: 5 },
        { name: 'Michael', id: 6 },
        { name: 'Steve', id: 7 },
    ],
    dialoguesContents: [
        { name: 'Hi', id: 1 },
        { name: 'Ho', id: 2 },
        { name: 'Foy', id: 3 },
    ],
    dialoguesMessage: '',
}

const dialogsReducer = (
    state: messagesPageType = initialState,
    action: ActionType
): messagesPageType => {
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

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
})
export const updateNewMessageTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
})

export default dialogsReducer
