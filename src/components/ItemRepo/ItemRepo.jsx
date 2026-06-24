import './ItemRepo.css';

const ItemRepo = ({ repo }) => {
  return (
    <div className="item-repo">
      <div className="item-repo__info">
        <a className="item-repo__name" href={repo.html_url} target="_blank" rel="noreferrer">
          {repo.name}
        </a>
        {repo.description && <p className="item-repo__desc">{repo.description}</p>}
        <div className="item-repo__meta">
          {repo.language && <span className="item-repo__tag">{repo.language}</span>}
          <span className="item-repo__stars">{repo.stargazers_count} estrelas</span>
          <span className="item-repo__forks">{repo.forks_count} forks</span>
        </div>
      </div>
    </div>
  );
};

export default ItemRepo;
