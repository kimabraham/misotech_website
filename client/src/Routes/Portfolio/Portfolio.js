import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Scroll from 'react-scroll';

import portFolioMain from '../../assets/img/portfolio/portfolioMain.png';
import apt from '../../assets/img/portfolio/apt.png';
import office from '../../assets/img/portfolio/office.png';
import drama from '../../assets/img/portfolio/drama.png';
import modelHouse from '../../assets/img/portfolio/modelHouse.png';
import install from '../../assets/img/portfolio/install.png';

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: 24.74vw;
  background: url(${(props) => props.back});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Body = styled.div`
  margin: 10vw 0;
  height: 63.5vw;
  background: url(${(props) => props.back});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Portfolio = (props) => {
  const modelRef = useRef();
  const aptRef = useRef();
  const dramaRef = useRef();
  const officeRef = useRef();
  const installRef = useRef();

  const {
    location: { pathname },
  } = props;
  const path = pathname.split('/')[2];

  useEffect(() => {
    const modelOffset = modelRef.current.offsetTop;
    const aptOffset = aptRef.current.offsetTop;
    const dramaOffset = dramaRef.current.offsetTop;
    const officeOffset = officeRef.current.offsetTop;
    const installOffset = installRef.current.offsetTop;
    const scroll = Scroll.animateScroll;
    switch (path) {
      case 'modelhouse':
        scroll.scrollTo(modelOffset - 150, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
        break;
      case 'apt':
        scroll.scrollTo(aptOffset - 150, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
        break;
      case 'drama':
        scroll.scrollTo(dramaOffset - 150, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
        break;
      case 'office':
        scroll.scrollTo(officeOffset - 150, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
        break;
      case 'install':
        scroll.scrollTo(installOffset - 150, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
        break;
      default:
        break;
    }
  }, [path]);

  return (
    <Container>
      <Header back={portFolioMain} />
      <Body ref={modelRef} back={modelHouse} />
      <Body ref={aptRef} back={apt} />
      <Body ref={officeRef} back={office} />
      <Body ref={dramaRef} back={drama} />
      <Body ref={installRef} back={install} />
    </Container>
  );
};

export default withRouter(Portfolio);
