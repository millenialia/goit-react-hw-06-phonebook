import { useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "redux/selectors";
import { setFilter } from 'redux/filterSlice';
import css from "./Filter.module.css";



export const Filter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleChange = filter => dispatch(setFilter(filter));

  const inputRef = useRef();

    return (
        <label htmlFor="filter" className= {css.filter}>
          Find contacts by name
        <input
          type="text"
          name="filter"
          ref={inputRef}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
          value={filter}
        />
      </label>
  )
}
