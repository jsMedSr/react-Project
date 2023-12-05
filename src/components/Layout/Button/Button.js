import React from 'react'
import style from './Button.module.css'


function Button(props) {
  return (
    <>
    <button className={style.styleButton} style={props.style} type={props.type? props.type : 'button'} onClick={   props.fct }> 
      {props.children }
        </button>
    </>
  )
}

export default Button