import React, {Component} from 'react'
class PersonClass extends Component {
  render() {
    return (
    <div>
     <span>Hola, me llamo {this.props.name},</span>
     <span> mi apellido es {this.props.surname} </span>
     <span>y tengo {this.props.age} años.</span>
    </div>
    )
  }
 }
 export default PersonClass
 
 
 
 