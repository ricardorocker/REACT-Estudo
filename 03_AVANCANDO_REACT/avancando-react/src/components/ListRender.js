import { useState } from "react";

const ListRender = () => {
    // Sem chave unica
    const [list] = useState(["Snow", "Lannister", "Stark"]);

    // Com chave unica
    const [family] = useState([
        { id: 1, name: "Snow", qtde: 2 },
        { id: 32, name: "Lannister", qtde: 8 },
        { id: 54631, name: "Stark", qtde: 5 },
    ])

    return (
        <div>
            <h1>ListRender</h1>
            <ul>
                {/* SEM PROPRIEDADE KEY
                {list.map((sobrenome) => (
                    <li>{sobrenome}</li>
                ))}
                */}
                {/* Index como key, não sendo chave unica */}
                {list.map((sobrenome, i) => (
                    <li key={i}>{sobrenome}</li>
                ))}
                {/* Usando chave unica */}
                {family.map((family) => (
                    <li key={family.id}>
                        {family.name} - {family.qtde}
                    </li>
                ))}
            </ul>

        </div>
    )
}
export default ListRender;