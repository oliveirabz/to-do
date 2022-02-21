import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import './style.css';
import { Box } from "../../components/BoxTask";
import pic from '../../assets/foto-1.png';
import picture from '../../assets/foto-3.png';


interface Itasks {
    id: string, 
    title: string, 
    startFrom: string, 
    finish: string,
    place: string, 
    notes: string
}

export const SecondScreen = () => {
    const [tasks, setTasks] = useState<Itasks[]>([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Itasks>();

    const onSubmit: SubmitHandler<Itasks> = (data) => {
       setTasks((old) => [
           ...old,
           {
                id: data.id,
                title: data.title, 
                startFrom: data.id, 
                finish: data.id,
                place: data.place, 
                notes: data.notes
           }
       ])
       reset()
    };

    

    return (
        <div className="wrapper">
            <Header />

            <div className="body">

                <div className="body-left">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="task-text">New Task</p>
                        <input id="title" type='text' placeholder='Title' className="input" {...register("title", { required: true })}/>
                        {errors.title && errors.title.type === "required" && <span className="span">This is required</span>}

                        <NewTask title='Start from' info='Mon, 20 Sep 2021 10:00 AM' />
                        <NewTask title='Finish' info='Mon, 20 Sep 2021 11:00 AM' />
                   
                        <input id="place" className="input" placeholder="Place" {...register("place", { required: true })}  />
                        {errors.place && errors.place.type === "required" && <span className="span">This is required</span>}

                        <input id="notes" className="input" placeholder="Notes" {...register("notes", { required: true })}/>
                        {errors.notes && errors.notes.type === "required" && <span className="span">This is required</span>}

                        <button type="submit" className="submit">Cadastrar</button>
                    </form>
                </div>

                { tasks.length > 0 && <div className="body-right">
                    <section className="section">
                        <p>To DO</p>
                        {
                            tasks.map((item) => (
                                <Box title={item.title} place={item.place} notes={item.notes}/>
                            ))
                        }
                    </section>
                </div>}
            </div>

            <div className="footer">
                <img src={pic} alt='foto-1' className="vr" />
                <p>Desenvolvido por Bruna Oliveira</p>                    
                <img src={picture} alt='foto-3' className="sit" />
            </div>
        </div>
    )
}