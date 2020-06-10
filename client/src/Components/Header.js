import React from 'react';
import misoLogo from '../assets/img/misotech_logo.png';
import Dropdown from './Dropdown';

import insta__icon from '../assets/img/icon/instagram_icon.png';

const ListDataArr = [
  {
    mainTitle: '회사소개',
    dropdownData: {
      title_ko: '회사소개',
      title_en: 'about miso',
      sub_menuArr: [
        {
          title: '인사말/회사연혁',
          link: '/company/introduce',
        },
        {
          title: '오시는길',
          link: '/company/map',
        },
      ],
    },
  },
  {
    mainTitle: '제품소개',
    dropdownData: {
      title_ko: '제품소개',
      title_en: 'product',
      sub_menuArr: [
        {
          title: '슬라이딩 도어',
          link: '/company/introduce',
        },
        {
          title: '연동 도어',
          link: '/company/map',
        },
        {
          title: '여닫이 도어',
          link: '/company/map',
        },
        {
          title: '스윙 도어',
          link: '/company/map',
        },
        {
          title: '파티션',
          link: '/company/map',
        },
        {
          title: '하드웨어',
          link: '/company/map',
        },
      ],
    },
  },
  {
    mainTitle: '프로모션',
    dropdownData: {
      title_ko: '홍보 & 뉴스',
      title_en: 'promotion',
      sub_menuArr: [
        {
          title: '중문 카다로그',
          link: '/company/introduce',
        },
        {
          title: '유리 카다로그',
          link: '/company/map',
        },
        {
          title: '시방서',
          link: '/company/map',
        },
        {
          title: '미소테크 소식',
          link: '/company/map',
        },
        {
          title: '중문상식',
          link: '/company/map',
        },
      ],
    },
  },
  {
    mainTitle: '포트폴리오',
    dropdownData: {
      title_ko: '포트폴리오',
      title_en: 'portfolid',
      sub_menuArr: [
        {
          title: '모델하우스',
          link: '/company/introduce',
        },
        {
          title: '아파트',
          link: '/company/map',
        },
        {
          title: '사무실',
          link: '/company/map',
        },
        {
          title: '드라마협찬',
          link: '/company/map',
        },
        {
          title: '시공사진',
          link: '/company/map',
        },
      ],
    },
  },
  {
    mainTitle: '고객지원',
    dropdownData: {
      title_ko: '고객지원',
      title_en: 'cs center',
      sub_menuArr: [
        {
          title: '온라인 상담',
          link: '/company/introduce',
        },
        {
          title: '회원사 안내',
          link: '/company/map',
        },
        {
          title: '담당자 안내',
          link: '/company/map',
        },
      ],
    },
  },
];

const Header = () => {
  return (
    <>
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
                <a
                  href="https://www.instagram.com/misotech/"
                  target="_blank"
                  className="header__link">
                  <img
                    src={insta__icon}
                    alt="instagram_icon"
                    className="instagram__icon"
                  />
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
              {ListDataArr.map((list, index) => (
                <li className="header__item" key={index}>
                  <a href="" className="header__link">
                    {list.mainTitle}
                  </a>
                  <Dropdown className="dropdown" data={list.dropdownData} />
                </li>
              ))}
              <li className="header__item">
                <a href="" className="header__link">
                  전화상담문의
                </a>
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
    </>
  );
};

export default Header;
