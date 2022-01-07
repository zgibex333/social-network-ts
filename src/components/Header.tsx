import React from "react";
import s from "./css-modules/Header.module.css"
export const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png"
                alt="logo"/>
        </header>
    )
}

