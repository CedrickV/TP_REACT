const initialState = {
  rangeValue: 5,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_RANGE":
      return {
        ...state,
        rangeValue: action.payload,
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
