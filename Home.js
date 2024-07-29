import React from 'react';
import '../src/Home.css'
import logo1 from '../src/images/Rjs.1.webp'
import { useState } from 'react';
import { Provider } from 'react-redux';
import Courseadd from './Courseadd';
import Courseview from './Courseview';
import Store from './Store';//show full bracket{}

const Home = () => {

  const [showMore, setshowMore] = useState(false);

  const handleClick = () => {
    setshowMore(!showMore);//showmore from the usestate
  };


  

  return (
    <>

      <div className='container'>

        <h1>Learning...</h1>
        <div className='Down'>
          <p>{showMore ? 'A paraprofessional educator, alternatively known as a paraeducator, para, instructional assistanteducational assistant, teachers aide or classroom assistant, is a teaching-related position within a ...' : 'A paraprofessional educator, alternatively known as a paraeducator, para, instructional assistant....'}</p>
          <a href='#'  style={{color:"green"}} onClick={handleClick}>{showMore  ?  'Read less' : 'Read more'}</a>
        </div>
        <img src={logo1} alt='' />
      </div>

      <Provider store={Store}>

        <Courseadd />
       <Courseview />
      </Provider>
    </>
  );
};




export default Home;