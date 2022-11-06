const ShowUserName = (props) => {
    return (
        <div>
            <h1>Props</h1>
            O nome do usuário:
                <h4>{props.name}</h4>
            O login do usuário:
                <h4>{props.login}</h4>
        </div>
    );
};
export default ShowUserName;