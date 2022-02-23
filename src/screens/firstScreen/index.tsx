import React, { useState } from "react";
import './style.css'
import { Header } from "../../components/Header";
import { useHistory } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

interface IUser {
    user: string;
}

export const FirstScreen = () => {
    const [user, setUser] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IUser>();

    const history = useHistory();

    const onSubmit: SubmitHandler<IUser> = (data) => {

        history.push('/tasks');
        reset()
     };


    return (
        <div className="wrapper">
            <Header user={user} />

            <div className="body">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <p>Digite seu nome</p>
                        <input type="text" id="user" className="input" placeholder="Digite aqui"  {...register("user", { required: true })}></input>
                        {errors.user && errors.user.type === "required" && <span className="span">This is required</span>}

                    <div className="buttonWrapper">
                        <button type="submit" className="button">
                            Próximo                               
                        </button>
                    </div>
                </form>
            </div>

            <div className="footer">
                <p>Desenvolvido por Bruna Oliveira</p>
            </div>

        </div>   
    )
}