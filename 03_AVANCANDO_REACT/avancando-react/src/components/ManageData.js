import {useState} from 'react';

const ManageData = () => {
    // sem useState
    let someData = 10;
    console.log("someData: ", someData);

    // com useState
    const [number, setData] = useState(15);
    console.log("number: ", number);

    return (
        <div>
            <h1>HOOKS: useState</h1>
            {/* sem useState */}
            <p>valor sem useState: {someData}</p>
            <button onClick={() => (someData = 15)}>
                Mudar variavel
            </button>
            {/* Com useState */}
            <p>valor com useState: {number}</p>
            <button onClick={() => setData(25)}>
                Mudar variavel
            </button>
        </div>
    )
}
export default ManageData;