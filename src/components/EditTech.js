import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { editTech } from "../store/actions";
import { connect } from "react-redux";

function EditTech(props) {
  const { id } = useParams();
  const history = useHistory();
  const [editTech, setEditTech] = useState({
    tech_image: "",
    tech_type: "",
    day_duration: "",
    start_date: "",
  });

  const onChange = (e) => {
    setEditTech({
      ...editTech,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    props.editTech(id, editTech);
    history.push("/tech");
  };

  return (
    <form onSubmit={onSubmit}>
       <label>
          Type:
          <input
            type="text"
            value={editTech.tech_type}
            onChange={onChange}
            name="tech_type"
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={editTech.tech_image}
            onChange={onChange}
            name="tech_image"
          />
        </label>
        <label>
          Duration:
          <input
            type="text"
            value={editTech.day_duration}
            onChange={onChange}
            name="day_duration"
          />
        </label>
        <label>
          Start Date:
          <input
            type="text"
            value={editTech.start_date}
            onChange={onChange}
            name="start_date"
          />
        </label>
        <button>Edit Equipment</button>
      </form>
  );
}

export default connect(null, {editTech})(EditTech);