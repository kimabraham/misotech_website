import React from 'react';
import misoLogo from '../assets/img/misotech_logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__row">
        <div className="header__column">
          <img src={misoLogo} alt="miso_logo" className="header__logo" />
          <span className="header__span">
            고객의 <span>미소</span>가 저희의 <span>행복</span>입니다
          </span>
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
      <div className="header__row">
        <div className="header__column">
          <h1 className="header__companyName">
            주식회사 <span>미소테크</span>
          </h1>
        </div>
        <div className="header__column">
          <ul className="header__list">
            <li className="header__item">
              <a href="">회사소개</a>
            </li>
            <li className="header__item">
              <a href="">제품소개</a>
            </li>
            <li className="header__item">
              <a href="">프로모션</a>
            </li>
            <li className="header__item">
              <a href="">포트폴리오</a>
            </li>
            <li className="header__item">
              <a href="">고객지원</a>
            </li>
            <li className="header__item">
              <a href="">전화상담문의</a>
            </li>
          </ul>
        </div>
        <div className="header__column">
          <form className="header__form">
            <input type="text" className="header__input" />
            <i className="fas fa-search"></i>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
