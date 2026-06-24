import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ItemRepo from '../../components/ItemRepo/ItemRepo';
import './Perfil.css';

const Perfil = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const fetchDados = async () => {
      setLoading(true);
      setErro(false);
      try {
        const [resUser, resRepos] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`),
        ]);

        if (!resUser.ok) throw new Error('Usuário não encontrado');

        const dataUser = await resUser.json();
        const dataRepos = await resRepos.json();

        setUser(dataUser);
        setRepos(dataRepos);
      } catch {
        setErro(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDados();
  }, [username]);

  return (
    <>
      <Header />
      <main className="perfil">
        {loading && <p className="perfil__msg">Carregando...</p>}

        {erro && <p className="perfil__msg perfil__msg--erro">Usuário não encontrado.</p>}

        {!loading && !erro && user && (
          <>
            <div className="perfil__card">
              <img className="perfil__avatar" src={user.avatar_url} alt={user.login} />
              <div className="perfil__info">
                <h1 className="perfil__nome">{user.name || user.login}</h1>
                <p className="perfil__login">@{user.login}</p>
                {user.bio && <p className="perfil__bio">{user.bio}</p>}
                <div className="perfil__stats">
                  <span>{user.public_repos} repositórios</span>
                  <span>{user.followers} seguidores</span>
                  <span>{user.following} seguindo</span>
                </div>
              </div>
            </div>

            <h2 className="perfil__subtitulo">Repositórios</h2>
            <div className="perfil__lista">
              {repos.map((repo) => (
                <ItemRepo key={repo.id} repo={repo} />
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Perfil;
