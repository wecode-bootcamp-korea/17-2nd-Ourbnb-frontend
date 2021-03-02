import React from 'react';
import styled from 'styled-components';

const Postscript = props => {
  //console.log('리뷰로 데이터가 받아왔을까나>>>', props);
  const { userProfile, username, createdAt, content } = props;
  return (
    <Container>
      <HeaderBox>
        <img src={userProfile} alt="userprofile" />
        <CommentBox>
          <p className="userInfo">{username}</p>
          <p className="update">{createdAt}</p>
        </CommentBox>
      </HeaderBox>
      <ContentText>{content}</ContentText>
    </Container>
  );
};

export default Postscript;

const Container = styled.div`
  display: flex;
  width: 500px;
  height: 230px;
  flex-direction: column;
  flex-wrap: nowrap;
  //background-color: yellow;
  margin-bottom: 20px;
  margin-right: 120px;
`;
const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 90px;
  background-color: #ffffff;
  padding: 10px;

  img {
    width: 60px;
    height: 60px;
    margin-right: 20px;
    border-radius: 50%;
  }
`;
const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  height: 56px;
  //background-color: skyblue;
  padding-top: 10px;

  .userInfo {
    width: 100%;
    font-size: 16px;
    padding-bottom: 10px;
  }

  .update {
    width: 100%;
    font-size: 14px;
    color: #717171;
  }
`;

const ContentText = styled.p`
  font-size: 16px;
  padding: 10px;
  line-height: 1.5;
`;
