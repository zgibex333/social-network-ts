import React from 'react'
import { Posts } from './Posts'
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from '../../redux/reducers/profile-reducer'
import { StateType, StoreType } from '../../redux/redux-store'
import { connect } from 'react-redux'

// export const PostsContainer = ({ store }: { store: StoreType }) => {
//     const state: StateType = store.getState()
//
//     const updateNewProfilePage = (text: string) => {
//         store.dispatch(updateNewPostTextActionCreator(text))
//     }
//
//     const addPost = () => {
//         store.dispatch(addPostActionCreator())
//     }
//
//     return (
//         <Posts
//             updateNewProfilePage={updateNewProfilePage}
//             addPost={addPost}
//             profilePosts={state.profilePage.postsData}
//             profileTextarea={state.profilePage.newPostText}
//         />
//     )
// }

const mapStateToProps = (state: StateType) => {
    return {
        profilePosts: state.profilePage.postsData,
        profileTextarea: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewProfilePage: (text: string): void => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: (): void => {
            dispatch(addPostActionCreator())
        },
    }
}

export const PostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts)
