import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Home.css';

const Home = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (username.trim() === '') return;
    navigate(`/perfil/${username.trim()}`);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <>
      <Header />
      <main className="home">
        <h1 className="home__title">Buscar perfil do GitHub</h1>
        <p className="home__subtitle">Digite um nome de usuário para ver os repositórios</p>
        <div className="home__form">
          <input
            className="home__input"
            type="text"
            placeholder="ex: SamaraAlanna"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKey}
          />
          <button className="home__btn" onClick={handleSearch}>
            Buscar
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
