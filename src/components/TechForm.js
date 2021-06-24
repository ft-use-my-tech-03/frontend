import React, { useState } from "react";
import { addTech } from "../store/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

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
    props.addTech(newTech);
    setTimeout(() => {
      history.push("/dashboard");
    }, 3000);
  };

  return (
    <MainDiv>
      <H1>Tech Form</H1>
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
        <Label>
          Type:
          <Input
            type="text"
            value={values.tech_type}
            onChange={onChange}
            name="tech_type"
          />
        </Label>
        <Label>
          Image:
          <Input
            type="text"
            value={values.tech_image}
            onChange={onChange}
            name="tech_image"
          />
        </Label>
        <Label>
          Duration:
          <Input
            type="text"
            value={values.day_duration}
            onChange={onChange}
            name="day_duration"
          />
        </Label>
        <Label>
          Start Date:
          <Input
            type="text"
            value={values.start_date}
            onChange={onChange}
            name="start_date"
          />
        </Label>
        <Button>Add Equipment</Button>
      </form>
    </MainDiv>
  );
}

const mapStatesToProps = (state) => {
  const { errors } = state;
  return {
    errors: errors,
  };
};

export default connect(mapStatesToProps, { addTech })(ClassForm);

const MainDiv = styled.div`
background-image: url('https://www.odysseyis.com/wp-content/uploads/2019/05/46598089_m-2-e1558647186168.jpg');
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const H1 = styled.h1`
color: #042C71;
font-family: sans-serif;
	font-size: 3em;
	font-weight: 600;
`

const Label = styled.label`
font-family: sans-serif;
	font-size: 1.2rem;
	font-weight: 600;
color: #042C71;
`

const Input = styled.input`
width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
`

const Button = styled.button`
padding: 14px 20px;
margin: 8px 0;
border: none;
cursor: pointer;
width: 100%;
color: #042C71;
&: hover {
    opacity: 0.8;   
}
`