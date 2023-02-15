import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import './signup.css';

const SignUp = () => {

  const [inpval, setInpval] = useState({
    Username: "",
    Email: "",
    Mobile: "",
    Password: ""
  })
  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // const value = e.target.value;
    console.log(value, name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  }

  const addData = (e) => {
    e.preventDefault();

    const { Username, Email, Mobile, Password } = inpval;

    if (Username === "") {
      alert("Username field is required")
    } else if (Email === "") {
      alert("Email field is required")
    } else if (!Email.includes("@")) {
      alert("plz enter valid email address")
    } else if (Mobile === "") {
      alert("Mobile field is required")
    } else if (!Mobile.includes("10")) {
      alert("plz enter valid number")
    } else if (Password === "") {
      alert("Password field is required")
    } else if (Password.length < 5) {
      alert("password lenght greater five")
    } else {
      console.log("data added succesfully")

      localStorage.setItem("userData", JSON.stringify([...data, inpval]));
    }
  }

  return (
    <div className="container">
      <form >
        <h1>Registration Form</h1>
        <div>
          <TextField label="Username" name="Username" variant="standard"
            onChange={getdata} />
        </div>
        <div>
          <TextField label="Email" name="Email" variant="standard"
            onChange={getdata} />
        </div>
        <div>
          <TextField label="Mobile" name="Mobile" variant="standard"
            onChange={getdata} />
        </div>
        <div>
          <TextField label="Password" name="Password" variant="standard"
            onChange={getdata} />
        </div>
        <br></br>
        <div>
          <Button variant="contained" disableElevation onClick={addData}> Submit</Button>
        </div>
        <p>Already Registered <span><NavLink to='/login'>LogIn</NavLink></span></p>

      </form>
    </div>

  )
}

export default SignUp;