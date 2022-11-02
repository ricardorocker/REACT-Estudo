const TemplateExpressions = () => {

    const name = "Ricardo Rocker";
    const data = {
        age: 27,
        job: "Programmer",
    };

    return (
        <div>
            <h3>Olá {name}, tudo bem?</h3>
            <p>Voce atua como {data.job}.</p>
            <p>
                console.log feito com template expressions nessa parte. {console.log("JSX React")}
            </p>
        </div>
    );
};

export default TemplateExpressions;