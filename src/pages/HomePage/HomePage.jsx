import css from "./HomePage.module.css";
import { TfiAgenda } from "react-icons/tfi";

export default function HomePage() {
  return (
    <div className={css.container}>
      <p>Welcome to your personal Phone Book!</p>
      <TfiAgenda className={css.image} />
    </div>
  );
}
