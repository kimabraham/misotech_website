import React from 'react';

const Footer = () => {
  return (
    <footer className="footer__row">
      <div className="footer__column">
        <h1 className="footer__title">misotech</h1>
        <span className="footer__span">주식회사 미소테크</span>
        <span className="footer__span">사업자 번호 : 724-81-01569</span>
        <span className="footer__span">
          경기도 남양주시 화도읍 수레로 25-30
        </span>
        <span className="footer__span">대표이사 : 이성태 오대욱</span>
        <span className="footer__span">
          Copyright ⓒ 주식회사 미소테크 All rights reserved.
        </span>
      </div>
      <div className="footer__column">
        <h1 className="footer__title">customer service</h1>
        <span className="footer__span">Tel. 031-594-1042</span>
        <span className="footer__span">Fax. 031-594-1040</span>
        <span className="footer__span">E-Mail. misotech7@naver.com</span>
        <span className="footer__span">근무시간: 평일 09:00 - 18:00</span>
      </div>
      <div className="footer__column">
        <h1 className="footer__title">follow us</h1>

        <span className="footer__span">
          <i className="fab fa-instagram"></i>&nbsp;instagram ID. misotech7
        </span>
      </div>
    </footer>
  );
};

export default Footer;
