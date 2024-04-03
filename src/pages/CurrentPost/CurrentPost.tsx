import React from 'react'
import styles from './CurrentPost.module.css'
import ButtonLike from '../../components/ButtonLike/ButtonLike'
import ButtonDislike from '../../components/ButtonDislike/ButtonDislike'
import { NavLink } from 'react-router-dom'

type Props = {}

const CurrentPost = ({ title, likeNumber, dislikeNumber, id, reaction, imgUrl, body }: any) => {

  return (
    <div>
      <div className={styles.head}>
        <NavLink to={'/'}>
          <span className={styles.arrow}>&#8592;</span>
          <span className={styles.back_to_post}>Вернуться к статьям</span>
        </NavLink>
        <span className={styles.reaction}>
          <ButtonLike number={likeNumber} active={reaction === 'like'} />
          <ButtonDislike number={dislikeNumber} active={reaction === 'dislike'} />
        </span>
      </div>

      <h1 className={styles.title}>
        {title}
      </h1>

      <div className={styles.picture} >
        <img src='https://placehold.co/848x477' alt="" />
      </div>

      <div className={styles.text}>
        {body}
      </div>

    </div>
  )
}

export default CurrentPost