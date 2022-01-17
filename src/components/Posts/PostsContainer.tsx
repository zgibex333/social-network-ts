import { Posts } from './Posts'
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from '../../redux/reducers/profile-reducer'
import { StateType } from '../../redux/redux-store'
import { connect } from 'react-redux'

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
