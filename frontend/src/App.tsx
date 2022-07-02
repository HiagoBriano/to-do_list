import { Route, Routes } from 'react-router-dom';
import UserContextProvider from './context/Provider';
import Login from './pages/Login';
import Register from './pages/Register';
import TaskManager from './pages/Task';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/task" element={<TaskManager />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
