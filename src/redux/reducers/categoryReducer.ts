import {
  FETCH_CATEGORY,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  CategoryAction,
} from "../actions/categoryAction";

interface UserState {
  category: any[];
  loading: boolean;
  error: null | string;
}

const initialState: UserState = {
  category: [],
  loading: false,
  error: null,
};

export const categoryReducer = (state = initialState, action: CategoryAction): UserState => {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        category: action.payload,
      };
    case FETCH_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
