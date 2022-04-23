// Styles
import styles from "./styles.module.scss";

interface Props {
  title: string;
  place: string;
  notes: string;
  date: string;
  dateFinish: string;
}

export const Box = ({ title, place, notes, date, dateFinish }: Props) => {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>
          {date} - {dateFinish}
        </p>
      </div>

      <div className={styles.notes}>
        <p>{notes}</p>
      </div>

      <div className={styles.place}>
        <p>{place}</p>
      </div>
    </div>
  );
};
