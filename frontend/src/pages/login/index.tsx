import { useState } from "react";
import logotipo from "./images/logotipo.png";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem vindo! 😃</span>

            <span className="login-form-title">
              <img src={logotipo} alt="imagem da logotipo" />
            </span>

            <div className="wrap-input">
              <input
                className={email.length > 0 ? "input has-value" : "input"}
                type="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
              <span className="focus-input" data-placeholder="E-mail" />
            </div>

            <div className="wrap-input">
              <input
                className={password.length > 0 ? "input has-value" : "input"}
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <span className="focus-input" data-placeholder="Senha" />
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Entrar</button>
            </div>

            <div className="create-account-text-center">
              <span className="create-account-text">Não possui conta?</span>
              <a href="/" className="create-account-link">
                Criar conta.
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
