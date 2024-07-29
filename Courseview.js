import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse } from "./Slice";


export default function CustomerView()
 {
    const courses= useSelector((state)=> state.courses);
    const dispatch =useDispatch();

function deleteHandler(index)
{
    dispatch (deleteCourse(index))
}

return(
    <>
    <div>
        <h3>Customers List</h3>
<ul> 
    {
        courses.map((course, index)=> <li><h4>{course}  <button style={{color:"red"}} onClick={()=>deleteHandler(index)}>Delete</button> </h4>
        </li>
    )}

</ul>
 </div>
    </>
)

}
