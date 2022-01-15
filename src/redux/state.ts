import { postItem, stateType, StoreType } from '../types/types'
import profileReducer from './reducers/profile-reducer'
import dialogsReducer from './reducers/dialogs-reducer'

export const store: StoreType = {
    _state: {
        messagesPage: {
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
        },
        profilePage: {
            postsData: [
                { message: 'Ivan', id: 1, likesCount: 0 },
                { message: 'Katy', id: 2, likesCount: 0 },
            ],
            newPostText: 'it-kamasutra.com',
        },
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer: Function) {
        this._callSubscriber = observer
        observer()
    },
    dispatch(action) {
        dialogsReducer(this._state.messagesPage, action)
        profileReducer(this._state.profilePage, action)
        this._callSubscriber(this._state)
    },
}
