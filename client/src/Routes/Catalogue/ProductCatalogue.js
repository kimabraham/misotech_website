import React from 'react';
import styled from 'styled-components';

import catalogueHeader from '../../assets/img/catalogue/catalogueHeader.png';

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: calc((415 / 1920) * 100vw);
  background: url(${(props) => props.back});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Body = styled.img``;

const ProductCatalogue = () => {
  return (
    <Container>
      <Header back={catalogueHeader} />
    </Container>
  );
};

export default ProductCatalogue;
