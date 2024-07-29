import {  configureStore } from "@reduxjs/toolkit";
import courseReducer from './Slice'


  const Store = configureStore({
devTools:true,
reducer:{
    courses:courseReducer

}

  })

 export default Store