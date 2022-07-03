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

function TaskManager() {
  const { token } = useContext(usercontext);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [task, setTask] = useState<string>();
  const [toHome, setToHome] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [tasAdd, setTaskAdd] = useState('adicionar');

  function delay(n: number) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }

  const findTasks = async () => {
    setLoading(true);

    setStatusMessage('Atualizando servidor');

    if (token.length < 10) {
      alert('Ops, algo deu errado, por favor, faça login novamente');
      setToHome(true);
      return;
    }

    await delay(1.5);

    setStatusMessage('Estamos buscando sua lista de tarefas atualizada');
    const response = await FetchTasks(token);

    if (response.message) {
      setToHome(true);
      alert('Ops, algo deu errado, por favor, faça login novamente');
      return;
    }

    setTasks(response.Task);
    setLoading(false);
  };

  const newTask = async () => {
    setLoading(true);
    setTask('');
    setStatusMessage('Estamos adicionando sua nova tarefa');

    if (token.length < 10) {
      alert('Ops, algo deu errado, por favor, faça login novamente');
      setToHome(true);
      return;
    }

    const response = await AddTask(token, task as string, 'pending');

    if (response.message !== 'created task') {
      setToHome(true);
      alert('Ops, algo deu errado, por favor, faça login novamente');
      return;
    }

    findTasks();
  };

  const removeTask = async (idTask: number) => {
    setLoading(true);
    setStatusMessage('Estamos removendo sua tarefa');

    if (token.length < 10) {
      alert('Ops, algo deu errado, por favor, faça login novamente');
      setToHome(true);
      return;
    }

    const response = await DeleteTask(token, idTask);

    if (response.message !== 'task removed') {
      setToHome(true);
      alert('Ops, algo deu errado, por favor, faça login novamente');
      return;
    }

    findTasks();
  };

  const UpdateTask = async (idTask: number, task: string, status: string) => {
    setLoading(true);
    setStatusMessage('Estamos atualizando sua tarefa');

    if (token.length < 10) {
      alert('Ops, algo deu errado, por favor, faça login novamente');
      setToHome(true);
      return;
    }

    const response = await EditTask(token, idTask, task, status);

    if (response.message) {
      setToHome(true);
      alert('Ops, algo deu errado, por favor, faça login novamente');
      return;
    }

    await findTasks();
  };

  useEffect(() => {
    if (window.screen.width < 400) {
      setTaskAdd('add')
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
              <input
                type="submit"
                className="new-task-submit"
                value={tasAdd}
                onClick={() => newTask()}
              />
            </form>
          </header>

          <main className="main-task">
            <section className="task-list">
              <h2>Tarefas</h2>
              <>
                {tasks.map((current) => (
                  <ComponentTask
                    task={current}
                    remove={removeTask}
                    update={UpdateTask}
                  />
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
