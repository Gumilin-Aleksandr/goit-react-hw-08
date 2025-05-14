import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import { setActiveClass } from "../Navigation/Navigation";

export default function AuthNav() {
  return (
    <div className="flex gap-3">
      <NavLink className={setActiveClass} to="/register">
        Register
      </NavLink>
      <NavLink className={setActiveClass} to="/login">
        Login
      </NavLink>
    </div>
  );
}
