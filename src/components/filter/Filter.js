import React from "react";
import { connect } from "react-redux";
import { getFilterQuery } from "../../redux/actions";
import styles from "./Filter.module.css";

const Filter = (props) => (
  <div>
    <p className={styles.paragraf}>Find contact by name</p>
    <input
      className={styles.search}
      placeholder="Search by name"
      type="text"
      onChange={props.getFilterQuery}
    />
  </div>
);

export default connect(null, { getFilterQuery })(Filter);
