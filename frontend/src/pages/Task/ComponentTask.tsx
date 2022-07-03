import { useState } from 'react';
import { ITask } from '../../interface/task';

interface IProps {
  task: ITask;
  remove: (idTask: number) => {};
  update: (idTask: number, task: string, status: string) => {};
}

function ComponentTask({ task, remove, update }: IProps) {
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState(task.status);
  const [currentTask, setCurrentTask] = useState(task.task);

  return (
    <div className="tasks" key={task.id}>
      {edit ? (
        <>
          <div className="content">
            <input
              type="text"
              className="text"
              value={currentTask}
              onChange={({ target }) => setCurrentTask(target.value)}
            />
          </div>
          <div className="actions">
            <select
              className="form-select"
              value={status}
              onChange={({ target }) =>
                setStatus(target.value as 'done' | 'in progress' | 'pending')
              }
            >
              <option value="pending">Pendente</option>
              <option value="in progress">Em andamento</option>
              <option value="done">Completa</option>
            </select>
            <button
              className="edit"
              onClick={() => update(task.id, currentTask, status)}
            >
              Salvar
            </button>
            <button className="delete">🗑️</button>
          </div>
        </>
      ) : (
        <>
          <div className="content">
            <input type="text" className="text" value={currentTask} readOnly />
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
            <button className="delete" onClick={() => remove(task.id)}>
              🗑️
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ComponentTask;
