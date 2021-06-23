import React, { useState } from "react";
import { addTech } from "../store/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const initialValues = {
  tech_image: "",
  tech_type: "",
  day_duration: "",
  start_date: "",
};

function ClassForm(props) {
  const [values, setValues] = useState(initialValues);
  const history = useHistory();

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTech = { ...values };
    console.log(newTech);
    props.addClasses(newTech);
    setTimeout(() => {
      history.push("/dashboard");
    }, 3000);
  };

  return (
    <div>
      <h1>Tech Form</h1>
      {/* <div className="errors">
                            <div>{errorValues.username}</div>
                            <div>{errorValues.password}</div>
                        </div> */}
      <form className="form container" onSubmit={handleSubmit}>
        {/* <label>Name:
                    <input
                        type = 'text'
                        value = {values.name}
                        onChange = {onChange}
                        name = 'name'
                    />
                </label> */}
        <label>
          Type:
          <input
            type="text"
            value={values.tech_type}
            onChange={onChange}
            name="tech_type"
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={values.tech_image}
            onChange={onChange}
            name="tech_image"
          />
        </label>
        <label>
          Duration:
          <input
            type="text"
            value={values.day_duration}
            onChange={onChange}
            name="day_duration"
          />
        </label>
        <label>
          Start Date:
          <input
            type="text"
            value={values.start_date}
            onChange={onChange}
            name="start_date"
          />
        </label>
        <button>Add Class</button>
      </form>
    </div>
  );
}

const mapStatesToProps = (state) => {
  const { errors } = state;
  return {
    errors: errors,
  };
};

export default connect(mapStatesToProps, { addTech })(ClassForm);