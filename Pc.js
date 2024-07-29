import React from "react";
import '../src/App.css'

function  Pc()
{
  const user={
    name:"Designing"
  }
return(
  <>
<UserDetails 
 name={user.name}
/>
  </>
)
function UserDetails(props)
{
  return(
  <>
  <h1 className="props">This is our  {props.name} Course</h1>
 
 </>
  )
}
}
export default Pc