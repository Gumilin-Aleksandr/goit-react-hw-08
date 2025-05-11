import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectLoading,
  selectVisibleContacts,
} from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div>
          <ContactForm />
        </div>
        <div>
          <SearchBox />
        </div>
        <div>{isLoading && "Request in progress..."}</div>
        <div>
          <p className={css.text}>Your saved contacts:</p>
          <ContactList contacts={contacts} />
        </div>
      </div>
    </div>
  );
}
