import Users from './Users'
import { connect } from 'react-redux'
import { StateType } from '../../redux/redux-store'
import {
    followActionCreater,
    setUsers,
    unfollowActionCreater,
    UsersType,
    UserType,
} from '../../redux/reducers/user-reducer'
import { Dispatch } from 'redux'

type MapStatePropsType = {
    usersPage: UsersType
}

type MapDispatchPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followActionCreater(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowActionCreater(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsers(users))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
