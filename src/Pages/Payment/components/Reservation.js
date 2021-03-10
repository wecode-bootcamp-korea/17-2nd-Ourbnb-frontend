import React from 'react';

class Reservation extends React.Component {
  render() {
    console.log(this.props.payInfo);
    const { startDate, endDate, person } = this.props.payInfo.initialstate;
    return (
      <div>
        <section className="reservationInfo">예약 정보</section>
        <article className="reservationDate">
          <div className="dateBox">
            <p class="date">날짜</p>
            <p class="selectDate">
              {startDate} ~ {endDate}
            </p>
          </div>
          <button>수정</button>
        </article>
        <article className="reservationGuest">
          <div className="guestBox">
            <p class="guest">게스트</p>
            <p class="howGuest">게스트 {person}명</p>
          </div>
          <button>수정</button>
        </article>
      </div>
    );
  }
}
export default Reservation;
