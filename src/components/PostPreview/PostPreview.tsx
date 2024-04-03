import React from 'react'
import styles from './PostPreview.module.css'
import ButtonLike from '../ButtonLike/ButtonLike'
import ButtonDislike from '../ButtonDislike/ButtonDislike'
import ButtonReadMore from '../ButtonReadMore/ButtonReadMore'

type Props = {
  imgUrl: string,
  title: string,
  likeNumber: number,
  dislikeNumber: number,
  reaction?: 'like' | 'dislike',
  id: string,
}

const PostPreview = ({ title, likeNumber, dislikeNumber, id, reaction, imgUrl }: Props) => {
  return (
    <li className={styles.post}>
      <img src={imgUrl} alt="" />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.footer}>
          <span className={styles.reaction}>
            <ButtonLike number={likeNumber} active={reaction === 'like'}/>
            <ButtonDislike number={dislikeNumber} active={reaction === 'dislike'} />
          </span>
          <ButtonReadMore postPath={`/${id}`} />
        </div>
      </div>
    </li>
  )
}

export default PostPreview