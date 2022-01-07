import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";
import {Dialogues} from "./components/Dialogues/Dialogues";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className="app-wrapper-content">

                    <Routes>
                        <Route path="/messages" element={<Dialogues/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Routes>

                {/*<Dialogues/>*/}
                {/*<Profile/>*/}
            </div>
        </div>
    );
}

export default App;
