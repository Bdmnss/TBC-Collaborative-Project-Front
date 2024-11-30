import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Register from './pages/Register';
import Header from './layout/Header';
import Footer from './layout/Footer';

const App: React.FC = () => {
  return (
    <div className="app-container flex min-h-screen flex-col">
      <Header />
      <main className={'flex-1 p-4'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
