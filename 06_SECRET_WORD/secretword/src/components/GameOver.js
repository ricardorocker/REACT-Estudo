import './GameOver.css'

const GameOver = ({ retry, score }) => {
    return (
        <div className="gameOver">
            <h1>Game Over</h1>
            <h2>
                A sua pontuação foi: <span>{score}</span>
            </h2>
            <button onClick={retry}>Resetar jogo</button>
            <p>Feito por Ricardo Rocker</p>
        </div>
    )
}
export default GameOver;