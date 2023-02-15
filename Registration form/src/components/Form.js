import React, { useEffect, useState } from 'react'

const Form = () => {
    const data= {name:"", email:"", password:""};
    const [inputData, setInputData] = useState(data)
    const [flag, setflag] = useState(false)
    useEffect(() =>{
      console.log('Registered')
    },[flag])

     const HandleData = (e) => {
       setInputData({...inputData, [e.target.name]:e.target.value})
       console.log(inputData)
     }

     const handleSubmit = (e) => {
      e.preventDefault();
      if(!inputData.name || !inputData.email || !inputData.password){
          alert ('All field are Mandatory')
          }
          else{
            setflag(true)
          }
     }
     
  return (
    <>
    <pre>{ (flag)?<h2 className=''>Hello {inputData.name}, 
    You've Registered Successfully</h2>:""}</pre>
    <form className='container' onSubmit={handleSubmit}>
    <div className='header'>
        <h1>Registration Form</h1>
    </div>

    <div>
        <input type='text' placeholder= "Enter Your Name"  name="name"
        value={inputData.name} onChange={HandleData} ></input>
    </div>
    <div>
        <input type='text' placeholder= "Enter Your email" name="email"
         value={inputData.email} onChange={HandleData}></input>
    </div>
    <div>
        <input type='text' placeholder= "Enter Your Password" name="password"
         value={inputData.password} onChange={HandleData}></input>
    </div>
    
    <div>
      <button type='submit'>Submit</button>
    </div>

    </form>
    </>
  )
}

export default Form