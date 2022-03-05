import { apiInstance, requestOptions } from "../../api/apiInstans";
import { Dispatch } from "react";

export const FETCH_CATS = "FETCH_CATS";
export const FETCH_CATS_SUCCESS = "FETCH_CATS_SUCCESS";
export const FETCH_CATS_ERROR = "FETCH_CATS_ERROR";
export const FETCH_CATS_MORE = "FETCH_CATS_MORE";

export interface FetchCatsAction {
  type: typeof FETCH_CATS;
}

export interface FetchCatsSuccessAction {
  type: typeof FETCH_CATS_SUCCESS;
  payload: [];
}

export interface FetchCatsErrorAction {
  type: typeof FETCH_CATS_ERROR;
  payload: string;
}
export interface FetchCatsMoreAction {
  type: typeof FETCH_CATS_MORE;
  payload: [];
}

export type CatsAction = FetchCatsAction | FetchCatsSuccessAction | FetchCatsErrorAction | FetchCatsMoreAction;

export const catsItemsThunk =
  (id = "1") =>
  async (dispatch: Dispatch<CatsAction>) => {
    try {
      dispatch({ type: FETCH_CATS });
      const response = await fetch(
        apiInstance.baseUrl + `images/search?limit=10&page=0&category_ids=${id}`,
        requestOptions
      );
      const catData = await response.json();
      dispatch({ type: FETCH_CATS_SUCCESS, payload: catData });
    } catch (e) {
      dispatch({ type: FETCH_CATS_ERROR, payload: "error" });
    }
  };

export const moreCatsThunk = (
  id = "1",
  page: number,
  changePageHandler: { (): void; changePageHandler?: () => void }
) => {
  changePageHandler();
  return async (dispatch: Dispatch<CatsAction>) => {
    try {
      dispatch({ type: FETCH_CATS });
      const response = await fetch(
        apiInstance.baseUrl + `images/search?limit=10&page=${page}&category_ids=${id}`,
        requestOptions
      );
      const catData = await response.json();
      dispatch({ type: FETCH_CATS_MORE, payload: catData });
    } catch (err) {
      dispatch({ type: FETCH_CATS_ERROR, payload: "err" });
    }
  };
};
