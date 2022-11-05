import { useState } from "react";

const ListRender = () => {
    // Sem chave unica
    const [list] = useState(["Snow", "Lannister", "Stark"]);

    // Com chave unica
    const [familys, setFamily] = useState([
        { id: 1, name: "Snow", qtde: 2 },
        { id: 2, name: "Lannister", qtde: 8 },
        { id: 3, name: "Stark", qtde: 5 },
    ])

    const deleteRandomFamily = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        // setFamily(familys.filter((family) => family.id !== randomNumber));

        // PREVIOUS STATE
        setFamily((prevFamily) => {
            return prevFamily.filter((family) => {
                return family.id !== randomNumber;
            });
        });
    }
    
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
                {familys.map((familys) => (
                    <li key={familys.id}>
                        {familys.name} - {familys.qtde}
                    </li>
                ))}
            </ul>

            {/* Previous State */}
            <button onClick={deleteRandomFamily}>
                Deletar familia aleatória
            </button>

        </div>
    )
}
export default ListRender;