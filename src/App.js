import "./App.css";
import { Routes, Route } from "react-router-dom";
import Form from "./Components/Form";
import Home from "./Components/Home";
import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
    email: "",
    number: "",
    url: "",
    date: "",
    select: "India",
    textarea: "",
    file: "",
    isMarried: "",
    radio: "",
  });
  const [show, setShow] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Form
              inputs={inputs}
              setInputs={setInputs}
              show={show}
              setShow={setShow}
            />
          }
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
