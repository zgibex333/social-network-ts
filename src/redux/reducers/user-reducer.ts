import { ActionType } from '../../types/types'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type UserType = {
    id: number
    status: string | undefined
    name: string
    uniqueUrlName: string | undefined
    followed: boolean
    photos: {
        small: string | undefined
        large: string | undefined
    }
}

export type UsersType = {
    users: Array<UserType> | []
}

let initialState: UsersType = {
    users: [],
}

export const usersReducer = (
    state: UsersType = initialState,
    action: ActionType
): UsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
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
export const setUsers = (users: any) => ({ type: SET_USERS, users })
