import './Header.scss';
import Logo from '../../assets/logo/BrainFlix-logo.svg';
import Search from '../../assets/icons/search.svg';
import Upload from '../../assets/icons/upload.svg';

export default function Header() {

    return (
      <header className="menu">
        <img src={Logo} className="menu__logo" alt="logo" />
        <div className="menu__content">
          <div className="menu__container-search">
            <input className="menu__search-bar" placeholder="Search"/>
            <img src={Search} className="menu__magnifying-glass" alt="magnifying glass" />
            <div className='menu__avatar-mobile'></div>
          </div>
          <div className="menu__container-upload">
            <button className="menu__button">UPLOAD</button>
            <img src={Upload} className="menu__container-upload-icon" alt="upload svg" />
          </div>
          <div className='menu__avatar-tablet'></div>
        </div>
      </header>
    )
} 
