const ListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_INITIAL_DATA':
      return [action.payload];

    default:
      return state;
  }
};
export default ListReducer;

const INITIAL_STATE = [];
