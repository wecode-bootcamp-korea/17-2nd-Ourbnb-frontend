import React from 'react';
import styled from 'styled-components';

const Footer = props => {
  return (
    <FooterBox>
      <Introduce>
        <div>소개</div>
        {A.map((intro, i) => (
          <p key={i}>{intro}</p>
        ))}
      </Introduce>
      <Community>
        <div>커뮤니티</div>
        {B.map((comuni, i) => (
          <p key={i}>{comuni}</p>
        ))}
      </Community>
      <Hosting>
        <div>호스팅하기</div>
        {C.map((host, i) => (
          <p key={i}>{host}</p>
        ))}
      </Hosting>
      <Support>
        <div>지원하기</div>
        {D.map((suppo, i) => (
          <p key={i}>{suppo}</p>
        ))}
      </Support>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #f7f7f7;
  margin: 0 auto;
`;

const Introduce = styled.div`
  width: 1000px;
  height: 415px;
  margin: 0px 50px;
  padding-top: 20px;

  div {
    font-size: 12px;
    margin-bottom: 15px;
  }
  p {
    font-size: 14px;
    line-height: 2;
  }
`;

const Community = styled.div`
  //background-color: skyblue;
  width: 1000px;
  height: 415px;
  margin: 0px 50px;
  padding-top: 20px;

  div {
    font-size: 12px;
    margin-bottom: 15px;
  }
  p {
    font-size: 14px;
    line-height: 2;
  }
`;

const Hosting = styled.div`
  //background-color: orange;
  width: 1000px;
  height: 415px;
  margin: 0px 50px;
  padding-top: 20px;

  div {
    font-size: 12px;
    margin-bottom: 15px;
  }
  p {
    font-size: 14px;
    line-height: 2;
  }
`;

const Support = styled.div`
  //background-color: yellowgreen;
  width: 1000px;
  height: 415px;
  margin: 0px 50px;
  padding-top: 20px;
  padding-bottom: 0px !important;
  margin-bottom: 0px !important;
  div {
    font-size: 12px;
    margin-bottom: 15px;
  }
  p {
    font-size: 14px;
    line-height: 2;
  }
`;
const A = [
  '아워비앤비 이용 방법',
  '뉴스룸',
  '투자자 정보',
  '아워비앤비 플러스',
  '아워비앤비 Luxe',
  '호텔투나잇',
  '아워비앤비 비즈니스 프로그램',
  '호스트 분들이 있기에 가능합니다',
  '올림픽',
  '채용정보',
  '창립자 편지',
];

const B = [
  '다양성 및 소속감',
  '접근성',
  '아워비앤비 어소시에이트',
  '구호 인력을 위한 숙소',
  '게스트 추천',
  'Ourbnb.org',
];

const C = [
  '숙소 호스팅',
  '온라인 체험 호스팅하기',
  '체험 호스팅하기',
  '책임감 있는 호스팅',
  '호스트 추천',
  '자료 센터',
  '커뮤니티 센터',
];

const D = [
  '아워비앤비 지원',
  '아워비앤비 코로나19 대응 방안',
  '도움말 센터',
  '예약 취소 옵션',
  '아워비앤비 이웃 민원 지원',
  '신뢰와 안전',
];
