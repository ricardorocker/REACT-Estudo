import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Petrucia");

    return (
        <div>
            <h1>Conditional Render</h1>
            <p>Isso será exibido?</p>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora o x é falso!</p>}

            {/* If e else no JSX */}
            <h3>IF TERNÁRIO</h3>
            {name === "Ricardo" ? (
                <div>
                    <p>O nome é Ricardo!</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
            <button onClick={() => setName("Ricardo")}>Mudar para Ricardo!</button>
        </div>
    )
}
export default ConditionalRender;