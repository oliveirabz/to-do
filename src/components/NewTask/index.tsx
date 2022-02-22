import React from "react";
import { TiChevronRight } from "react-icons/ti";
import './style.css';

interface Props {
    title: string, 
    info: string,
    press: () => void,
}

export const NewTask = ({ title, info, press }: Props) => {
    return (
        <div className="wrapper-task" onClick={() => press()}>
            
            <div className="left">
                <label>{title}</label>
            </div>

            <div className="button-right">
                <p>{info}</p>
                <TiChevronRight className="icon"/>
            </div>
        </div>
    )
}