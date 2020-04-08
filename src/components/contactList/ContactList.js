import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ContactTransition from "../transitions/ContactTransition.module.css";
import ContactListItem from "./../contactListItem/ContactListItem";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts }) => (
  <TransitionGroup component="ul" className={styles.contactList}>
    {contacts.map((contact) => (
      <CSSTransition
        key={contact.id}
        timeout={700}
        classNames={ContactTransition}
        unmountOnExit
      >
        <ContactListItem contact={contact} />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default ContactList;
