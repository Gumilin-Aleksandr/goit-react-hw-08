import { Link } from "react-router-dom";
import css from "./HomePage.module.css";
import { TfiAgenda } from "react-icons/tfi";
import i from "../../assets/home.jpg";

export default function HomePage() {
  return (
    // <div className={css.container}>
    //   <p>Welcome to your personal Phone Book!</p>
    //   <TfiAgenda className={css.image} />
    // </div>
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${i})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">
            Welcome to your personal Phone Book!
          </h1>
          <p className="mb-5">Please register or login to continue.</p>
          <button className="btn btn-primary">
            <Link to="/login">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
