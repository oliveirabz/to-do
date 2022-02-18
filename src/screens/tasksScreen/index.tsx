import React from "react";
import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import './style.css';
import { Box } from "../../components/BoxTask";
import pic from '../../assets/foto-1.png';
import picture from '../../assets/foto-3.png';


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
                    <Box />
                    <Box />
                    <Box />
                </div>
            </div>

            <div className="footer">
                <img src={pic} alt='foto-1' className="vr" />
                <p>Desenvolvido por Bruna Oliveira</p>                    
                <img src={picture} alt='foto-3' className="sit" />
            </div>
        </div>
    )
}