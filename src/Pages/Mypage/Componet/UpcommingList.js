import React from 'react';
import styled from 'styled-components';

const UpcommingList = props => {
  const {
    accommodationAddress,
    accommodationName,
    endDate,
    startDate,
    thumbnailImage,
  } = props;
  return (
    <>
      <UpcommingBox>
        <img className="pic" src={thumbnailImage} alt="booking" />
        <TextBox>
          <p className="day">
            {startDate} ~ {endDate}
          </p>
          <p className="address">{accommodationAddress}</p>
          <div className="box">
            <img className="smaillImg" src={thumbnailImage} alt="booking" />
            <div className="korAddress">{accommodationName}</div>
          </div>
        </TextBox>
        <p className="btnText">여행 계획 더 보기</p>
      </UpcommingBox>
    </>
  );
};

export default UpcommingList;

const UpcommingBox = styled.div`
  margin-right: 45px;
  margin-bottom: 25px;
  width: 350px;
  height: 385px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 0px 11px 0px rgba(61, 61, 61, 0.65);

  .pic {
    width: 100%;
    height: 180px;
    border-radius: 15px;
  }

  .btnText {
    text-align: center;
    font-size: 16px;

    padding-top: 20px;
  }
`;
const TextBox = styled.div`
  width: 100%;
  height: 140px;
  margin-top: 0;
  padding: 15px;
  position: relative;
  border-bottom: 1px solid #dddddd;

  .day {
    font-size: 12px;
    color: #717171;
    padding-bottom: 10px;
  }

  .address {
    font-size: 22px;
    padding-bottom: 15px;
  }

  .box {
    display: flex;
    flex-direction: row;
  }
  .smaillImg {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  .korAddress {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
  }
`;
