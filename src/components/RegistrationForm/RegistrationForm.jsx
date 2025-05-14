import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => toast.success("You have successfully registered!"))
      .catch(() =>
        toast.error("User with this email already registered, please login.")
      );

    actions.resetForm();
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {/* <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Username
            <Field type="text" name="name" />
          </label>
          <label className={css.label}>
            Email
            <Field type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik> */}
      <div className="hero text-2xl bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Register now!</h1>
            <p className="py-2">Please register to create your Phone book.</p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                  <fieldset className="fieldset text-1xl">
                    <label className="label">Name</label>
                    <Field
                      name="name"
                      type="name"
                      className="input w-full"
                      placeholder="Name"
                    />
                    <label className="label">Email</label>
                    <Field
                      name="email"
                      type="email"
                      className="input w-full"
                      placeholder="Email"
                    />
                    <label className="label">Password</label>
                    <Field
                      name="password"
                      type="password"
                      className="input w-full"
                      placeholder="Password"
                    />
                    <div className="mt-2 mb-2">
                      <Link to="/login" className="link link-hover">
                        You already have account? Login!
                      </Link>
                    </div>
                    <button type="submit" className="btn btn-neutral">
                      Register
                    </button>
                  </fieldset>
                </Form>
              </Formik>
              <div className="divider divider-ghost mb-0"></div>
              <Link className="text-1xl text-center" to="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
