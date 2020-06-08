import React from 'react';
import misoLogo from '../assets/img/misotech_logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__row">
        <div className="header__column">
          <img src={misoLogo} alt="miso_logo" className="header__logo" />
          <span className="header__span">고객의 미소가 저희의 행복입니다</span>
        </div>
        <div className="header__column">
          <ul className="header__list">
            <li className="header__item">
              <a href="" className="header__link">
                로그인
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                회원가입
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__row"></div>
    </header>
  );
};

export default Header;
