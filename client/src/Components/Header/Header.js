import React from 'react';
import styled from 'styled-components';

import SecondeHeader from './SecondHeader';
import FirstHeader from './FirstHeader';

const Container = styled.header`
  width: 100%;
`;

const Header = () => {
  return (
    <Container>
      <FirstHeader />
      <SecondeHeader />
    </Container>
  );
};

export default Header;
