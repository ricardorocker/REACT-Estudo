import './Game.css'

const Game = ({ verifyLetter }) => {
    return (
        <div>
            <h1>Game</h1>
            <p>A Dica é: </p>
            <h3>{"pickedCategory"}</h3>
            <p>A palavra é: </p>
            <h3>{"pickedWord"}</h3>
            <button onClick={verifyLetter}>Finalizar jogo</button>
        </div>
    )
}
export default Game;