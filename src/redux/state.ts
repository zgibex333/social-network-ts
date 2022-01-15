import { postItem, stateType } from '../types/types'

// let rerenderTree:Function

type StoreType = {
    _state: stateType
    _callSubscriber: Function & {}
    addPost: (message: string) => void
    changeNewPostText: (newText: string) => void
    subscribe: (arg: Function) => void
    getState: () => stateType
}

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
    addPost(message: string): void {
        const newPost: postItem = {
            id: 11,
            likesCount: 10,
            message: this._state.profilePage.newPostText,
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    changeNewPostText(newText: string): void {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer: Function) {
        this._callSubscriber = observer
        observer()
    },
}
