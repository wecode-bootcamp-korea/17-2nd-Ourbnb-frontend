import React from 'react';

class PaymentList extends React.Component {
  render() {
    const totalAmount = Number(
      this.props.price.onedayPrice * this.props.price.countDay
    ).toLocaleString();

    return (
      <div>
        <aside className="paymentBox">
          <section className="photoBox">
            <div className="photo">
              <img
                src={this.props.price.firstImg}
                className="photo2"
                alt="travel"
              />
              <div className="text">
                <p className="textTitle">
                  ourbnb의 {this.props.price.roomType.name}
                </p>
                <p>{this.props.price.title}</p>
                <span className="star">★</span>{' '}
                <span>{this.props.price.totalAvg}</span>
              </div>
            </div>
          </section>
          <header className="paymentInfo">요금 세부정보</header>
          <article className="paymentChk">
            <div className="roomInfo">
              <span className="roomBerth">숙소</span>
              <span className="roomPrice">{totalAmount}</span>
            </div>
            <div className="roomService">
              <span className="ServiceFees">서비스 수수료</span>
              <span className="feesPrice">
                {Number(this.props.price.cleaningFee).toLocaleString()}
              </span>
            </div>
            <div className="roomtotal">
              <span className="total">총 합계(KRW) </span>
              <span className="totalPrice">
                {this.props.price.totalPrices[1]}
              </span>
            </div>
          </article>
        </aside>
      </div>
    );
  }
}

export default PaymentList;
