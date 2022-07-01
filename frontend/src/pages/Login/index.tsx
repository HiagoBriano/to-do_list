import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import logotipo from '../../images/logotipo.png';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Layout>
      <form className="login-form">
        <span className="login-form-title">Bem vindo! 😃</span>

        <span className="login-form-title">
          <img src={logotipo} alt="imagem da logotipo" />
        </span>

        <div className="wrap-input">
          <input
            className={email.length > 0 ? 'input has-value' : 'input'}
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <span className="focus-input" data-placeholder="E-mail" />
        </div>

        <div className="wrap-input">
          <input
            className={password.length > 0 ? 'input has-value' : 'input'}
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
          <Link to="/register" className="create-account-link">
            Criar conta.
          </Link>
        </div>
      </form>
    </Layout>
  );
}

export default Login;
