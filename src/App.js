import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Perfil from './pages/Perfil/Perfil';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:username" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
