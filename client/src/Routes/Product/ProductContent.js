import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Box = styled.div`
  margin: 10vw 0;
  height: ${(props) => props.height};
  background: url(${(props) => props.back});
  background-size: contain;
  background-repeat: no-repeat;
  &:first-child {
    margin: 3vw 0;
  }
`;

const ProductContent = ({ datas }) => {
  return (
    <Container>
      {datas.map((data, index) => (
        <Box key={index} back={data.file} height={data.height} />
      ))}
    </Container>
  );
};

export default ProductContent;
