import './MyForm.css';

import { useState } from 'react';

// 6 - Controlled inputs (user)
const MyForm = ({ user }) => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário!");
        console.log(name, email);
    }

    console.log("Name", name);
    console.log("Email", email);

    return (
        <div>
            {/* 1 - Criação de Form */}
            <form
                // 5 - Envio de Form
                onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite o seu nome"
                        onChange={handleName}
                        value={user.name}
                    />
                </div>
                {/* 2 - Label envolvendo Input */}
                <label>
                    <span>Email:</span>
                    <input
                        type="text"
                        name="email"
                        placeholder="Digite o seu email"
                        // 4 - Alteração de State Inline (Simplificação manipulação de state)
                        onChange={(e) => setEmail(e.target.value)}
                        value={user.email}
                    />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
export default MyForm;