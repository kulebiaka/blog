import React from 'react'
import styles from './ButtonReadMore.module.css'
import { NavLink } from 'react-router-dom'

const ButtonReadMore = ({postPath} : {postPath: string}) => {
  return (
    <NavLink to={postPath}>
      <button className={styles.button}>Читать далее</button>
    </NavLink>
  )
}

export default ButtonReadMore