import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-5">
      <div className="card-body">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
        >
          <Form>
            <fieldset className="fieldset text-1xl ">
              <div className={s.group}>
                <label className="label mb-2">Name</label>
                <Field
                  name="name"
                  type="name"
                  className="input w-full input-primary"
                  placeholder="Name"
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className={s.error}
                />
              </div>
              <div className={s.group}>
                <label className="label mb-2 mt-3">Number</label>
                <Field
                  name="number"
                  type="number"
                  className="input w-full input-primary"
                  placeholder="Number"
                />
                <ErrorMessage
                  name="number"
                  component="span"
                  className={s.error}
                />
              </div>
              <div className="flex justify-center mt-5">
                <button type="submit" className="btn btn-primary">
                  Add Contact
                </button>
              </div>
            </fieldset>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ContactForm;
