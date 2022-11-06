const ExecuteFunction = ({ functionFather }) => {
    return (
        <div>
            <h1>Função com prop</h1>
            <button onClick={functionFather}>Executar função componente pai</button>
            <p id="textInserido"></p>
        </div>
    );
};
export default ExecuteFunction;