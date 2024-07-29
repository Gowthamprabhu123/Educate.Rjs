import React from 'react';
import '../src/About.css'
import logo1 from '../src/images/Rjs.2.png'
import { useState } from 'react';


const About = () => {
  const [showMore, setshowMore] = useState(false);



  const handleClick = () => {
    setshowMore(!showMore);
  };


  return (
    <div className='container1'>
      <h1>Understanding...</h1>

      <div className='Down1'>
        <p>{showMore ? 'A paraprofessional educator, alternatively known as a paraeducator, para, instructional assistant educational assistant, teachers aide or classroom assistant, is a teaching-related position within a ...' : 'A paraprofessional educator, alternatively known as a paraeducator, para, instructional assistant....'}</p>
        <a href='#' style={{ color: "green" }} onClick={handleClick}>{showMore ? 'Read less' : 'Read more'}</a>
      </div>

      <img src={logo1} alt='' />
    </div>

  );
};

export default About;