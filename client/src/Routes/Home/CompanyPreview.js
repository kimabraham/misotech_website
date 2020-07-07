import React, { useEffect } from 'react';
import styled from 'styled-components';

import backImg from '../../assets/img/moving_img.png';
import { useState } from 'react';

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 24vw;
  background: url(${(props) => props.backImg});
  background-size: 1905px 465px;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.alignItems};
`;

const Box = styled.div`
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  height: 100%;
  position: relative;
  padding: 0 40px;
  background: rgba(245, 7, 7, 0.7);
  color: white;
  width: 33vw;
  display: ${(props) => (props.display ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.alignItems};
  animation: fadein 15s;
  -moz-animation: fadein 15s; /* Firefox */
  -webkit-animation: fadein 15s; /* Safari and Chrome */
  -o-animation: fadein 15s; /* Opera */
`;

const Title = styled.h1`
  text-align: ${(props) => props.textAlign};
  font-size: 1.8vw;
  font-weight: 800;
  margin: 14px 0 50px 0;
`;

const Text = styled.span`
  text-align: ${(props) => props.textAlign};
  font-size: 0.9vw;
  line-height: 1.8vw;
  width: 100%;
  word-break: keep-all;
`;

const contents = [
  {
    title: '행복한 공간 이야기 미소테크',
    description1: `인테리어 디자인 도어의 미래를 개척하는 혁신 기업입니다.  `,
    description2: `완벽한 공간연출과 인테리어 기능을 동시에 디자인하는`,
    description3: `전문가 집단이 끊임없이 연구하는 창조 기업입니다.`,
    alignItems: 'flex-start',
    textAlign: 'start',
  },
  {
    title: 'MISOTECH의 기술력',
    description1:
      '개발자 출신의 대표를 비롯한 전문기술인들로 구성된 기업입니다.',
    description2: '연구 전담부서를 운영하며 기술력과 자재를 개발하고 있으며,',
    description3: '디자인 특허 30여종을 비롯해 다수의 기술특허를 자랑합니다.',
    alignItems: 'center',
    textAlign: 'center',
  },
  {
    title: '信義를 약속하는 미소테크',
    description1:
      '정직한 마음으로 고객을 위하고 더 나은 기술력으로 신의를 약속합니다.',
    description2: '고객이 아름다운 공간에서 행복한 생활을 할 수 있도록',
    description3: '신의를 지키며 공간의 가치를 창조하겠습니다.',
    alignItems: 'flex-end',
    textAlign: 'end',
  },
];

const CompanyPreview = () => {
  const [show, setShow] = useState(0);

  useEffect(() => {
    const next = (show + 1) % contents.length;
    const id = setTimeout(() => {
      setShow(next);
    }, 15000);
    return () => clearTimeout(id);
  }, [show]);

  return (
    <Container>
      <ImgBox backImg={backImg}>
        {contents.map((content, index) => (
          <Wrap key={index} alignItems={content.alignItems}>
            <Box alignItems={content.alignItems} display={index === show}>
              <Title textAlign={content.textAlign}>{content.title}</Title>
              <Text textAlign={content.textAlign}>{content.description1}</Text>
              <Text textAlign={content.textAlign}>{content.description2}</Text>
              <Text textAlign={content.textAlign}>{content.description3}</Text>
            </Box>
          </Wrap>
        ))}
      </ImgBox>
    </Container>
  );
};

export default CompanyPreview;
