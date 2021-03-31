import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  const [date, setDate] = useState({
    startdate: null,
    enddate: null,
  });
  const [focusedInput, setfocusedInput] = useState(null);
  const [person, setPerson] = useState(0);
  const moment = require('moment');
  let startday = moment(date.startdate).format('YYYY-MM-DD');
  let endday = moment(date.enddate).format('YYYY-MM-DD');

  if (startday === 'Invalid date') {
    startday = '';
  }
  if (endday === 'Invalid date') {
    endday = '';
  }

  const subtractPerson = () => {
    if (person > 0) {
      setPerson(person - 1);
    }
  };
  const addPerson = () => {
    setPerson(person + 1);
  };

  return (
    <>
      <MainImg>
        <img
          alt="backgraound"
          src="https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
        />
        <h1>호스트 분들이 있기에 가능합니다.</h1>
      </MainImg>
      <ReserveBox>
        <h3>
          <p>위치</p> <input placeholder="선릉" disabled />
        </h3>
        <DateRangePicker
          startDate={date.startdate}
          startDateId="your_unique_start_date_id"
          endDate={date.enddate}
          endDateId="your_unique_end_date_id"
          onDatesChange={({ startDate, endDate }) =>
            setDate({ startdate: startDate, enddate: endDate })
          }
          focusedInput={focusedInput}
          onFocusChange={focusedInput => setfocusedInput(focusedInput)}
          SelectedDateFormat="Long"
          startDatePlaceholderText={(date, 'Check In')}
          endDatePlaceholderText={(date, 'Check Out')}
        />
        <h2>
          인원
          <GuestsBtn person={person}>
            <span>
              <FiMinusCircle size={16} onClick={subtractPerson} />
            </span>
            <h4>{person}</h4>
            <span>
              <FiPlusCircle size={16} onClick={addPerson} />
            </span>
          </GuestsBtn>
        </h2>

        <div>
          <Link
            to={{
              pathname: '/detaillist',
              state: {
                startDate: startday,
                endDate: endday,
                person: person,
              },
            }}
          >
            <button>
              <BiSearch size={15} /> 검색
            </button>
          </Link>
        </div>
      </ReserveBox>
    </>
  );
};

export default withRouter(Main);

const MainImg = styled.div`
  position: relative;
  width: 100%;
  height: 900px;
  background-color: black;
  align-items: center;

  img {
    width: 90%;
    height: 85%;
    margin: 50px 0 20px 70px;
  }
  h1 {
    text-align: center;
    font-size: 35px;
    color: white;
  }
`;

const ReserveBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  top: 45px;
  left: 50%;
  transform: translateX(-50%);
  width: 850px;
  height: 70px;
  margin: 0 auto;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 7px 50px -18px rgba(61, 61, 61, 0.65);
  border: 1px solid #dddddd;

  h3 {
    display: flex;
    flex-direction: column;
    padding-left: 2px;
    font-weight: 800;
    p {
      margin-left: 6px;
      margin-bottom: 4px;
      font-weight: 800;
      padding-left: 5px;
    }
    input {
      border: none;
      margin-left: 9px;
    }
  }
  h2 {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: 800;
    div {
      margin-top: 6px;
      cursor: pointer;
    }
    input {
      width: 160px;
      height: 18px;
      margin-top: 5px;
      border: white;
    }
  }
  button {
    width: 80px;
    height: 30px;
    padding: 5px;
    font-size: 16px;
    color: white;
    background: rgb(251, 28, 74);
    border-radius: 30px;
    &:hover {
      background: rgb(218, 0, 71);
    }
  }
`;

const GuestsBtn = styled.div.attrs(props => ({
  person: props.person,
}))`
  display: flex;
  justify-content: space-between;
  width: 70px;
  font-size: 17px;
  margin-bottom: 170px;
  h4 {
    color: ${props => (props.person === 0 ? 'black' : 'rgb(251, 28, 74)')};
  }
`;
