import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { catsItemsThunk, moreCatsThunk } from "../../redux/actions/catsAction";
import "./catsPage.scss";

interface ICats {
  cats: {
    cats: [];
  };
}

interface Iimage {
  id: number;
  url: string;
  alt: string | null;
}

const CatsImage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { cats } = useSelector((state: ICats) => state.cats);

  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    dispatch(catsItemsThunk(id));
    setPage(1);
  }, [id, dispatch]);

  const changePageHandler = () => {
    setPage(page + 1);
  };

  return (
    <div className="cats">
      {cats.map((cat: Iimage) => (
        <div className="cards" key={cat.id + Math.random()}>
          <div className="cards__container">
            <div className="cards__image">
              <img className="cat__image" src={cat.url} alt={`${cat.id}`} />
            </div>
          </div>
        </div>
      ))}
      {location.pathname !== "/" ? (
        <button className="add__cats" onClick={() => dispatch(moreCatsThunk(id, page, changePageHandler))}>
          Add more cats
        </button>
      ) : null}
    </div>
  );
};
export default CatsImage;
