import React from 'react';
import styled from 'styled-components';
//import Dropdown from './Dropdown';
const RoomDetail = ({ data }) => {
  return (
    <Manual>
      <SmallTitle>
        <RoomTitle>
          {data.hostName && data.hostName}님이 호스팅하는&nbsp;
          {data.roomType && data.roomType[0]}
        </RoomTitle>
        <MaxPeople>
          최대 인원 {data.maxPeople}명 ∙ 침실 {data.bedrooms}개 ∙ 침대{' '}
          {data.beds}개 ∙ 욕실 {data.bathrooms}개
        </MaxPeople>
        <img src={data.hostProfil} alt="profil" />
      </SmallTitle>
      <Content>
        <div className="resData">
          <img className="icon" src="/images/home.png" alt="shining" />
          <span className="contentName">
            {data.roomType && data.roomType[0]}
          </span>
        </div>
        <p>{data.roomType && data.roomType[1]}</p>
        {CONTENT.map(text => (
          <>
            <div>
              <img className="icon" src={text.img} alt={text.name} />
              <span className="contentName">{text.name}</span>
            </div>
            <p>{text.substance}</p>
          </>
        ))}
      </Content>
      <Explanati>
        <p>{data.description && data.description}</p>
      </Explanati>
      <Amenities>
        <h1>편의시설</h1>
        <div>
          {AMENITIESLIST.map(list => {
            return (
              <>
                <div>
                  <img src={list.img} alt={list.name} />
                  <span>{list.name}</span>
                </div>
              </>
            );
          })}
        </div>
        <button>편의시설 28개 모두 보기</button>
      </Amenities>
    </Manual>
  );
};

export default RoomDetail;

const Manual = styled.div`
  width: 880px;
  //height: 850px;
  //background-color: yellowgreen;
  margin: 0 20px 0 0;
`;

const RoomTitle = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
`;

const MaxPeople = styled.p`
  font-size: 16px;
`;

const SmallTitle = styled.div`
  width: 655px;
  position: relative;
  //background-color: pink;
  padding: 48px 0 24px 0;
  border-bottom: 1px solid #dddddd;

  img {
    position: absolute;
    right: 0;
    bottom: 30px;
    width: 56px;
    height: 56px;
    border-radius: 50px;
  }
`;

const Content = styled.div`
  //background-color: skyblue;
  width: 655px;
  //height: 320px;
  padding: 10px 0 32px 0;
  border-bottom: 1px solid #dddddd;

  .resData {
    display: flex;
    padding-top: 10px;

    .icon {
      margin: 10px 13px 10px 10px;
    }

    .contentName {
      font-size: 16px;
      margin-top: 20px;
    }
  }

  div {
    display: flex;
    padding-top: 10px;

    .icon {
      margin: 10px 13px 10px 10px;
    }

    .contentName {
      font-size: 16px;
      margin-top: 20px;
    }
  }

  p {
    padding-left: 55px;
    font-size: 14px;
    color: gray;
  }
`;

const Explanati = styled.div`
  //background-color: hotpink;
  width: 655px;
  font-size: 16px;

  border-bottom: 1px solid #dddddd;
  padding: 32px 0;

  p {
    line-height: 2.5;
  }
`;

const Amenities = styled.div`
  width: 655px;
  height: 370px;
  //background-color: gold;
  padding: 48px 0;
  //margin-bottom: 40px;
  //border-bottom: 1px solid #dddddd;

  h1 {
    font-size: 22px;
    font-weight: 600;
    padding-bottom: 24px;
  }

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    div {
      display: flex;
      width: 320px;
      height: 25px;
      //background-color: pink;
      margin-bottom: 16px;

      img {
        padding-right: 20px;
      }
      span {
        padding-top: 10px;
        font-size: 16px;
      }
    }
  }

  button {
    font-size: 16px;
    width: 200px;
    margin-top: 25px;
    padding: 13px 20px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: #fff;
  }
`;

const CONTENT = [
  {
    img: '/images/star.png',
    name: '청결 강화',
    substance:
      '에어비앤비의 강화된 5단계 청소 절차를 준수하겠다고 동의한 호스트입니다.',
  },
  {
    img: '/images/doorway.png',
    name: '셀프 체크인',
    substance: '스마트 도어록을 이용해 체크인하세요.',
  },
  {
    img: '/images/calendar.png',
    name: '체크인 24시간 전까지 수수료 없이 예약 취소 가능',
    substance:
      '그 이후로는 체크인 전에 취소하면 첫 1박 요금과 서비스 수수료를 제외한 전액이 환불됩니다.',
  },
];

const AMENITIESLIST = [
  {
    img: '/images/cutlery.png',
    name: '주방',
  },
  {
    img: '/images/television.png',
    name: '케이블 TV',
  },
  {
    img: '/images/wifi.png',
    name: '무선인터넷',
  },
  {
    img: '/images/hair-dryer.png',
    name: '헤어 드라이어',
  },
  {
    img: '/images/clothes-hanger.png',
    name: '옷걸이',
  },
  {
    img: '/images/heat.png',
    name: '난방',
  },
  {
    img: '/images/laundry.png',
    name: '세탁기',
  },
  {
    img: '/images/air-conditioner.png',
    name: '에어컨',
  },
];
