import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import styles from "./App.module.css";
import titleTransition from "./transitions/TitleTransition.module.css";
import FilterTransition from "./transitions/FilterTransition.module.css";
import NotificationTransition from "./transitions/NotificationTransition.module.css";
import Notification from "./notification/Notification";
import titleContactTransition from "./transitions/ContactTitleTransition.module.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    mainTitle: false,
    notification: false,
  };

  componentDidMount() {
    const contacts =
      localStorage.getItem("contacts") !== null
        ? JSON.parse(localStorage.getItem("contacts"))
        : [];
    this.setState({ contacts, mainTitle: true });
  }

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  submitContact = (data) => {
    const isPersonExist = this.state.contacts.find(
      (person) => person.name === data.name
    );
    !isPersonExist
      ? this.setState((prevstate) => ({
          contacts: [...prevstate.contacts, data],
        }))
      : this.setState({ notification: true });
    setTimeout(() => this.setState({ notification: false }), 2000);
  };

  deleteContact = (e) => {
    const id = e.target.id;
    this.setState((prevstate) => ({
      contacts: prevstate.contacts.filter((contact) => contact.id !== id),
    }));
  };

  getName = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <div className={styles.formBox}>
        <CSSTransition
          in={this.state.mainTitle}
          timeout={700}
          unmountOnExit
          classNames={titleTransition}
        >
          <h2 className={styles.title}>Phonebook</h2>
        </CSSTransition>
        <ContactForm submitContact={this.submitContact} />
        <CSSTransition
          in={this.state.contacts.length > 0}
          timeout={700}
          unmountOnExit
          classNames={titleContactTransition}
        >
          <h2 className={styles.paragraf}>Contacts</h2>
        </CSSTransition>
        <CSSTransition
          in={this.state.contacts.length > 1}
          timeout={700}
          classNames={FilterTransition}
          unmountOnExit
        >
          <Filter getName={this.getName} />
        </CSSTransition>
        <ContactList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
        <CSSTransition
          in={this.state.notification}
          timeout={750}
          classNames={NotificationTransition}
          unmountOnExit
        >
          <div className={styles.notificationBox}>
            <Notification />
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
