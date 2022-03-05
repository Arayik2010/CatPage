import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categoryThunk } from "../../redux/actions/categoryAction";
import "./category.scss";

interface IState {
  categories: {
    category: [];
  };
}

interface ICategory {
  name: string;
  id: number;
}

const Category = () => {
  const { category } = useSelector((state: IState) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryThunk());
  }, []);

  const itemCategory = category.map((item: ICategory) => (
    <li key={item.id}>
      <Link to={`/cats/${item.name}/${item.id}`}>{item.name}</Link>
    </li>
  ));

  return (
    <div className="category">
      <ul className="category_item">{itemCategory}</ul>
    </div>
  );
};

export default Category;
