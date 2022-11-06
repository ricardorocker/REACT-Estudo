const ChangeMessageState = ({ handleMessage }) => {
    const msg = [
        "Junior React Dev",
        "Pleno React Dev",
        "Senior React Dev"
    ];

    return (
        <div>
            <button onClick={() => { handleMessage(msg[0]) }}>1</button>
            <button onClick={() => { handleMessage(msg[1]) }}>2</button>
            <button onClick={() => { handleMessage(msg[2]) }}>3</button>
        </div>
    );
};
export default ChangeMessageState;