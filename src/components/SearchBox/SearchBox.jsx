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
    <div className="card bg-base-100  w-65 max-w-sm shrink-0 shadow-2xl mt-5">
      <div className="card-body">
        <form>
          <div className="fieldset text-1xl ">
            <label className="label mb-2">
              Find contacts by name or number
            </label>
            <input
              type="text"
              value={name || number}
              onChange={handleFilter}
              className="input w-full input-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
