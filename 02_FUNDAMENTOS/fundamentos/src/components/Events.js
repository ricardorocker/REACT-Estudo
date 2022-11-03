const Events = () => {

    const handleMyEvent = (event) => {
        console.log(event);

        console.log("Ativou o evento!");
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
        </div>
    );
};

export default Events;