import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

const Title = ({ data }) => {
  return (
    <Wrapper>
      <TitleText>{data.title && data.title}</TitleText>
      <SubTitle>
        <Address>{data.address && data.address}</Address>
        <Button>
          <AiOutlineHeart size={20} />
          저장
        </Button>
      </SubTitle>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 86px;
  //background-color: pink;
`;

const TitleText = styled.h1`
  font-size: 26px;
  font-weight: 600;
  padding: 20px 0;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Address = styled.span`
  font-size: 14px;
  color: #717171;
  text-decoration: underline;
`;

const Button = styled.button`
  width: 80px;
  height: 20px;
  font-size: 14px;
  background-color: green;
`;
