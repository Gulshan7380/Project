import React, { useEffect, useState } from "react"
import Back from "../common/Back"
import img from "../images/pricing.jpg"
import "./contact.css"

const Contact = () => {
  const data = {name:"", email:"", subject:"", massage:""};
  const [inputData, setInputData ] = useState(data)

  useEffect(() =>{
    console.log('Submit Request')
  })

  const HandleData = (e) => {
    setInputData({...inputData, [e.target.name]:e.target.value})
    console.log(inputData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!inputData.name || !inputData.email || inputData.subject){
      alert ('All field are Mandatery')
    }
  }

  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' onSubmit={handleSubmit}>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' name="name"
              value={inputData.name} onChange={HandleData}  />
              <input type='text' placeholder='Email' name="email"
                 value={inputData.email} onChange={HandleData} />
            </div>
            <input type='text' placeholder='Subject' name="subject"
             value={inputData.subject} onChange={HandleData} />
            <textarea cols='30' rows='10'  name="massage"
            value={inputData.massage} onChange={HandleData}></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact;
