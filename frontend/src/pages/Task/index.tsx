import { useState } from 'react';
import './task.css';

function Task() {
  const tarefas = {
    id: 11,
    name: 'Brett Wiltshire',
    email: 'brett5@email.com',
    Task: [
      {
        id: 27,
        task: 'hello word',
        status: 'done',
        createIn: '2022-07-01T22:59:42.739Z',
        updatedAt: '2022-07-01T22:59:42.740Z',
      },
      {
        id: 28,
        task: 'hello word 2',
        status: 'in progress',
        createIn: '2022-07-01T22:59:45.820Z',
        updatedAt: '2022-07-01T22:59:45.821Z',
      },
      {
        id: 29,
        task: 'hello word 3',
        status: 'pending',
        createIn: '2022-07-01T22:59:51.211Z',
        updatedAt: '2022-07-01T22:59:51.211Z',
      },
    ],
  };

  return (
    <>
      <header className="header-task">
        <h1>Lista de Tarefas</h1>
        <form className="new-task-form">
          <input
            type="text"
            placeholder="O que está planejando?"
            className="new-task-input"
          />
          <input type="submit" className="new-task-submit" value="Adicionar" />
        </form>
      </header>

      <main className="main-task">
        <section className="task-list">
          <h2>Tarefas</h2>
          <>
            {tarefas.Task.map((atual) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [edit, setEdit] = useState(false);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [status, setStatus] = useState(atual.status);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [task, setTask] = useState(atual.task);

              return (
                <div className="tasks" key={atual.id}>
                  {edit ? (
                    <>
                      <div className="content">
                        <input
                          type="text"
                          className="text"
                          value={task}
                          onChange={({ target }) => setTask(target.value)}
                        />
                      </div>
                      <div className="actions">
                        <select
                          className="form-select"
                          value={status}
                          onChange={({ target }) => setStatus(target.value)}
                        >
                          <option value="pending">Pendente</option>
                          <option value="in progress">Em andamento</option>
                          <option value="done">Completa</option>
                        </select>
                        <button className="edit" onClick={() => setEdit(false)}>
                          Salvar
                        </button>
                        <button className="delete">🗑️</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="content">
                        <input
                          type="text"
                          className="text"
                          value={task}
                          readOnly
                        />
                      </div>
                      <div className="actions">
                        <select className="form-select" value={status} disabled>
                          <option value="pending">Pendente</option>
                          <option value="in progress">Em andamento</option>
                          <option value="done">Completa</option>
                        </select>
                        <button className="edit" onClick={() => setEdit(true)}>
                          Editar
                        </button>
                        <button className="delete">🗑️</button>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </>
        </section>
      </main>
    </>
  );
}

export default Task;
