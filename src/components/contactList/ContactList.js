import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ContactTransition from "../transitions/ContactTransition.module.css";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => (
  <TransitionGroup component="ul" className={styles.contactList}>
    {contacts.map((contact) => (
      <CSSTransition
        key={contact.id}
        timeout={700}
        classNames={ContactTransition}
        unmountOnExit
      >
        <li key={contact.id} className={styles.contactListItem}>
          <span>{contact.name}: </span>
          <div className={styles.TelBox}>
            <a className={styles.linkToTel} href={"tel:" + contact.number}>
              {contact.number}
            </a>
            <button
              className={styles.buttonDel}
              type="button"
              onClick={deleteContact}
              id={contact.id}
            ></button>
          </div>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default ContactList;
