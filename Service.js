import React from 'react';
import '../src/App.css';
import img1 from '../src/images/React.avif'
import img2 from '../src/images/js.avif'
import img3 from '../src/images/python.avif'
import Pc from './Pc'

const Service = () => {
  const Knowmore = () => {
  }

  return (
    <>
        <Pc/>
      <div className='head1'> </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="boxe">
          <h1>REACT JS</h1><img src={img1} alt='' /><br /><br />
          <a href='/'><button className='click1' onClick={Knowmore}>Know More</button></a>

        </div>
        <div className="boxe2">
          <h1>JAVA SCRIPT</h1><img src={img2} alt='' /><br /><br />
          <a href='/'><button className='click2' onClick={Knowmore}>Know More</button></a>
        </div>
        <div className="boxe">
          F<h1>PYTHON</h1><img src={img3} alt='' /> <br /><br />
          <a href='./Home'> <button className='click3' onClick={Knowmore}>Know More</button></a></div>
      </div>
    </>
  )
}

export default Service;