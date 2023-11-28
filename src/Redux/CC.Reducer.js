import {
  CONVERTING_ON_INPUT_ERROR,
  CONVERTING_ON_INPUT_START,
  CONVERTING_ON_INPUT_SUCCESS,
  GET_ALL_CURRENCY_DATA_ERROR,
  GET_ALL_CURRENCY_DATA_START,
  GET_ALL_CURRENCY_DATA_SUCCESS,
  SELECTING_ERROR1,
  SELECTING_START1,
  SELECTING_SUCCESS1,
} from "./CC.Consonants";

const Init = {
  currencies: [],
  loading: false,
  selecting_loading: false,
  error: "",
  currency1: [],
  currency2: [],
};

const CCReducer = (state = Init, action) => {
  switch (action.type) {
    case GET_ALL_CURRENCY_DATA_START:
      return {
        loading: true,
        error: "",
      };
    case GET_ALL_CURRENCY_DATA_SUCCESS:
      return {
        loading: false,
        error: "",
        currencies: action.payload,
      };
    case GET_ALL_CURRENCY_DATA_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    case SELECTING_START1:
      return {
        selecting_loading: true,
        error: "",
      };
    case SELECTING_SUCCESS1:
      return {
        selecting_loading: false,
        error: "",
        currency1: action.payload,
      };

    case SELECTING_ERROR1:
      return {
        selecting_loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default CCReducer;
