const UserDetails = ({ name, age, job }) => {
    return (
        <div>
                <h3>{name}</h3>
                <p>Idade: {age}</p>
                <p>Profissão: {job}</p>
                {age > 17 ? (
                    <p>Pode tirar CNH</p>
                ) : (
                    <p>Menor de idade!</p>
                )}
        </div>
    );
};
export default UserDetails;
