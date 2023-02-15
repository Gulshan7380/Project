import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const details = useNavigate();

  const [inpval, setInpval] = useState({
    Email: "",
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

    const { Email, Password } = inpval;
    if (Email === "") {
      alert("Email field is required")
    } else if (!Email.includes("@")) {
      alert("plz enter valid email address")
    } else if (Password === "") {
      alert("Password field is required")
    } else if (Password.length < 5) {
      alert("password lenght greater five")
    } else {
      console.log("data added succesfully")

      // localStorage.setItem("userData", JSON.stringify([...data, inpval]));
      
       
        details("/home")
      
    }
  }

  return (
    <div className="container">
      <form >
        <h1>Log In</h1>
        <div>
          <TextField label="Email" name="Email" variant="standard"
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


      </form>
    </div>

  )
}

export default Login;