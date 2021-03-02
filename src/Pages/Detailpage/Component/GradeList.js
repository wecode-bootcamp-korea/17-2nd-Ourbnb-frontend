import React from 'react';
import styled from 'styled-components';

const GradeList = ({ data }) => {
  //console.log('랭킹>>>', data);
  // const { grade } = data;
  return (
    <GradeContainer>
      <div>
        <RankingBox>
          <div className="name">청결도</div>
          <div className="progressBarAll">
            {/* <div className="progressBarPlay" style={{ width: 30 }} /> */}
            <div
              className="progressBarPlay"
              style={{ width: `${data[0].gradeValue && data[0].gradeValue}%` }}
            />
          </div>
          <p className="update">{data[0].average && data[0].average}</p>
        </RankingBox>
        <RankingBox>
          <div className="name">정확성</div>
          <div className="progressBarAll">
            <div
              className="progressBarPlay"
              style={{ width: `${data[1].gradeValue && data[1].gradeValue}%` }}
            />
          </div>
          <p className="update">{data[1].average && data[1].average}</p>
        </RankingBox>
        <RankingBox>
          <div className="name">의사소통</div>
          <div className="progressBarAll">
            <div
              className="progressBarPlay"
              style={{ width: `${data[2].gradeValue && data[2].gradeValue}%` }}
            />
          </div>
          <p className="update">{data[2].average && data[2].average}</p>
        </RankingBox>
      </div>
      <div>
        <RankingBox>
          <div className="name">위치</div>
          <div className="progressBarAll">
            <div
              className="progressBarPlay"
              style={{ width: `${data[3].gradeValue && data[3].gradeValue}%` }}
            />
          </div>
          <p className="update">{data[3].average && data[3].average}</p>
        </RankingBox>
        <RankingBox>
          <div>체크인</div>
          <div className="progressBarAll">
            <div
              className="progressBarPlay"
              style={{ width: `${data[4].gradeValue && data[4].gradeValue}%` }}
            />
          </div>
          <p className="update">{data[4].average && data[4].average}</p>
        </RankingBox>
        <RankingBox>
          <div className="name">가격대비 만족도</div>
          <div className="progressBarAll">
            <div
              className="progressBarPlay"
              style={{ width: `${data[5].gradeValue && data[5].gradeValue}%` }}
            />
          </div>
          <p className="update">{data[5].average && data[5].average}</p>
        </RankingBox>
      </div>
    </GradeContainer>
  );
};

export default GradeList;

const GradeContainer = styled.div`
  display: flex;
`;

const RankingBox = styled.div`
  display: flex;
  width: 300px;
  height: 50px;

  .name {
    width: 200x;
    height: 50px;
  }
  .progressBarAll {
    background-color: #e6eaed;
    width: 100px;
    height: 4px;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 3px;

    .progressBarPlay {
      background-color: #000;
      height: 4px;
      border-radius: 20px;
    }
  }
`;
