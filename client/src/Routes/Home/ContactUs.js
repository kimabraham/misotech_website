import React from 'react';
import styled from 'styled-components';
import contactusImg from '../../assets/img/contactus.png';

const Container = styled.div`
  display: flex;
`;

const LeftBox = styled.div`
  min-width: 700px;
  width: 30%;
  height: 350px;
  background-image: url(${(props) => props.backImg});
  background-position: center -130px;
  background-size: cover;
  background-repeat: no-repeat;
`;

const RightBox = styled.div`
  width: 40%;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const LineBox = styled.div`
  width: 810px;
  height: 100%;
  display: flex;
  border-bottom: 1px solid black;
  &:last-child {
    border-bottom: none;
  }
`;

const LabelBox = styled.div`
  min-width: 400px;
  background: #d7d7d7;
  padding-left: 50px;
  display: flex;
  align-items: center;
`;

const InputBox = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
  min-width: 800px;
`;

const Label = styled.label`
  font-size: 16px;
`;

const Input = styled.input`
  border-radius: 0;
  border: 1px solid black;
  width: 20vw;
  height: 30px;
  font-size: 16px;
  min-width: 400px;
  &:focus {
    outline: none;
  }
`;

const ContactUs = () => {
  return (
    <Container>
      <LeftBox backImg={contactusImg} />
      <RightBox>
        <LineBox>
          <LabelBox>
            <Label>*회사명</Label>
          </LabelBox>
          <InputBox>
            <Input />
          </InputBox>
        </LineBox>
        <LineBox>
          <LabelBox>
            <Label>*전화번호</Label>
          </LabelBox>
          <InputBox>
            <Input />
          </InputBox>
        </LineBox>
        <LineBox>
          <LabelBox>
            <Label>*E-mail 주소</Label>
          </LabelBox>
          <InputBox>
            <Input />
          </InputBox>
        </LineBox>
        <LineBox>
          <LabelBox>
            <Label>*담당자명</Label>
          </LabelBox>
          <InputBox>
            <Input />
          </InputBox>
        </LineBox>
        <LineBox>
          <LabelBox>
            <Label>*핸드폰번호</Label>
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
