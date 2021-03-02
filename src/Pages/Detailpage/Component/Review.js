import React from 'react';
import styled from 'styled-components';
import GradeList from './GradeList';
import Postscript from './Postscript';

const Review = ({ data }) => {
  console.log(data && data);
  return (
    <Comment>
      <Ranking>
        <Starrating>
          <img className="rankingStar" src="/images/redstar.png" alt="star" />
          <span>
            {data.totalAvg && data.totalAvg}점 (후기
            {data.totalCount && data.totalCount}개)
          </span>
        </Starrating>
        <EvaluationBox>
          {data.grade && <GradeList data={data.grade} />}
          {/* <GradeList data={data.grade && data.grade} /> */}
        </EvaluationBox>
      </Ranking>
      <Opinion>
        {data.comment &&
          data.comment.map(review => (
            <Postscript
              key={review.reviewid}
              userProfile={review.userProfile}
              username={review.userName}
              createdAt={review.createdAt}
              content={review.content}
            />
          ))}
      </Opinion>
      <button>후기 모두보기</button>
    </Comment>
  );
};

export default Review;

const Comment = styled.div`
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap; */
  //width: 880px;
  //height: 500px;
  margin: 0 20px 0 0;
  padding-bottom: 30px;
  //background-color: hotpink;
  border-bottom: 1px solid #dddddd;

  button {
    font-size: 16px;
    width: 200px;
    //margin-top: 25px;
    padding: 13px 20px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: #fff;
  }
`;

const Ranking = styled.div`
  height: 220px;
  width: 1265px;
  padding-top: 25px;
  margin-bottom: 25px;
  //background-color: beige;
  border-top: 1px solid #dddddd;

  .rankingStar {
    width: 24px;
    height: 24px;
    margin-bottom: 25px;
    margin-right: 10px;
  }
`;

const Starrating = styled.div`
  display: flex;
  font-size: 22px;
  font-weight: 600;

  span {
    padding-top: 5px;
  }
`;

const EvaluationBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  //width: 100%;
  //height: 300px;
  //background-color: skyblue;
`;

const Opinion = styled.div`
  //height: 240px;
  //background-color: red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
