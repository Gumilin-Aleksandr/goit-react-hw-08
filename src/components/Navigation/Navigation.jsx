import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";

export const setActiveClass = ({ isActive }) => {
  return clsx(isActive && "text-red-500");
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className="flex gap-3">
      <NavLink className={setActiveClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={setActiveClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
