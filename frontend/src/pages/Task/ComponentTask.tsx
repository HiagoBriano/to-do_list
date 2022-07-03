import { useState } from 'react';


interface ITask {
  id: number;
  task: string;
  status: 'done' | 'in progress' | 'pending';
  createIn: any;
  updatedAt: any;
}

interface IProps {
  task: ITask;
}

function ComponentTask({ task }: IProps) {
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
              onChange={({ target }) =>
                setCurrentTask(target.value)
              }
            />
          </div>
          <div className="actions">
            <select
              className="form-select"
              value={status}
              onChange={({ target }) =>
                setStatus(
                  target.value as
                    | 'done'
                    | 'in progress'
                    | 'pending'
                )
              }
            >
              <option value="pending">Pendente</option>
              <option value="in progress">Em andamento</option>
              <option value="done">Completa</option>
            </select>
            <button
              className="edit"
              onClick={() => setEdit(false)}
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
            <button
              className="edit"
              onClick={() => setEdit(true)}
            >
              Editar
            </button>
            <button className="delete">🗑️</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ComponentTask;
