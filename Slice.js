import {  createSlice } from "@reduxjs/toolkit";
const initialState=[];

const Slice= createSlice({
name:'course',
initialState,

reducers:{
    addCourse(state,action){
        state.push(action.payload)
    },
    deleteCourse(state,action) {
        const deleteIndex = action.payload;
        return state.filter((val,index)=> index !== deleteIndex)
    },
  
  
}


})

export const {addCourse,deleteCourse}= Slice.actions;
export default Slice.reducer
