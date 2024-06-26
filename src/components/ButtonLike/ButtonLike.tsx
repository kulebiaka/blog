import React from 'react'
import styles from './ButtonLike.module.css'

type PropsType = {
  number: number,
  active: boolean,
  onLike: (...args: any) => any
}

const ButtonLike = ({ number, active, onLike }: PropsType) => {
  return (
    <div className={styles.button}>
      <svg onClick={onLike} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.66666 26.6667H5.33332C6.06666 26.6667 6.66666 26.0667 6.66666 25.3333V13.3333C6.66666 12.6 6.06666 12 5.33332 12H2.66666V26.6667ZM29.1067 17.1733C29.2533 16.84 29.3333 16.48 29.3333 16.1067V14.6667C29.3333 13.2 28.1333 12 26.6667 12H19.3333L20.56 5.8C20.6267 5.50667 20.5867 5.18667 20.4533 4.92001C20.1467 4.32001 19.76 3.77334 19.28 3.29334L18.6667 2.66667L10.12 11.2133C9.61332 11.72 9.33332 12.4 9.33332 13.1067V23.56C9.33332 25.2667 10.7333 26.6667 12.4533 26.6667H23.2667C24.2 26.6667 25.08 26.1733 25.56 25.3733L29.1067 17.1733Z" fill={active ? '#219653' : '#3A35418A'} />
      </svg>
      <span className={styles.number}>{number}</span>
    </div>
  )
}




export default ButtonLike