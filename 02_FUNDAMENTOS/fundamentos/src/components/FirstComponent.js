//  arquivo de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {
    // essa função faz isso

    /*
    multi line
    */
    return (
        <div>
            {/* Comentário dentro do elemento pai */}
            <h1>Meu primeiro compenente</h1>
            <p className="teste">
                Teste de atributo class(className), pois class é classe de JS.
            </p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;
