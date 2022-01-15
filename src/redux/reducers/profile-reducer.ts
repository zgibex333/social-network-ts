import { ActionType, postItem, profilePageType } from '../../types/types'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state: profilePageType, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: postItem = {
                id: 11,
                likesCount: 10,
                message: state.newPostText,
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})

export default profileReducer
