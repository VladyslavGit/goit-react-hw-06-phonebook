import React from "react";
import styles from "./ContactListItem.module.css";
import { connect } from "react-redux";
import { removeContact } from "../../redux/actions";

const ContactListItem = (props) => {
  return (
    <li key={props.contact.id} className={styles.contactListItem}>
      <span>{props.contact.name}: </span>
      <div className={styles.TelBox}>
        <a className={styles.linkToTel} href={"tel:" + props.contact.number}>
          {props.contact.number}
        </a>
        <button
          className={styles.buttonDel}
          type="button"
          onClick={() => props.removeContact(props.contact.id)}
          //   id={props.contact.id}
        ></button>
      </div>
    </li>
  );
};

const mapDTP = {
  removeContact,
};

export default connect(null, mapDTP)(ContactListItem);
