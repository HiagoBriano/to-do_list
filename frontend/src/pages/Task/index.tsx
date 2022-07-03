import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import usercontext from '../../context/Context';
import { FetchTasks } from '../../services/FetchTasks';
import ComponentTask from './ComponentTask';
import './task.css';

function TaskManager() {
  const { token } = useContext(usercontext);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [toHome, setToHome] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  interface ITask {
    id: number;
    task: string;
    status: 'done' | 'in progress' | 'pending';
    createIn: any;
    updatedAt: any;
  }

  const findTasks = async () => {
    if (token.length < 10) {
      alert('Ops, algo deu errado, por favor, faça login novamente');
      setToHome(true);
      return;
    }

    setLoading(true);

    setStatusMessage('Estamos buscando sua lista de tarefas atualizada');
    const response = await FetchTasks(token);

    if (response.message) {
      setLoading(false);
      setToHome(true);
      alert('Ops, algo deu errado, por favor, faça login novamente');
      return;
    }
    setTasks(response.Task);
    setLoading(false);
  };

  useEffect(() => {
    findTasks();
  }, []);

  return (
    <>
      {toHome && <Navigate to="/" />}
      {loading ? (
        <Loading status={statusMessage} />
      ) : (
        <>
          <header className="header-task">
            <h1>Lista de Tarefas</h1>
            <form className="new-task-form">
              <input
                type="text"
                placeholder="O que está planejando?"
                className="new-task-input"
              />
              <input
                type="submit"
                className="new-task-submit"
                value="Adicionar"
              />
            </form>
          </header>

          <main className="main-task">
            <section className="task-list">
              <h2>Tarefas</h2>
              <>
                {tasks.map((current) => (
                  <ComponentTask task={current} />
                ))}
              </>
            </section>
          </main>
        </>
      )}
    </>
  );
}

export default TaskManager;
