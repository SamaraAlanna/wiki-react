import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <span className="header__logo" onClick={() => navigate('/')}>
        Wiki React
      </span>
    </header>
  );
};

export default Header;
