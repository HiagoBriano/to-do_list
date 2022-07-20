import { useContext, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import usercontext from '../../context/Context';
import logotipo from '../../images/logotipo.png';
import { CreateAccount } from '../../services/CreateAccount';
import './register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validatePassword, setValidatePassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [status, setStatus] = useState('');
  const [activeButton, setActiveButton] = useState(false);
  const [toLogin, setToLogin] = useState(false);
  const { setToken } = useContext(usercontext);

  useEffect(() => {
    const regexEmail = /\S+@\S+\.\S+/;
    const regexName = /^[a-z ]+$/i;
    if (
      password.length > 5 &&
      regexEmail.test(email) &&
      password === validatePassword &&
      regexName.test(name)
    ) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [email, name, password, validatePassword]);

  const validData = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus('Estamos criando sua conta 😃');
    const response = await CreateAccount(name, email, password);

    if (response && response.message) {
      setLoading(false);
      alert('Ops, parece que você já tem cadastro com a gente');
      setToLogin(true);
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
      {toLogin && <Navigate to="/" />}
      {loading ? (
        <Loading status={status} />
      ) : (
        <Layout>
          <form className="register-form">
            <span className="register-form-title">Criar conta</span>

            <span className="register-form-title register-logotipo">
              <img src={logotipo} alt="imagem da logotipo" />
            </span>

            <div className="wrap-input">
              <input
                className={name.length > 0 ? 'input has-value' : 'input'}
                type="text"
                minLength={3}
                value={name}
                onChange={({ target }) => setName(target.value)}
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
                title='Digite uma senha de pelo menos 6 caracteres'
              />
              <span className="focus-input" data-placeholder="Senha" />
            </div>

            <div className="wrap-input">
              <input
                className={
                  validatePassword.length > 0 ? 'input has-value' : 'input'
                }
                type="password"
                minLength={6}
                value={validatePassword}
                onChange={({ target }) => setValidatePassword(target.value)}
                title='Repita a senha digitada anteriomente'
              />
              <span
                className="focus-input"
                data-placeholder="Confirme a sua senha"
              />
            </div>

            <div className="container-register-form-btn">
              <button
                className={`register-form-btn ${!activeButton && 'btn-off'}`}
                onClick={(event) => validData(event)}
                disabled={!activeButton}
              >
                Registrar
              </button>
            </div>

            <div className="create-account-text-center">
              <span className="create-account-text">Já possui conta?</span>
              <Link to="/" className="create-account-link">
                Fazer login.
              </Link>
            </div>
          </form>
        </Layout>
      )}
    </>
  );
}

export default Register;
