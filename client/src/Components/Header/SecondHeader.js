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
  display: flex;
  background: black;
  padding: 0 10vw;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div``;

const List = styled.ul`
  display: flex;
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
  font-size: 15px;
  font-weight: 700;
  width: 8.5vw;
  display: flex;
  justify-content: center;
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
  color: white;
  font-size: 16px;
`;

const Text = styled.span`
  font-weight: 800;
`;

const SLink = styled(Link)`
  padding: 8.5px 0;
`;

const Form = styled.form``;

const Input = styled.input`
  font-size: 16px;
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
      img_src: productImg,

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
      title_en: 'portfolio',
      img_src: portfolioImg,
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
              <SLink href="/">{list.mainTitle}</SLink>
              <Dropdown data={list.dropdownData} />
            </Item>
          ))}
          <Item>
            <SLink href="/">전화상담문의</SLink>
          </Item>
        </List>
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
