import { useContext, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import usercontext from '../../context/Context';
import logotipo from '../../images/logotipo.png';
import { Enter } from '../../services/Enter';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [status, setStatus] = useState('');
  const [activeButton, setActiveButton] = useState(false);
  const { setToken } = useContext(usercontext);

  useEffect(() => {
    const regexEmail = /\S+@\S+\.\S+/;
    if (password.length > 5 && regexEmail.test(email)) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [email, password]);

  const validData = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus('Validando e-mail e senha');
    const response = await Enter(email, password);

    if (response && response.message) {
      setLoading(false);
      alert('Usuario ou senha incorreto');
      return;
    }

    setStatus('Só mais um pouco...');
    localStorage.setItem('token', JSON.stringify(response.token));
    setToken(response.token);

    setLoading(false);
    setRedirect(true);
  };

  return (
    <>
      {redirect && <Navigate to="/task" />}
      {loading ? (
        <Loading status={status} />
      ) : (
        <Layout>
          <form className="login-form">
            <span className="login-form-title">Bem vindo! 😃</span>

            <span className="login-form-title login-logotipo">
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
              <button
                className={`login-form-btn ${!activeButton && 'btn-off'}`}
                onClick={(event) => validData(event)}
                disabled={!activeButton}
              >
                Entrar.
              </button>
            </div>

            <div className="create-account-text-center">
              <span className="create-account-text">Não possui conta?</span>
              <Link to="/register" className="create-account-link">
                Criar conta.
              </Link>
            </div>
          </form>
        </Layout>
      )}
    </>
  );
}

export default Login;
