// React
import { useHistory } from "react-router-dom";

// React Hook Form
import { useForm, SubmitHandler } from "react-hook-form";

// Components
import { Header } from "../../components/Header";

// Styles
import styles from "./styles.module.scss";

interface IUser {
  user: string;
}

export const FirstScreen = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUser>();

  const history = useHistory();

  const onSubmit: SubmitHandler<IUser> = (data) => {
    history.push("/tasks");
    localStorage.setItem("@todo:user", data.user);
    reset();
  };

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.body}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>What's your name?</p>
          <input
            type="text"
            id="user"
            className="input"
            placeholder="type here..."
            {...register("user", { required: true })}
          ></input>
          {errors.user && errors.user.type === "required" && (
            <span className="span">This is required</span>
          )}

          <div>
            <button type="submit">Next</button>
          </div>
        </form>
      </div>

      <div className={styles.footer}>
        <p>Developed by Bruna Oliveira, © 2022</p>
      </div>
    </div>
  );
};