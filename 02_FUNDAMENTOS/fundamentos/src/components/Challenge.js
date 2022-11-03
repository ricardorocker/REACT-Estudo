const Challenge = () => {
    let age = 27;
    let years = 5;
    const ageWithChildrens = age + years;

    const result = (x) => {
        if (x && ageWithChildrens) {
            return <p>Voce terá {ageWithChildrens} anos quando tiver filhos.</p>
        }
    }

    return (
        <div>
            <h3>
                Voce tem {age} anos e quer ter filhos em {years} anos.
            </h3>
            <div>
                <button onClick={result(true)}>Calcular idade com filhos</button>
            </div>
            <div>
                {result}
            </div>
        </div>
    );
};
export default Challenge;