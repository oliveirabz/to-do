// React
import { useState } from "react";

// React Hook Form
import { useForm, SubmitHandler } from "react-hook-form";

// React-Calendar
import Calendar from "react-calendar";

// moment
import moment from "moment";

// Services
// import { GetInfo } from "../../services/getWeather";

// Components
import { Header } from "../../components/Header";
import { Box } from "../../components/BoxTask";
import { NewTask } from "../../components/NewTask";

// Styles
import styles from "./styles.module.scss";

interface Itasks {
  id: string;
  title: string;
  startFrom: string;
  finish: string;
  place: string;
  notes: string;
}

// interface Iweather {
//   weather: [
//     {
//       description: string;
//       icon: string;
//       id: number;
//     }
//   ];
//   main: {
//     temp: number;
//   };
// }

export const SecondScreen = () => {
  const [tasks, setTasks] = useState<Itasks[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Itasks>();
  const [dateStart, setDateStart] = useState(new Date());
  const [dateFinish, setdateFinish] = useState(new Date());
  const [isOpenCalendarStart, setisOpenCalendarStart] = useState(false);
  const [isOpenCalendarFinish, setisOpenCalendarFinish] = useState(false);
  //   const [convert, setConvert] = useState(0);
  //   const [latitude, setLatitude] = useState(0);
  //   const [longitude, setLongitude] = useState(0);
  //   const [weather, setWeather] = useState<Iweather>();

  const onSubmit: SubmitHandler<Itasks> = (data) => {
    setTasks((old) => [
      ...old,
      {
        id: data.id,
        title: data.title,
        startFrom: moment(dateStart).locale("pt-br").format("DD MMMM YYYY"),
        finish: moment(dateFinish).locale("pt-br").format("DD MMMM YYYY"),
        place: data.place,
        notes: data.notes,
      },
    ]);
    reset();
  };

  const handleClick = (e: any) => {
    setDateStart(e);

    if (e > dateFinish) {
      alert("Error: Invalid Date");
    } else {
      setisOpenCalendarStart(!isOpenCalendarStart);
    }
  };

  const handleClickFinish = (e: any) => {
    setdateFinish(e);
    console.log(dateFinish, dateStart);

    if (e < dateStart) {
      alert("Error: Invalid Date");
    } else {
      setisOpenCalendarFinish(!isOpenCalendarFinish);
    }
  };

  //   const getWeather = async () => {
  //     const response: Iweather = await GetInfo({ latitude, longitude });
  //     console.log(response);
  //     setWeather(response);
  //     setConvert(response.main.temp - 273);
  //   };

  //   const getLocation = async () => {
  //     await navigator.geolocation.getCurrentPosition((position) => {
  //       setLatitude(position.coords.latitude);
  //       setLongitude(position.coords.longitude);
  //     });
  //   };

  //   useEffect(() => {
  //     getLocation();
  //   }, []);

  //   useEffect(() => {
  //     getWeather();
  //   }, [latitude, longitude]);

  // const icon = `http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`;

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.body}>
        <div className={styles.left}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>New Task</h1>
            <input
              id="title"
              type="text"
              placeholder="Title"
              {...register("title", { required: true })}
            />
            {errors.title && errors.title.type === "required" && (
              <span className={styles.span}>This is required</span>
            )}

            <NewTask
              title="Start from"
              info={moment(dateStart).locale("pt-br").format("DD MMMM YYYY")}
              press={() => setisOpenCalendarStart(!isOpenCalendarStart)}
            />
            {isOpenCalendarStart && (
              <div>
                <Calendar
                  className={styles.calendar}
                  onChange={handleClick}
                  value={dateStart}
                />
              </div>
            )}

            <NewTask
              title="Finish"
              info={moment(dateFinish).locale("pt-br").format("DD MMMM YYYY")}
              press={() => setisOpenCalendarFinish(!isOpenCalendarFinish)}
            />
            {isOpenCalendarFinish && (
              <div className={styles.calendar}>
                <Calendar onChange={handleClickFinish} value={dateFinish} />
              </div>
            )}

            <input
              id="place"
              className="input"
              placeholder="Place"
              {...register("place", { required: true })}
            />
            {errors.place && errors.place.type === "required" && (
              <span className={styles.span}>This is required</span>
            )}

            <input
              id="notes"
              className="input"
              placeholder="Notes"
              {...register("notes", { required: true })}
            />
            {errors.notes && errors.notes.type === "required" && (
              <span className={styles.span}>This is required</span>
            )}

            <button type="submit" className={styles.submit}>
              Cadastrar
            </button>
          </form>
        </div>

        {tasks.length > 0 && (
          <div className={styles.right}>
            <section>
              <h2>To Do</h2>
              {tasks.map((item) => (
                <Box
                  title={item.title}
                  place={item.place}
                  notes={item.notes}
                  date={item.startFrom}
                  dateFinish={item.finish}
                />
              ))}
            </section>
          </div>
        )}
      </div>

      <div className={styles.footer}>
        <p>Developed by Bruna Oliveira, © 2022</p>
        {/* <h1>{convert.toFixed(2)}°C</h1> */}
      </div>
    </div>
  );
};