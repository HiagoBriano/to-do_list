import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Task from './pages/Task';


function App() {
  return (
    <Routes>
      <Route path="/task" element={<Task />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
