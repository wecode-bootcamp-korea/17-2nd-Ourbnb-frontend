import React from 'react';
import { withRouter } from 'react-router-dom';
import './Payment.scss';
import Reservation from './components/Reservation';
import PaymentList from './components/PaymentList';
import { baseURL } from '../../config';

const Payment = props => {
  const cardPayment = () => {
    const {
      accommodation_id,
      totalPrices,
      initialstate,
    } = props.location.state;

    fetch(`${baseURL}/reservation/purchase`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        accommodation_id: accommodation_id,
        start_date: initialstate.startDate,
        end_date: initialstate.endDate,
        total_price: totalPrices[0],
        total_guest: initialstate.person,
      }),
    })
      .then(res => res.json())
      .then(res => {
        alert('결제완료 되었습니다. 감사합니다.');
      });

    props.history.push('/');
  };

  return (
    <div className="payment">
      <header className="reservation"> 〈 확인 및 결제</header>
      <div className="information">
        <div className="reservationContainer">
          <Reservation payInfo={props.location.state} />
          <article className="paymentComponents">
            <header className="paymentHeader">
              결제수단
              <div className="cardImg">
                <img
                  alt="IMG"
                  src="https://a0.muscache.com/airbnb/static/packages/logo_visa.0adea522.svg"
                  className="amex"
                />
                <img
                  alt="IMG"
                  src="https://a0.muscache.com/airbnb/static/packages/logo_amex.84088b52.svg"
                  className="visa"
                />
                <img
                  alt="IMG"
                  src="https://a0.muscache.com/airbnb/static/packages/logo_mastercard.f18379cf.svg"
                  className="master"
                />
              </div>
            </header>
            <div className="creditPayment">
              <input className="cardNum" placeholder="카드 번호"></input>
              <input className="cardOver" placeholder="만료일"></input>
              <input className="cardCVV" placeholder="CVV"></input>
              <input className="post" placeholder="우편번호"></input>
            </div>
          </article>
        </div>
        <div className="paymentContainer">
          <PaymentList price={props.location.state} />
          <div className="kakaopay">
            <img src="/images/kakao.jpg" className="kakaoImg" alt="kakao"></img>
            <button className="requireReservation" onClick={cardPayment}>
              카카오 결제하기
            </button>
          </div>
        </div>
      </div>
      <div className="paymentDetail"></div>
    </div>
  );
};

export default withRouter(Payment);
