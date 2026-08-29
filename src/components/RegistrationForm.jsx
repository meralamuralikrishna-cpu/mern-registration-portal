import React from "react";
import { useState } from "react";

const RegistrationForm = () => {
  const [formData,setFormData] = useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
    password:"",
    cpassword:"",
    date:"",
    gender:"Male",
  });

  const handleChange = (e) =>{
    const{name,value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:value,
    }));
  };

  const handleSubmit = async(e) =>{
    e.preventDefault()

    if(formData.password != formData.cpassword){
      alert("password do not match")
      return
    }

  }

  const handleReset = () =>{
    setFormData({
      fname:"",
      lname:"",
      email:"",
      phone:"",
      password:"",
      cpassword:"",
      date:"",
      gender:"Male",
    });
  };

  

  return (
    <div>
      <h1><b>Registration</b></h1>
      <p>Please fill in the details below</p>
      <form onSubmit={handleSubmit}>
        <div id="card">
          <div className="flex-container">
            <div>
              <label htmlFor="fname"><b>FirstName</b></label>
              <br />
              <input type="text" id="fname" placeholder="Enter first name" name="fname" value={formData.fname} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="lname"><b>LastName</b></label>
              <br />
              <input type="text" id="lname" placeholder="Enter last name" name = "lname" value={formData.lname} onChange={handleChange} />
            </div>
          </div>
          <br />
          <div>
            <label htmlFor="email"><b>Email Address</b></label>
            <br />
            <input type="email" id="email" placeholder="Enter email address" name = "email" value={formData.email} onChange={handleChange} />
          </div>
          <br />
          <div>
            <label htmlFor="phone"><b>Phone Number</b></label>
            <br />
            <input type="tel" placeholder="Enter phone number" id="phone" name="phone" value={formData.phone} onChange={handleChange}/>
          </div>
          <br />
          <div className="flex-container">
            <div>
              <label htmlFor="password"><b>Password</b></label>
              <br />
              <input type="password" id="password" placeholder="Enter password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="cpassword"><b>Confirm password</b></label>
              <br />
              <input type="password" id="cpassword" placeholder="Enter password" name="cpassword" value={formData.cpassword} onChange={handleChange} />
            </div>
          </div>
          <br />
          <div className="flex-container">
            <div>
              <label htmlFor="date"><b>Date of Birth</b></label>
              <br />
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="gender"><b>Gender</b></label>
              <br />
              <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Bapatla Durga Gender">Bapatla Durga Gender</option>
              </select>
            </div>
          </div>
          <br />
          <div>
            <input type="submit" value="Submit" style={{ backgroundColor: "#2C3E50" }} />
            <br />
            <br />
            <input type="button" value="Reset" onClick={handleReset} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;