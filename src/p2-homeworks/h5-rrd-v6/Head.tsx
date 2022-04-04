import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Head.module.css'

function Header() {
    return (
        <div className={s.main}>
            <ul>
                <li><NavLink to={PATH.PRE_JUNIOR}>PreJunior </NavLink></li>
                <li><NavLink to={PATH.JUNIOR}>Junior </NavLink></li>
                <li><NavLink to={PATH.JUNIOR_PLUS}>JuniorPlus </NavLink></li>
                <li className={s.square}></li>
            </ul>
        </div>
    )
}

export default Header
