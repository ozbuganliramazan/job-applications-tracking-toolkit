import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h2>İşin Hazır</h2>
      <div>
        <Link to={'/'}>İş Listesi</Link>
        <Link to={'/add-job'}>İş Ekle</Link>
      </div>
    </header>
  );
};

export default Header;
