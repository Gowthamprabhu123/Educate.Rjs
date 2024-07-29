
import React, { useState } from 'react';
import '../src/App.css'
import Ex1 from './Ex1';

const Policy = () => {
  const [isShow, SetShowpara] = useState(false)

  const [color, setColor] = useState('');

  const [isLoggedout, setLoggedIn] = useState(false);



  return (
    <>
      <div>
        <h2 className='mar'>Click here to know about Policy</h2>
        <button className='col' onClick={() => SetShowpara(true)}>Click Here</button>
        {isShow && <p>
          <ul className='big'>
            <button className='col' onClick={() =>setColor(   color === 'red' ? 'blue' : 'red')}>Change Color</button>
            <h1 style={{ color: color }}>*National Education Policy, 2020*</h1>
            <li>  National Education Policy, 2020 (NEP) envisions a massive transformation in education through“an education system rooted in Indian ethos that contributes directly to transforming India,</li>
            <li> "The NEP 2020 is founded on the five guiding pillars of Access, Equity, Quality, Affordability and Accountability". It will prepare our youth to meet the diverse national and global challenges of the present and the future.</li>
            <li>In school education, the National Education Policy 2020 stresses on the core values and principle that education must develop not only the cognitive skills</li>
            <li> It recommends plethora of reforms at all levels of school education which seek to ensure quality of schools, transformation of the curriculum including pedagogy with 5+3+3+4 design covering children in the age group 3-18 years</li>

          </ul>
        </p>}
      </div>
      <div style={{ color: "green" }} className='log'>
        {isLoggedout ? (<h2>Thank you!</h2>) : (<button onClick={() => setLoggedIn(true)}>Log out</button>
        )}
      </div>
      <Ex1 />

    </>
  );
};

export default Policy;
