import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import usercontext from '../../context/Context';
import { ITask } from '../../interface/task';
import { AddTask } from '../../services/AddTask';
import { DeleteTask } from '../../services/DeleteTask';
import { EditTask } from '../../services/EditTask';
import { FetchTasks } from '../../services/FetchTasks';
import ComponentTask from './ComponentTask';
import './task.css';
import { ImExit } from 'react-icons/im';

function TaskManager() {
  const { token } = useContext(usercontext);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [task, setTask] = useState<string>('');
  const [toHome, setToHome] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [tasAdd, setTaskAdd] = useState('adicionar');
  const [activeButton, setActiveButton] = useState(false);

  function delay(n: number) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }

  const findTasks = async (withDelay?: boolean) => {
    setLoading(true);

    setStatusMessage('Estamos buscando sua lista de tarefas atualizada');

    if (token.length < 10) {
      alert('Ops, algo deu errado, por favor, faça login novamente');
      setToHome(true);
      return;
    }

    // Este delay foi colocado porque quando adicionamos uma tarefa nova não dava tempo do bando de dados atualizar e a lista vinha desatualizada.
    if (withDelay) {
      await delay(1.5);
    }

    const response = await FetchTasks(token);

    if (response.message) {
      setToHome(true);
      alert('Ops, algo deu errado, por favor, faça login novamente');
      return;
    }

    setTasks(response.Task);
    setLoading(false);
  };

  const exit = () => {
    localStorage.clear();
    setToHome(true);
  }

  const newTask = async () => {
    setLoading(true);
    setTask('');
    setStatusMessage('Estamos adicionando sua nova tarefa');

    const response = await AddTask(token, task as string, 'pending');

    if (response.message !== 'created task') {
      setToHome(true);
      alert('Ops, algo deu errado, por favor, faça login novamente');
      return;
    }

    findTasks(true);
  };

  const removeTask = async (idTask: number) => {
    const updatedList = tasks.filter(({ id }) => id !== idTask);
    setTasks(updatedList);

    const response = await DeleteTask(token, idTask);

    if (response.message !== 'task removed') {
      setToHome(true);
      alert('Ops, algo deu errado, por favor, faça login novamente');
      return;
    }
  };

  const UpdateTask = async (idTask: number, task: string, status: string) => {
    setStatusMessage('Estamos atualizando sua tarefa');

    const response = await EditTask(token, idTask, task, status);

    if (response.message) {
      setToHome(true);
      alert('Ops, algo deu errado, por favor, faça login novamente');
      return;
    }
  };

  useEffect(() => {
    if (task.length > 0) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [task]);

  useEffect(() => {
    if (window.screen.width < 400) {
      setTaskAdd('add');
    }

    findTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                value={task}
                onChange={({ target }) => setTask(target.value)}
                minLength={3}
              />
              <button
                type="submit"
                className="new-task-submit"
                onClick={() => newTask()}
                disabled={!activeButton}
              >
                {tasAdd}
              </button>
            </form>
          </header>

          <main className="main-task">
            <section className="task-list">
              <h2>{tasks.length > 0 ? 'Tarefas' : 'Sua lista está vazia'}</h2>
              <>
                {tasks.map((current) => (
                  <div className="tasks" key={current.id}>
                    <ComponentTask
                      task={current}
                      remove={removeTask}
                      update={UpdateTask}
                    />
                  </div>
                ))}
              </>
            </section>
          </main>

          <button
            type="button"
            className="exit-button"
            onClick={() => exit()}
          >
            <ImExit />
          </button>
        </>
      )}
    </>
  );
}

export default TaskManager;
