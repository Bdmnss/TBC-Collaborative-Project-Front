import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomeLayout } from './pages/home';
import { LogIn } from './pages/logIn';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="login" element={<LogIn />} />
    </Routes>
  );
}

export default App;
