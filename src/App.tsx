import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Profile } from './components/Profile'
import { Dialogues } from './components/Dialogues/Dialogues'
import { Route, Routes } from 'react-router-dom'
import { stateType } from './types/types'

type appPropsType = {
    state: stateType
    addPost: (item: string) => void
    changeNewPostText: (item: string) => void
}

function App({ state, addPost, changeNewPostText }: appPropsType) {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />

            <div className="app-wrapper-content">
                <Routes>
                    <Route
                        path="/dialogues/*"
                        element={
                            <Dialogues
                                dialoguesData={state.messagesPage.dialoguesData}
                                dialoguesContents={
                                    state.messagesPage.dialoguesContents
                                }
                            />
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <Profile
                                addPost={addPost}
                                changeNewPostText={changeNewPostText}
                                profilePage={state.profilePage}
                            />
                        }
                    />
                </Routes>
            </div>
        </div>
    )
}

export default App
