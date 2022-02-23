import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import './style.css';
import { Box } from "../../components/BoxTask";
import Calendar from 'react-calendar';
import moment from "moment";

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
    const [date, setDate] = useState(new Date());
    const [dateFinish, setdateFinish] = useState(new Date());
    const [isOpenCalendarStart, setisOpenCalendarStart] = useState(false);
    const [isOpenCalendarFinish, setisOpenCalendarFinish] = useState(false);

    const onSubmit: SubmitHandler<Itasks> = (data) => {
       setTasks((old) => [
           ...old,
           {
                id: data.id,
                title: data.title, 
                startFrom: moment(date).locale('pt-br').format('DD MMMM YYYY'), 
                finish: moment(dateFinish).locale('pt-br').format('DD MMMM YYYY'),
                place: data.place, 
                notes: data.notes
           }
       ])
       reset()
    };

    const handleClick = (e: any) => {
        setDate(e)
        setisOpenCalendarStart(!isOpenCalendarStart)
    }

    const handleClickFinish = (e: any) => {
        setdateFinish(e);
        setisOpenCalendarFinish(!isOpenCalendarFinish)
    }

    return (
        <div className="wrapper">
            <Header />

            <div className="body">

                <div className="body-left">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="task-text">New Task</p>
                        <input id="title" type='text' placeholder='Title' className="input" {...register("title", { required: true })}/>
                        {errors.title && errors.title.type === "required" && <span className="span">This is required</span>}

                        <NewTask title='Start from' info={moment(date).locale('pt-br').format('DD MMMM YYYY')} press={() => setisOpenCalendarStart(!isOpenCalendarStart) } />
                        { isOpenCalendarStart && 

                        <div className="div-calendar">
                            <Calendar className={'calendar'} onChange={handleClick} value={date} />
                        </div>
                        }

                        <NewTask title='Finish' info={moment(dateFinish).locale('pt-br').format('DD MMMM YYYY')} press={() => setisOpenCalendarFinish(!isOpenCalendarFinish)} />
                        { isOpenCalendarFinish &&                      
                        
                        <div className="div-calendar">
                            <Calendar onChange={handleClickFinish} value={dateFinish} />
                        </div>                       
                        }

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
                                <Box title={item.title} place={item.place} notes={item.notes} date={item.startFrom} dateFinish={item.finish} />
                            ))
                        }
                    </section>
                </div>}
            </div>

            <div className="footer">
                <p>Desenvolvido por Bruna Oliveira</p>                    
            </div>
        </div>
    )
}