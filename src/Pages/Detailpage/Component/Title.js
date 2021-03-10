import React from 'react';
import styled from 'styled-components';

const Title = ({ result }) => {
  return (
    <Wrapper>
      <TitleText>{result.title && result.title}</TitleText>
      <SubTitle>
        <Address>{result.address && result.address}</Address>
      </SubTitle>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 86px;
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
