const Events = () => {

    const handleMyEvent = (event) => {
        console.log(event);

        console.log("Ativou o evento!");
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>
                    Clique Aqui!
                </button>
            </div>
            <div>
                <button onClick={() => console.log("Função inline")}>
                    Clique Aqui tambem!
                </button>
            </div>
            <div>
                <button onClick={() => {
                    if (true){
                        console.log("Isso não deveria existir, esta complicando o html desnecessariamente!")
                    }
                }}>
                    Clique Aqui, por favor.
                </button>
            </div>
        </div>
    );
};

export default Events;