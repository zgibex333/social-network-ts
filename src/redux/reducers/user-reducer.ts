import { ActionType } from '../../types/types'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type userType = {
    id: number
    status: string
    fullName: string
    avatar: string
    following: boolean
    location: {
        city: string
        country: string
    }
}

export type UsersType = {
    users: Array<userType> | []
}

let initialState: UsersType = {
    users: [],
}

export const usersReducer = (
    state: UsersType = initialState,
    action: ActionType
) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, following: true }
                    }
                    return user
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, following: false }
                    }
                    return user
                }),
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            }
        default:
            return state
    }
}

export const followActionCreater = (userId: number) => ({
    type: FOLLOW,
    userId,
})
export const unfollowActionCreater = (userId: number) => ({
    type: UNFOLLOW,
    userId,
})
export const setUsers = (users: Array<userType>) => ({ type: SET_USERS, users })
