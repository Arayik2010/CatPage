import { CatsAction, FETCH_CATS, FETCH_CATS_SUCCESS, FETCH_CATS_ERROR, FETCH_CATS_MORE } from "../actions/catsAction";

interface ICatState {
  cats: any[];
  loading: boolean;
  error: null | string;
}

const initialState: any = {
  cats: [],
  loading: false,
  error: null,
};

export const catsReducer = (state = initialState, action: CatsAction): ICatState => {
  switch (action.type) {
    case FETCH_CATS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CATS_SUCCESS:
      return {
        ...state,
        loading: false,
        cats: action.payload,
        error: null,
      };
    case FETCH_CATS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_CATS_MORE:
      return {
        ...state,
        loading: false,
        cats: [...state.cats, ...action.payload],
        error: null,
      };

    default:
      return state;
  }
};
