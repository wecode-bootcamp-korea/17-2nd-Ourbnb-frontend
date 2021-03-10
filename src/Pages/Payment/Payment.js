import React, { Component } from 'react';
import './Payment.scss';
import Reservation from './components/Reservation';
import PaymentList from './components/PaymentList';
// import creditPayment from './components/creditPayment';

class Payment extends Component {
  // kakaopay = () => {
  //   fetch('kapi.kakao.com/v1/payment/ready', {
  //     method: 'POST',
  //     headers: {
  //       Authorization: '9f0ce3f812df42bd6fbf84fc29f7e098', //TODO: admin key 등록
  //       'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  //     },
  //     body: {
  //       cid: `TC0ONETIME`,
  //       partner_order_id: '1001',
  //       partner_user_id: 'german',
  //       item_name: 'Ourbnb호갱패키지',
  //       quantity: '1',
  //       total_amount: '100',
  //       tax_free_amout: '0',
  //       approval_url: 'http://localhost:3000',
  //       cancel_url: 'http://localhost:3000',
  //       fail_url: 'http://localhost:3000',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res);
  //     });
  //   console.log('실행');
  // };

  render() {
    return (
      <div className="payment">
        <header className="reservation"> 〈 확인 및 결제</header>
        <div className="information">
          <div className="reservationContainer">
            <Reservation payInfo={this.props.location.state} />
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
            <PaymentList price={this.props.location.state} />
            <div className="kakaopay">
              <img
                src="/images/kakao.jpg"
                className="kakaoImg"
                alt="kakao"
              ></img>
              <button className="requireReservation" onClick={this.kakaopay}>
                카카오 결제하기
              </button>
            </div>
          </div>
        </div>
        <div className="paymentDetail">
          <img alt="img"></img>
        </div>
      </div>
    );
  }
}

export default Payment;
