import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import {
  selectError,
  selectLoading,
  selectVisibleContacts,
} from "../../redux/contacts/selectors";

function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <ul className=" ">
      {visibleContacts.map((contact) => (
        <li
          className="card bg-white  w-full max-w-sm shadow-xl mb-2"
          key={contact.id}
        >
          <Contact contact={contact} />
        </li>
      ))}
      {loading && <h2>Loading, please wait...</h2>}
      {error && <h2>Oops, something went wrong...</h2>}
      {visibleContacts.length === 0 && !loading && !error && (
        <h2>No contacts</h2>
      )}
    </ul>
  );
}

export default ContactList;
