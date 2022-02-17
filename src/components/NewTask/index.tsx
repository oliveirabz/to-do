import React from "react";
import { TiChevronRight } from "react-icons/ti";
import './style.css';

interface Props {
    title: string, 
    info: string
}

export const NewTask = ({ title, info }: Props) => {
    return (
        <div className="wrapper-task">
            
            <div className="left">
                <label>{title}</label>
            </div>

            <div className="button-right">
                <p>{info}</p>
                <TiChevronRight />
            </div>
        </div>
    )
}