import { combineReducers, createStore } from 'redux'
import profileReducer from './reducers/profile-reducer'
import dialogsReducer from './reducers/dialogs-reducer'
import { usersReducer } from './reducers/user-reducer'

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
})

export type StateType = ReturnType<typeof reducers>

let store = createStore(reducers)

export type StoreType = typeof store

export default store
