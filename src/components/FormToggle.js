import React from 'react'
import config from '../../config';


const FormToggle = props => {

  return(
    <a className="button fit primary actions center" onClick={props.clicked}>
      {props.children}
    </a>
  )
}


export default FormToggle
