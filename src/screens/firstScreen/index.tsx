import React, { useState } from "react";
import './style.css'
import foto from '../../assets/foto-2.png'
import { Header } from "../../components/Header";

export const FirstScreen = () => {
    const [user, setUser] = useState('');

    function handleChange(e: any) {
        setUser(e.target.value);
    }

    return (
        <div className="wrapper">
            <Header user={user} />        
            <div className="body">
                <div className="form">
                        <p>Digite seu nome</p>
                        <input type="text" className="input" placeholder="Digite aqui" onChange={handleChange}></input>

                    <div className="buttonWrapper">
                        <button type="submit" className="button">
                            Próximo
                        </button>
                    </div>
                </div>
            </div>

            <div className="footer">
                <p>Desenvolvido por Bruna Oliveira</p>

                <img src={foto} alt='foto-2'/>
            </div>

        </div>   
    )
}