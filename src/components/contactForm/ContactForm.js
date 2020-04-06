import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitContact({
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    });
    this.setState({
      name: "",
      number: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2 className={styles.paragraf}>Name</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            maxLength="18"
            onChange={this.handleChange}
            value={this.state.name}
            className={styles.input}
            required
          />
          <h2 className={styles.paragraf}>Number</h2>
          <div className={styles.numberBox}>
            <input
              type="tel"
              pattern="(\+?\d[- .]*){7,10}"
              maxLength="10"
              name="number"
              placeholder="Enter Number"
              onChange={this.handleChange}
              value={this.state.number}
              className={styles.input}
              required
            />
            <button type="submit" className={styles.buttonAdd}></button>
          </div>
        </form>
      </>
    );
  }
}

export default ContactForm;
