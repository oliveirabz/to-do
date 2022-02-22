import React from "react";
import './style.css';

interface Props {
    title: string,
    place: string,
    notes: string,
    date: string,
    dateFinish: string
}

export const Box = ({ title, place, notes, date, dateFinish }: Props) => {
    return (
        <div className="all">
            
            <div className="box">
                <div className="content">                 
                    <h1>{title}</h1>
                    <p>{place}</p>
                </div>

                <div className="notes">
                    <p>{notes}</p>
                </div>

                <div className="date">
                    <p>{date} - {dateFinish}</p>
                </div>

            </div>
        </div>
    )
}