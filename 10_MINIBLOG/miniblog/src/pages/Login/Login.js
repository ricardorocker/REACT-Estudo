import styles from "./Login.module.css";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <span>Usuário</span>
        <input type="text" id="user" />
        <span>Senha</span>
        <input type="password" id="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
