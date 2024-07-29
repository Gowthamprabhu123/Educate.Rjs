import React from "react";
import '../src/App.css'
import { useState } from "react";
import { addCourse as addCourse } from "./Slice";
import {  useDispatch } from "react-redux";


function Courseadd(){
const [input,Setinput]=useState("")
const dispatch=useDispatch();

 function addCourseB(){
    if (input){
   dispatch(addCourse(input)) 
   Setinput("");//empty input
 }
 }



return<>
   <div>
<h3>Add course</h3>
<input type="text" value={input} onChange={(e) => Setinput(e.target.value)}/>
 <button className="add" onClick={addCourseB}>Add</button>

</div>
</>
 


}

export default Courseadd