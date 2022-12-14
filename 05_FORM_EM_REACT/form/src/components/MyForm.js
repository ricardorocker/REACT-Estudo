import './MyForm.css';

import { useState } from 'react';

// 6 - Controlled inputs (user)
const MyForm = ({ user }) => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState(user ? user.bio : "");
    const [role, setRole] = useState(user ? user.role : "");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário!");
        console.log(name, email, bio, role);

        // 7 - Limpar Formulários
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

    console.log("DETALHES: ", name, email, bio, role);

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
                        value={name}
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
                        value={email}
                    />
                </label>
                {/* 8 - Textarea */}
                <label>
                    <span>Bio: </span>
                    <textarea
                        name="bio"
                        placeholder='Descrição do usuário'
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}>
                    </textarea>
                </label>
                {/* 9 - Select */}
                <label>
                    <span>Tipo Usuário: </span>
                    <select 
                    name="role"
                    onChange={(e) => setRole(e.target.value)}
                    value={role}>
                        <option value="admin">Administrador</option>
                        <option value="saler">Vendedor</option>
                        <option value="gestor">Gerente</option>
                        <option value="dev">Desenvolvedor</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
export default MyForm;