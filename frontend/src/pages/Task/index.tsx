import './task.css';

function Task() {
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
          <div className="tasks">
            <div className="content">
              <input type="text" className="text" value="tarefa 1" />
            </div>
            <div className="actions">
              <select className="form-select">
                <option value="pending" selected>
                  Pendente
                </option>
                <option value="in progress">Em andamento</option>
                <option value="done">Completa</option>
              </select>
              <button className="edit">Editar</button>
              <button className="delete">🗑️</button>
            </div>
          </div>

          <div className="tasks">
            <div className="content">
              <input type="text" className="text" value="tarefa 1" readOnly />
            </div>
            <div className="actions">
              <select className="form-select" disabled>
                <option value="pending">Pendente</option>
                <option value="in progress" selected>
                  Em andamento
                </option>
                <option value="done">Completa</option>
              </select>
              <button className="edit">Editar</button>
              <button className="delete">🗑️</button>
            </div>
          </div>

          <div className="tasks">
            <div className="content">
              <input type="text" className="text" value="tarefa 1" readOnly />
            </div>
            <div className="actions">
              <select className="form-select" disabled>
                <option value="pending" selected>
                  Pendente
                </option>
                <option value="in progress">Em andamento</option>
                <option value="done">Completa</option>
              </select>
              <button className="edit">Editar</button>
              <button className="delete">🗑️</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Task;
