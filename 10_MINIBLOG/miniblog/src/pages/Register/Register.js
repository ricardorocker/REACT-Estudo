import styles from "./Register.module.css";

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p className={styles.register}>Crie seu usuário e compartilhe suas histórias</p>
      <form>
        <label>
          <span>Nome</span>
          <input
            type="text"
            name="displayName"
            placeholder="Nome do usuário"
            required
          />
        </label>
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="E-mail do usuário"
            required
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            placeholder="Senha do usuário"
            required
          />
        </label>
        <label>
          <span>Confirmação de senha</span>
          <input
            type="password"
            name="password"
            placeholder="Confirme sua senha"
            required
          />
        </label>
        <button type="submit" className="btn">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Register;
