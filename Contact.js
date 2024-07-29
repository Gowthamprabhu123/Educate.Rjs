import React, { useEffect } from 'react';
import { useState } from 'react';
import '../src/App.css'//count +1> use ()


const Contact = () => {

  const [formData, setFormData] = useState({
    username: '',
    mailid: '',
    number: ''
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const [count, SetCount] = useState(0);
  const [IsloggedIn, setloggedIn] = useState(false);

  useEffect(() => {
    document.title = `${count}times  successfully Submitted`;

  },);



  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);
  }



  return (
    <>

      <form onSubmit={handleFormSubmit}>

        <div style={{ color: "blue" }} className='input'>
          <div>
            <label>UserName:</label><br></br>
            <input type='text' name='username' value={FormData.username} onChange={handleInputChange} />
          </div><br />
          <div>
            <label>Mail-Id:</label><br></br>
            <input type='mail' name='mail' value={FormData.mail} onChange={handleInputChange} />
          </div> <br />
          <div>
            <label>PhoneNumber:</label><br></br>
            <input type='number' name='number' value={FormData.number} onChange={handleInputChange} /><br /><br />
          </div>
        </div>
        <div>
          <button className='sub' onClick={() => SetCount(count + 1)}>SUBMIT</button>
          <h3 className='sub1'>{count} times successfully Submitted</h3>
        </div>
      </form>
      <div className='log'>
        <h2>OR</h2>
        {IsloggedIn ? (<h3>Please Log into Continue</h3>) : (<button onClick={() => setloggedIn(true)}>Log In</button>)}
      </div>


    </>
  );
};

export default Contact;