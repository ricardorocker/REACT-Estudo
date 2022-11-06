import styles from './Title.module.css'

const Title = () => {
    return (
        <div>
            <h2 className={styles['my-title']}>
                Pratica negativa com "-"
            </h2>
            <h2 className={styles.my_title}>
                Convenção correta
            </h2>
        </div>
    )
}

export default Title