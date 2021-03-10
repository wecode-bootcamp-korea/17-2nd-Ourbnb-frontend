import React from 'react';

class Reservation extends React.Component {
  render() {
    return (
      <div>
        <section className="reservationInfo">예약 정보</section>
        <article className="reservationDate">
          <div className="dateBox">
            <p class="date">날짜</p>
            <p class="selectDate">2020.3.10 ~ 2021.4.13</p>
          </div>
          <button>수정</button>
        </article>
        <article className="reservationGuest">
          <div className="guestBox">
            <p class="guest">게스트</p>
            <p class="howGuest">게스트 1명</p>
          </div>
          <button>수정</button>
        </article>
      </div>
    );
  }
}
export default Reservation;
