import './MyForm.css';

import { useState } from 'react';

const MyForm = () => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value)
    }

    console.log("Name (e.target.value)", name);
    console.log("Email", email);

    return (
        <div>
            {/* 1 - Criação de Form */}
            <form>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" placeholder="Digite o seu nome"
                        onChange={handleName} />
                </div>
                {/* 2 - Label envolvendo Input */}
                <label>
                    <span>Email:</span>
                    <input type="text" name="email" placeholder="Digite o seu email" 
                    // 4 - Alteração de State Inline
                    onChange={(e) => setEmail(e.target.value)} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
export default MyForm;