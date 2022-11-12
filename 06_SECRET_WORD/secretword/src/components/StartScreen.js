import "./StartScreen.css"

const StartScreen = ({ startGame }) => {
    return (
        <div className="start">
            <h1>Secret Word</h1>
            <p>Meu primeiro projeto em React - <span>Ricardo Rocker</span></p>            
            <button onClick={startGame}>Começar o jogo</button>
        </div>
    )
}
export default StartScreen;