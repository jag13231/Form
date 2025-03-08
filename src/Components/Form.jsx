import React, { useState } from "react";
import "../App.css";
import { RegisterApi } from "../Services/Api";
import { StoreUserData } from "../Services/Storage";
import { Authenticate } from "../Services/Auth";
import { Navigate } from "react-router-dom";
const Form = () => {
  const initialErrors = {
    name: { required: false },
    password: { required: false },
    email: { required: false },
    number: { required: false },
    url: { required: false },
    date: { required: false },
    select: { required: false },
    textarea: { required: false },
    checkbox: { required: false },
    file: { required: false },
  };

  const [errors, setErrors] = useState(initialErrors);
  const [loading,setLoading] = useState (false)
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
    email: "",
    number: "",
    url: "",
    date: "",
    select: "",
    textarea: "",
    file: "",
  });
  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let submitError = false;
    let errors = initialErrors;
    if (inputs.name === "") {
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
    if (inputs.number === "") {
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

    setErrors({ ...errors });

    if (!submitError) {
      setLoading(true)
      RegisterApi(inputs)
        .then((response) => {
          StoreUserData(response.data.idToken);
        })
        .catch((err) => {
          console.log(err);
        }).finally(()=>{
          setLoading(false)
        })
    }
  };

  if (Authenticate()) {
    return <Navigate to="/home"/>;
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-validation" action="">
        <input
          type="text"
          onChange={handleInput}
          placeholder="Username"
          name="name"
        />
        {errors.name.required ? <p>Name is required</p> : null}
        <input
          type="password"
          onChange={handleInput}
          placeholder="Password"
          name="password"
          id=""
        />
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
          type="number"
          onChange={handleInput}
          placeholder="Phone number"
          name="number"
          id=""
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
        <select name="select" onChange={handleInput} id="">
          <option value="">Select an Option</option>
          <option value="Yes">yes</option>
          <option value="NO">no</option>
        </select>
        <textarea name="textarea" onChange={handleInput} id=""></textarea>
        <input type="file" onChange={handleInput} name="file" id="" />
        {errors.file.required ? <p>File is required</p> : null}

        {loading?(<div  className="text-center" >
                         <div className="spinner-border text-primary " role="status">
                           <span className="sr-only">Loading...</span>
                         </div>
                       </div>):true}
        <input className="submit-form" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
