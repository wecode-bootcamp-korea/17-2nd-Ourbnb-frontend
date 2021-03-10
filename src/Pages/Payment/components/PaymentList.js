import React from 'react';

class PaymentList extends React.Component {
  render() {
    return (
      <div>
        <aside className="paymentBox">
          <section className="photoBox">
            <div className="photo">
              <img src="/images/여행.jpg" className="photo2" alt="travel" />
              <div className="text">
                <p className="textTitle">ourbnb의 레지던스</p>
                <p>
                  [99%할인] 뷰가 좋은 10층에서 감금당하면서 행복하게 코딩하기
                  좋습니다!
                </p>
                <p>거실1 큰방1 작은방1</p>
                <span className="star">★</span> <span>4.98</span>
              </div>
            </div>
          </section>
          <header className="paymentInfo">요금 세부정보</header>
          <article className="paymentChk">
            <div className="roomInfo">
              <span className="roomBerth">숙소</span>
              <span className="roomPrice">$price</span>
            </div>
            <div className="roomService">
              <span className="ServiceFees">서비스 수수료</span>
              <span className="feesPrice">$Price</span>
            </div>
            <div className="roomtotal">
              <span className="total">총 합계(KRW) </span>
              <span className="totalPrice">$Price</span>
            </div>
          </article>
        </aside>
      </div>
    );
  }
}

export default PaymentList;
