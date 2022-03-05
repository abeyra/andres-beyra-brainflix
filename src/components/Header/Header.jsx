import './Header.scss';
import Logo from '../../assets/logo/BrainFlix-logo.svg';
import Search from '../../assets/icons/search.svg';
import Upload from '../../assets/icons/upload.svg';
import {Link} from 'react-router-dom';

export default function Header() {

    return (
      <header className="menu">
        <Link to="/">
          <img src={Logo} className="menu__logo" alt="logo" />
        </Link>
        <div className="menu__content">
          <div className="menu__container-search">
            <input className="menu__search-bar" placeholder="Search"/>
            <img src={Search} className="menu__magnifying-glass" alt="magnifying glass" />
            <div className='menu__avatar-mobile'></div>
          </div>
          <Link to="/upload">
            <div className="menu__container-upload">
              <button className="menu__button">UPLOAD</button>
              <img src={Upload} className="menu__container-upload-icon" alt="upload svg" />
            </div>
          </Link>
          <div className='menu__avatar-tablet'></div>
        </div>
      </header>
    )
} 
