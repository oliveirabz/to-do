import React from "react";
import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import './style.css';

export const SecondScreen = () => {
    return (
        <div className="wrapper">
            <Header />

            <div className="body">

                <div className="body-left">
                    <p className="task-text">New Task</p>
                    <input type='text' placeholder='Title' className="input" />
                    <NewTask title='Start from' info='Mon, 20 Sep 2021 10:00 AM' />
                    <NewTask title='Finish' info='Mon, 20 Sep 2021 11:00 AM' />
                    <NewTask title='Repeat' info='One time' />
                    <NewTask title='Reminder' info='Before 5 minutes' />

                    <input className="input" placeholder="Place" />
                    <input className="input" placeholder="Notes" />
                    <button type="submit" className="submit">Cadastrar</button>
                </div>

                <div className="body-right">
                    <p>To DO</p>
                </div>
            </div>
        </div>
    )
}