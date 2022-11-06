const ShowUserName = (props) => {
    return (
        <div>
            <h1>Props</h1>
            <p>O nome do usuário:
                <h4>{props.name}</h4>
            </p>
            <p>O login do usuário:
                <h4>{props.login}</h4>
            </p>
        </div>
    );
};
export default ShowUserName;