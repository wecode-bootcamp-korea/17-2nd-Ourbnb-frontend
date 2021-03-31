import { useState } from 'react';
import styled from 'styled-components';
import ListCard from './ListCard';
import TypeBox from './TypelBox';
import PriceBox from './PriceBox';
import { fetchPagedata } from '../../store/actions/index';
import { useSelector, useDispatch } from 'react-redux';

const LIMIT = 15;

const List = props => {
  const startdayarr = props.checkdata.startDate.split('-');
  const enddayarr = props.checkdata.endDate.split('-');
  const [typeurland, setType] = useState('');
  const [istypeopen, settypeOpen] = useState(false);
  const [ispriceopen, setpriceopen] = useState(false);
  const { defaultUrl } = props;
  const { person } = props.checkdata;
  const dispatch = useDispatch();
  const { data, index } = useSelector(store => store.ListReducer[0]);

  const fetchPage = e => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const offset = e.target.dataset.idx;
    dispatch(fetchPagedata(offset, defaultUrl, typeurland, LIMIT));
  };

  return (
    <Listcontainer>
      {istypeopen && <ModalOutside onClick={() => settypeOpen(false)} />}
      {ispriceopen && <ModalOutside onClick={() => setpriceopen(false)} />}

      <CheckInfo>
        {startdayarr[1]}월 {startdayarr[2]}일 - {enddayarr[1]}월 {enddayarr[2]}
        일, {person !== 0 && `게스트 ${person} 명`}
      </CheckInfo>
      <Title>지도에서 선택한 지역의 숙소</Title>

      <Tag>
        <span onClick={() => settypeOpen(!istypeopen)}>숙소유형</span>
        <span onClick={() => setpriceopen(!ispriceopen)}>가격</span>

        {istypeopen && (
          <TypeBox
            defaultUrl={defaultUrl}
            settypeOpen={settypeOpen}
            setType={setType}
          />
        )}

        {ispriceopen && (
          <PriceBox
            defaultUrl={defaultUrl}
            setpriceopen={setpriceopen}
            setType={setType}
          />
        )}
      </Tag>

      {data &&
        data.map(room => {
          return (
            <ListCard data={room} key={room.id} initialdata={props.frontdata} />
          );
        })}

      <PageNum>
        {index && (
          <>
            {numBtn.map(btn => {
              return (
                index > btn.id && (
                  <span
                    key={btn.id}
                    data-idx={btn.data_idx}
                    onClick={e => fetchPage(e)}
                  >
                    {btn.data_idx}
                  </span>
                )
              );
            })}
          </>
        )}
      </PageNum>
    </Listcontainer>
  );
};

export default List;

const numBtn = [
  {
    id: 0,
    data_idx: 1,
  },
  {
    id: 1,
    data_idx: 2,
  },
  {
    id: 2,
    data_idx: 3,
  },
  {
    id: 3,
    data_idx: 4,
  },
];

const Listcontainer = styled.div`
  width: 50%;
  height: 1000px;
  overflow: auto;
`;

const Title = styled.h1`
  margin: 20px 0 0 25px;
  font-size: 30px;
  font-weight: 800;
`;

const Tag = styled.div`
  display: flex;
  margin: 40px 0 35px 20px;
  font-weight: 500;
  cursor: pointer;

  span {
    display: block;
    margin-right: 20px;
    padding: 12px;
    border: 1px solid rgb(160 160 160);
    border-radius: 30px;
    color: black;
    &:hover {
      border: 1px solid black;
    }
  }
`;

const PageNum = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 17px;

  span {
    display: inline-block;
    padding: 10px;
    margin-right: 5px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      color: rgb(160 160 160);
    }
  }
`;
const ModalOutside = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  z-index: 8;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
`;
const CheckInfo = styled.div`
  padding: 20px 0 0 27px;
  color: gray;
  font-size: 20px;
`;
