import './MyForm.css';

const MyForm = () => {
    return (
        <div>
            {/* 1 - Criação de Form */}
            <form>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" placeholder="Digite o seu nome" />
                </div>
                {/* 2 - Label envolvendo Input */}
                <label>
                    <span>Email:</span>
                    <input type="text" name="name" placeholder="Digite o seu email" />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
export default MyForm;