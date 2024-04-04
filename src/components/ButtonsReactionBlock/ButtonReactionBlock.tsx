import React from 'react'
import styles from './ButtonReactionBlock.module.css'
import ButtonLike from '../ButtonLike/ButtonLike'
import ButtonDislike from '../ButtonDislike/ButtonDislike'

type ReactionBlock = {
  likeNumber: number,
  dislikeNumber: number,
  reaction?: 'like' | 'dislike',
  onLike: (...args: any) => any,
  onDislike: (...args: any) => any
}

const ButtonReactionBlock = ({likeNumber, dislikeNumber, reaction, onLike, onDislike}: ReactionBlock) => {
  return (
    <span className={styles.reaction}>
      <ButtonLike onLike={onLike} number={likeNumber} active={reaction === 'like'} />
      <ButtonDislike onDislike={onDislike} number={dislikeNumber} active={reaction === 'dislike'} />
    </span>
  )
}

export default ButtonReactionBlock