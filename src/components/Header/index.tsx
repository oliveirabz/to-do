// Styles
import styles from './styles.module.scss';


export const Header = () => {

    const user = localStorage.getItem('@todo:user');

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>To</h1>
                <h1>Do</h1>
            </div>

            <div className={styles.right}>
                <div>
                </div>
                <p>{user}</p>
            </div>
        </div>
    )
}