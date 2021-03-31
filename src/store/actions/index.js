import axios from 'axios';
import { baseURL } from '../../config';

export const fetchlist = (startDate, endDate, person) => dispatch => {
  axios(
    `${baseURL}/accommodation?checkin=${startDate}&checkout=${endDate}&guests=${person}`
  )
    .then(result => {
      const { data, index } = result.data;
      let mapdata = data.map(data => {
        return { lat: data.lat, long: data.long };
      });
      dispatch({
        type: 'GET_INITIAL_DATA',
        payload: { data, index, mapdata },
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const fetchPagedata = (
  offset,
  defaultUrl,
  typeurland,
  LIMIT
) => dispatch => {
  axios(
    `${baseURL}/accommodation?${defaultUrl}${typeurland}&limit=${LIMIT}&offset=${
      offset * LIMIT
    }`
  )
    .then(pagedata => {
      const { data, index } = pagedata.data;
      let mapdata = data.map(data => {
        return { lat: data.lat, long: data.long };
      });
      dispatch({
        type: 'GET_INITIAL_DATA',
        payload: { data, index, mapdata },
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const TypePriceFilterd = (defaultUrl, typeurland) => dispatch => {
  axios(`${baseURL}/accommodation?${typeurland}${defaultUrl}`)
    .then(filterddata => {
      const { data, index } = filterddata.data;
      let mapdata = data.map(data => {
        return { lat: data.lat, long: data.long };
      });
      dispatch({
        type: 'GET_INITIAL_DATA',
        payload: { data, index, mapdata },
      });
    })
    .catch(error => {
      // 에러가 발생했을 경우, 에로 내용을 payload 로 설정하여 GET_POST_FAILURE 액션을 디스패치합니다.
      //   dispatch({
      //     type: 'GET_POST_FAILURE',
      //     payload: error,
      //   });
      console.log(error);
    });
};
