import React from 'react'
import { Oval } from  'react-loader-spinner'
import css from './Loader.module.css'

export default function Loader() {
  return (
    
        <Oval
    className={css.Loader}
    height={80}
    width={80}
    color="#4fa94d"
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="#4fa94d"
    strokeWidth={2}
    strokeWidthSecondary={2}
  />
  
    
  )
}

