import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

import companyImg from '../../assets/img/dropdown_company.png';
import customerImg from '../../assets/img/dropdown_customer.png';
import portfolioImg from '../../assets/img/dropdown_portfolio.png';
import productImg from '../../assets/img/dropdown_product.png';
import promotionImg from '../../assets/img/dropdown_promotion.png';

const Container = styled.div`
  width: 100%;
  height: 33px;
  display: flex;
  background: black;
  padding: 0 180px;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    width: 140px;
    height: 100%;
    min-width: 120px;
  }
  &:nth-child(2) {
    justify-content: space-around;
  }
  &:last-child {
    justify-content: flex-end;
    min-width: 200px;
  }
`;

const List = styled.ul`
  display: flex;
  height: 100%;
`;

export const Item = styled.li`
  @keyframes growDown {
    0% {
      transform: scaleY(0);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: scaleY(1);
    }
  }
  color: white;
  font-weight: 400;
  width: 8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 95px;
  > div {
    display: none;
  }
  &:hover {
    > a {
      color: red;
      font-weight: 800;
    }
    > div {
      animation: growDown 400ms ease-in-out forwards;
      display: flex;
      transform-origin: top center;
    }
  }
`;

const Icon = styled.i`
  font-size: 16px;
  color: white;
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 16px;
  color: white;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const SLink = styled(Link)`
  font-size: 15px;
`;

const Form = styled.form`
  min-width: 200px;
`;

const Input = styled.input`
  font-size: 15px;
`;

const ListDataArr = [
  {
    mainTitle: '회사소개',
    dropdownData: {
      title_ko: '회사소개',
      title_en: 'about miso',
      img_src: companyImg,
      sub_menuArr: [
        {
          title: '인사말/회사연혁',
          link: '/company/intro',
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
      img_src: productImg,

      sub_menuArr: [
        {
          title: '슬라이딩 도어',
          link: '/products/one',
        },
        {
          title: '연동 도어',
          link: '/products/link',
        },
        {
          title: '여닫이 도어',
          link: '/products/hinge',
        },
        {
          title: '스윙 도어',
          link: '/products/swing',
        },
        {
          title: '파티션',
          link: '/products/fix',
        },
      ],
    },
  },
  {
    mainTitle: '프로모션',
    dropdownData: {
      title_ko: '홍보 & 뉴스',
      title_en: 'promotion',
      img_src: promotionImg,
      sub_menuArr: [
        {
          title: '중문 카다로그',
          link: '/company/introduce',
        },
        {
          title: '유리 카다로그',
          link: '/company/map',
        },
        // {
        //   title: '시방서',
        //   link: '/company/map',
        // },
        // {
        //   title: '미소테크 소식',
        //   link: '/company/map',
        // },
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
      title_en: 'portfolio',
      img_src: portfolioImg,
      sub_menuArr: [
        {
          title: '모델하우스',
          link: '/portfolio/modelhouse',
        },
        {
          title: '아파트',
          link: '/portfolio/apt',
        },
        {
          title: '사무실',
          link: '/portfolio/office',
        },
        {
          title: '드라마협찬',
          link: '/portfolio/drama',
        },
        {
          title: '시공사진',
          link: '/portfolio/install',
        },
      ],
    },
  },
  {
    mainTitle: '고객지원',
    dropdownData: {
      title_ko: '고객지원',
      title_en: 'cs center',
      img_src: customerImg,
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

const SecondHeader = () => {
  return (
    <Container>
      <Column>
        <Title>
          주식회사 <Text>미소테크</Text>
        </Title>
      </Column>
      <Column>
        <List>
          {ListDataArr.map((list, index) => (
            <Item key={index}>
              <SLink to="#">{list.mainTitle}</SLink>
              <Dropdown data={list.dropdownData} />
            </Item>
          ))}
        </List>
        <Item>
          <SLink to="/">전화상담문의</SLink>
        </Item>
      </Column>
      <Column>
        <Form>
          <Input type="text" />
          <Icon className="fas fa-search"></Icon>
        </Form>
      </Column>
    </Container>
  );
};

export default SecondHeader;
