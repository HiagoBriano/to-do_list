import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import logotipo from '../../images/logotipo.png';
import './register.css';

function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validatePassword, setValidatePassword] = useState('');

  return (
    <Layout>
      <form className="login-form">
        <span className="login-form-title">Criar conta</span>

        <span className="login-form-title login-logotipo">
          <img src={logotipo} alt="imagem da logotipo" />
        </span>

        <div className="wrap-input">
          <input
            className={nome.length > 0 ? 'input has-value' : 'input'}
            type='text'
            minLength={3}
            value={nome}
            onChange={({ target }) => setNome(target.value)}
          />
          <span className="focus-input" data-placeholder="Nome" />
        </div>

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
            minLength={6}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <span className="focus-input" data-placeholder="Senha" />
        </div>

        <div className="wrap-input">
          <input
            className={validatePassword.length > 0 ? 'input has-value' : 'input'}
            type="password"
            minLength={6}
            value={validatePassword}
            onChange={({ target }) => setValidatePassword(target.value)}
          />
          <span className="focus-input" data-placeholder="Confirme a sua senha" />
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Registrar</button>
        </div>

        <div className="create-account-text-center">
          <span className="create-account-text">Já possui conta?</span>
          <Link to="/" className="create-account-link">
            Fazer login.
          </Link>
        </div>
      </form>
    </Layout>
  );
}

export default Register;
