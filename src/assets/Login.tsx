import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  function handelFormClick(e: { preventDefault: () => void }) {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("phoneNo", phone);
    localStorage.setItem("Email", email);
    localStorage.getItem("name") ? navigate("/home") : navigate("/");
  }
  useEffect(() => {
    let logedIn = localStorage.getItem("name");
    if (logedIn) {
      navigate("/home");
    }
  }, []);
  return (
    <div className="home">
      <form action="" onSubmit={handelFormClick} className="user-info">
        <TextField
          id="filled-basic"
          className="name"
          label="Name"
          variant="standard"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required={true}
        />
        <TextField
          id="filled-basic "
          className="phoneNo"
          label="Phone number"
          type="number"
          variant="standard"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required={true}
        />
        <TextField
          id="filled-basic email"
          className="email"
          label="Email"
          variant="standard"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />

        <Button variant="contained" color="success" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
