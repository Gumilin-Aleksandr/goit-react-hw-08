import { Link } from "react-router-dom";
import i from "../../assets/nf2.jpg";

const NotFoundPage = () => {
  return (
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
            Oops, something went wrong!
          </h1>
          <button className="btn btn-primary">
            <Link to="/">Go Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default NotFoundPage;
