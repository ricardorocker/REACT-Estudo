import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Snow", "Lannister", "Stark"]);

    return (
        <div>
            <h1>ListRender</h1>
            <ul>
                {list.map((sobrenome) => (
                    <li>{sobrenome}</li>
                ))}
            </ul>
        </div>
    )
}
export default ListRender;