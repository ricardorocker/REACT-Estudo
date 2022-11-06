const CarDetails = ({ brand, year, color }) => {
    return (
        <div>
            <h4>DESTRUCTURING</h4>
            <p>Detalhes do Carro</p>
            <ul>
                <li>Marca: {brand}</li>
                <li>Ano: {year}</li>
                <li>Cor: {color}</li>
            </ul>
        </div>
    );
};
export default CarDetails;