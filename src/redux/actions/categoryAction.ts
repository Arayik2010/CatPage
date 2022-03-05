import { Dispatch } from "react";
import { apiInstance, requestOptions } from "../../api/apiInstans";

export const FETCH_CATEGORY = "FETCH_CATEGORY";
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";
export const FETCH_CATEGORY_ERROR = "FETCH_CATEGORY_ERROR";

export interface FetchCategoryAction {
  type: typeof FETCH_CATEGORY;
}

interface FetchCategorySuccessAction {
  type: typeof FETCH_CATEGORY_SUCCESS;
  payload: any[];
}
interface FetchCategoryErrorAction {
  type: typeof FETCH_CATEGORY_ERROR;
  payload: string;
}
export type CategoryAction = FetchCategoryAction | FetchCategorySuccessAction | FetchCategoryErrorAction;

export const categoryThunk = () => async (dispatch: Dispatch<CategoryAction>) => {
  try {
    dispatch({ type: FETCH_CATEGORY });
    const response = await fetch(apiInstance.baseUrl + "categories", requestOptions);
    const data = await response.json();

    dispatch({ type: FETCH_CATEGORY_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FETCH_CATEGORY_ERROR, payload: "error" });
  }
};
