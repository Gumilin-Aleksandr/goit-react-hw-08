import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import {
  selectNameFilter,
  selectNumberFilter,
} from "../../redux/filters/selectors";

function SearchBox() {
  const dispatch = useDispatch();

  const name = useSelector(selectNameFilter);
  const number = useSelector(selectNumberFilter);

  const handleFilter = (e) => {
    const value = e.target.value;
    dispatch(changeFilter({ name: value.toLowerCase(), number: value }));
  };

  return (
    <form className={s.form}>
      <label>Find contacts by name or number</label>
      <input
        type="text"
        value={name || number}
        onChange={handleFilter}
        className={s.field}
      />
    </form>
  );
}

export default SearchBox;
