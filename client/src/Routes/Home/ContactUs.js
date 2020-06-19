import React from 'react';
import styled from 'styled-components';
import contactusImg from '../../assets/img/contactus.png';

const Container = styled.div`
  display: flex;
  height: 35vh;
`;

const LeftBox = styled.div`
  min-width: 500px;
  width: 35vw;
  height: 100%;
  background-image: url(${(props) => props.backImg});
  background-position: center -90px;
  background-size: cover;
  background-repeat: no-repeat;
`;

const RightBox = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
`;

const LineBox = styled.div`
  width: 40vw;
  height: 100%;
  display: flex;
  border-bottom: 1px solid black;
  &:last-child {
    border-bottom: none;
  }
`;

const LabelBox = styled.div`
  width: 15vw;
  background: #d7d7d7;
  padding-left: 50px;
  display: flex;
  align-items: center;
`;

const InputBox = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  font-size: 20px;
`;

const Input = styled.input`
  width: 25vw;
  padding: 5px;
  font-size: 20px;
`;

const ContactUs = () => {
  return (
    <Container>
      <LeftBox backImg={contactusImg} />
      <RightBox>
        <LineBox>
          <LabelBox>
            <Label>회사명</Label>
          </LabelBox>
          <InputBox>
            <Input />
          </InputBox>
        </LineBox>
        <LineBox>
          <LabelBox>
            <Label>전화번호</Label>
          </LabelBox>
          <InputBox>
            <Input />
          </InputBox>
        </LineBox>
        <LineBox>
          <LabelBox>
            <Label>E-mail 주소</Label>
          </LabelBox>
          <InputBox>
            <Input />
          </InputBox>
        </LineBox>
        <LineBox>
          <LabelBox>
            <Label>담당자명</Label>
          </LabelBox>
          <InputBox>
            <Input />
          </InputBox>
        </LineBox>
        <LineBox>
          <LabelBox>
            <Label>핸드폰번호</Label>
          </LabelBox>
          <InputBox>
            <Input />
          </InputBox>
        </LineBox>
      </RightBox>
    </Container>
  );
};

export default ContactUs;
