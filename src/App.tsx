import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Profile } from './components/Profile'
import { Dialogues } from './components/Dialogues/Dialogues'
import { Route, Routes } from 'react-router-dom'
import { stateType } from './types/types'
import { StateType, StoreType } from './redux/redux-store'
import { DialoguesContainer } from './components/Dialogues/DialoguesContainer'
import { Users } from './components/Users/Users'
import UsersContainer from './components/Users/UsersContainer'

// type appPropsType = {
//     state: StateType
//     dispatch: (action: any) => void
//     store: StoreType
// }

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />

            <div className="app-wrapper-content">
                <Routes>
                    <Route
                        path="/dialogues/*"
                        element={<DialoguesContainer />}
                    />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/users" element={<UsersContainer />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
