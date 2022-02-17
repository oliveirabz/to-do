import React from "react";
import './style.css';

interface Props {
    user?: string;
}



export const Header = ({ user }: Props) => {
    return (
        <div className="header">
            <div className="headerLeft">
                <h1 className="textTo">To</h1>
                <h1 className="textDo">Do</h1>
            </div>

            <div className="headerRight">
                <div className="avatar">
                </div>
                <p>{user ? user : 'Digite seu nome'}</p>
            </div>
        </div>
    )
}