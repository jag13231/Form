import React, { useState } from "react";
import "./gfrm.css";

const Regfrm = () => {
  const [user, setUser] = useState({
    name: "ram kumar",
    age: 24,
    gender: "Male",
    isMarried: true,
  });

  function changeHandler(e) {
    const name = e.target.name 
    console.log(name);
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUser({...user,[name]: value})
    
  }
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{user.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <td>Marital status</td>
            <td>{user.isMarried ? "Married" : "Not Married"}</td>
          </tr>
        </tbody>
      </table>
      <form action="">
        <input type="text" placeholder="Full Name" onChange={changeHandler} name="name" value={user.name} />
        <input type="number" placeholder="Age" onChange={changeHandler} name="age" value={user.age} />
        <div className="gender">
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              checked={user.gender === "Male"}
              value="Male"
              onChange={changeHandler}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              checked={user.gender === "Female"}
              value="Female"
              onChange={changeHandler}
            />
            Female
          </label>
        </div>
        <label htmlFor="">
          <input
            type="checkbox"
            name="isMarried"
            id="isMarried"
            checked={user.isMarried}
            onChange={changeHandler}
          />
          isMarried
        </label>
      </form>
    </>
  );
};

export default Regfrm;
