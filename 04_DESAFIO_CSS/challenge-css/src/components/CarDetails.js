import styles from "./CarDetails.module.css"

const CarDetails = ({ brand, kilometers, color, newCar }) => {
    return (
        <div>
            <h2>{brand}</h2>
            <p>Kilometros Rodados: {kilometers}km</p>
            <p>Cor: {color}</p>
            <p>Novo: {newCar ? (
                <span className={styles.new_car}>"Sim"</span>
            ) : (
                <span className={styles.not_new_car}>"Não"</span>
            )}</p>
        </div>
    )
}

export default CarDetails