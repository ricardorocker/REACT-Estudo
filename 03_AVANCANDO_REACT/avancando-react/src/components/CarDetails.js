const CarDetails = ({ brand, year, color, newCar }) => {
    return (
        <div>
            <h4>Detalhes do Carro</h4>
            <ul>
                <li>Marca: {brand}</li>
                <li>Ano: {year}</li>
                <li>Cor: {color}</li>
            </ul>
            {newCar && <p>Esse carro é zero!</p>}
        </div>
    );
};
export default CarDetails;