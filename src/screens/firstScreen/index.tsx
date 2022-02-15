import React from "react";
import './style.css'
import foto from '../../assets/foto-2.png'

export const FirstScreen = () => {
    return (
        <div className="wrapper">

            <div className="header">
                <div className="headerLeft">
                    <h1 className="textTo">To</h1>
                    <h1 className="textDo">Do</h1>
                </div>

                <div className="headerRight">
                    <div className="avatar">
                    </div>
                    <p>Digite seu nome</p>
                </div>
            </div>
        
            <div className="body">
                <div className="form">
                        <p>Digite seu nome</p>
                        <input type="text" className="input" placeholder="Digite aqui"></input>

                    <div className="buttonWrapper">
                        <button type="submit" className="button">
                            Próximo
                        </button>
                    </div>
                </div>
            </div>

            <div className="footer">
                <p>Desenvolvido por Bruna Oliveira</p>

                <img src={foto} />
            </div>

        </div>   
    )
}