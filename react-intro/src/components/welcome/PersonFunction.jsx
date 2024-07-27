import React from 'react'
function PersonFunction (props) {
  return (
    <div> 
     <span>Me llamo {props.name},</span>
     <span> mi apellido es {props.surname}</span>
     <span> y tengo {props.age} años.</span>
    </div>
    )
  
 
}
export default PersonFunction
