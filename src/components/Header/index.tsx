import React from "react";
import './style.css';


export const Header = () => {

    const user = localStorage.getItem('@todo:user');

    return (
        <div className="header">
            <div className="headerLeft">
                <h1 className="textTo">To</h1>
                <h1 className="textDo">Do</h1>
            </div>

            <div className="headerRight">
                <div className="avatar">
                </div>
                <p id="p">{user}</p>
            </div>
        </div>
    )
}