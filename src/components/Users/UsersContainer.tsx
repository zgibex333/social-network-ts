import { Users } from './Users'
import { connect } from 'react-redux'
import { StateType } from '../../redux/redux-store'
import {
    followActionCreater,
    setUsers,
    unfollowActionCreater,
    userType,
} from '../../redux/reducers/user-reducer'

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followActionCreater(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowActionCreater(userId))
        },
        setUsers: (users: Array<userType>) => {
            dispatch(setUsers(users))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
