import React from 'react'
import s from './css-modules/Navbar.module.css'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.linklist}>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? s.active : '')}
                        to="/profile"
                    >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? s.active : '')}
                        to="/dialogues"
                    >
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? s.active : '')}
                        to="/news"
                    >
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? s.active : '')}
                        to="/music"
                    >
                        Music
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? s.active : '')}
                        to="/settings"
                    >
                        Settings
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? s.active : '')}
                        to="/users"
                    >
                        Users
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
