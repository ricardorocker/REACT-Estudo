import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false);

    return (
        <div>
            <h1>Conditional Render</h1>
            <p>Isso será exibido?</p>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora o x é falso!</p>}
        </div>
    )
}
export default ConditionalRender;