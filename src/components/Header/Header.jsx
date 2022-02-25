import './Header.scss';
import Logo from '../../assets/logo/BrainFlix-logo.svg';
import Search from '../../assets/icons/search.svg';
import Upload from '../../assets/icons/upload.svg';

function Header(props) {

    return (
        <header className="menu">
        <img src={Logo} className="menu__logo" alt="logo" />

      <div className="menu__content">
        <div className="menu__container-search">
          <input className="menu__search-bar" placeholder="Search"/>
          <img src={Search} className="menu__magnifying-glass" alt="magnifying glass" />
          <div className='menu__avatar'></div>
        </div>
        
        <div className="menu__container-upload">
          <button className="menu__button">UPLOAD</button>
          <img src={Upload} className="menu__upload-svg" alt="upload svg" />
        </div>
        <div className='menu__avatar2'></div>
      </div>
        </header>
    )
} 

export default Header;