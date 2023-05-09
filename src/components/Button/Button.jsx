import React from 'react'
import css from './Button.module.css'
export default function Button({loadmoreClick, text}) {
  return (
    <button className = {css.Button} type='button' onClick={loadmoreClick}>{text}</button>
  )
}


