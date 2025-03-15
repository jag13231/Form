import React, { useState } from "react";
import "../App.css";
import { initialErrors } from "../Services/Errors";
import { RegisterApi } from "../Services/Api";
import { StoreUserData } from "../Services/Storage";
import { Authenticate } from "../Services/Auth";
import { Navigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Form = ({ inputs, setInputs, show, setShow }) => {
  // _____________________STATES______________________________ //

  const [errors, setErrors] = useState(initialErrors);
  const [loading, setLoading] = useState(false);
  const [txt, setTxt] = useState("");
  const [num, setNum] = useState("");

  const handleClick = () => {
    setShow(!show);
  };

  const handleText = (e) => {
    const { value } = e.target;
    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setTxt(value);
    }
  };

  const handleNum = (e) => {
    const { value } = e.target;
    const re = /^[0-9\b]+$/;
    if (value === "" || re.test(value)) {
      setNum(value);
    }
  };

  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let submitError = false;
    let errors = initialErrors;

    if (txt === "") {
      errors.name.required = true;
      submitError = true;
    }

    if (inputs.password === "") {
      errors.password.required = true;
      submitError = true;
    }
    if (inputs.email === "") {
      errors.email.required = true;
      submitError = true;
    }
    if (num === "") {
      errors.number.required = true;
      submitError = true;
    }
    if (inputs.url === "") {
      errors.url.required = true;
      submitError = true;
    }
    if (inputs.date === "") {
      errors.date.required = true;
      submitError = true;
    }
    if (inputs.select === "") {
      errors.select.required = true;
      submitError = true;
    }
    if (inputs.textarea === "") {
      errors.textarea.required = true;
      submitError = true;
    }
    if (inputs.file === "") {
      errors.file.required = true;
      submitError = true;
    }
    if (inputs.isMarried === "") {
      errors.isMarried.required = true;
      submitError = true;
    }
    if (inputs.radio === "") {
      errors.radio.required = true;
      submitError = true;
    }

    setErrors({ ...errors });

    if (!submitError) {
      setLoading(true);
      RegisterApi(inputs)
        .then((response) => {
          StoreUserData(response.data.idToken);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  if (Authenticate()) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-validation" action="">
        <input
          type="text"
          onChange={handleText}
          placeholder="Username"
          name="name"
          value={txt}
        />
        {errors.name.required ? <p>Name is required</p> : null}
        <div className="password">
          <input
            className="Pass"
            type={show ? "text" : "password"}
            onChange={handleInput}
            placeholder="Password"
            name="password"
            id=""
          />
          <span onClick={handleClick}>
            {show ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>
        {errors.password.required ? <p>Password is required</p> : null}
        <input
          type="email"
          onChange={handleInput}
          placeholder="Email"
          name="email"
          id=""
        />
        {errors.email.required ? <p>Email is required</p> : null}
        <input
          type="text"
          onChange={handleNum}
          placeholder="Phone number"
          name="number"
          value={num}
          id=""
          maxlength={10}
        />
        {errors.number.required ? <p>Number is required</p> : null}
        <input
          type="url"
          onChange={handleInput}
          placeholder="URL"
          name="url"
          id=""
        />
        {errors.url.required ? <p> Please Enter URL</p> : null}
        <input
          type="date"
          onChange={handleInput}
          placeholder="DOB"
          name="date"
          id=""
        />
        {errors.date.required ? <p>Enter your DOB</p> : null}
        <div className="labels">
          <label htmlFor="country">Select a Country</label>
          <select name="select" onChange={handleInput} id="">
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          {errors.select.required ? <p>Select a country</p> : null}
        </div>

        <label className="label" htmlFor="">
          <h4>Gender : </h4>
          <input
            type="radio"
            name="radio"
            onChange={handleInput}
            value="Male"
          />
          Male
          <input
            type="radio"
            name="radio"
            onChange={handleInput}
            value="Female"
          />
          Female
          {errors.radio.required ? <p>Select your gender</p> : null}
        </label>
        <label className="label" htmlFor="">
          <h4>Marital Statuts : </h4>
          <input
            type="checkbox"
            name="isMarried"
            id="isMarried"
            onChange={handleInput}
            value="Married"
          />
          Married
          <input
            type="checkbox"
            name="isMarried"
            id="isMarried"
            onChange={handleInput}
            value="UnMarried"
          />
          unMarried
          {errors.isMarried.required ? <p>Enter your Martial Status</p> : null}
        </label>
        <textarea
          name="textarea"
          placeholder="Describe Something ?"
          onChange={handleInput}
          id=""
        ></textarea>
        <input type="file" onChange={handleInput} name="file" id="" />
        {errors.file.required ? <p>File is Required</p> : null}

        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary " role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          true
        )}
        <input className="submit-form" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
