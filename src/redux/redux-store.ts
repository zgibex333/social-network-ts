import { combineReducers, createStore } from 'redux'
import profileReducer from './reducers/profile-reducer'
import dialogsReducer from './reducers/dialogs-reducer'

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
})

export type StateType = ReturnType<typeof reducers>

let store = createStore(reducers)

export type StoreType = typeof store

export default store
