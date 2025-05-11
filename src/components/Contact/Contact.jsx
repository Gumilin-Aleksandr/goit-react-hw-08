import { FaPhone, FaUser } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contacts/operations";

function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.container}>
      <div className={s.contact}>
        <p className={s.items}>
          <FaUser />
          {name}
        </p>
        <p className={s.items}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={s.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
