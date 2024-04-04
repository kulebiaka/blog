import React from 'react'
import styles from './PostPreview.module.css'
import ButtonReadMore from '../ButtonReadMore/ButtonReadMore'
import { useAppDispatch } from '../../redux'
import ButtonReactionBlock from '../ButtonsReactionBlock/ButtonReactionBlock'
import { dislikePost, likePost } from '../../redux/postSlice'

type Rating = {
  likeNumber: number,
  dislikeNumber: number,
  reaction?: 'like' | 'dislike',
}

type Props = {
  imgUrl?: string,
  title: string,
  postId: string,
  rating: Rating
}

const PostPreview = ({ title, postId, imgUrl, rating: { likeNumber, dislikeNumber, reaction} }: Props) => {

  const dispatch = useAppDispatch()

  const onLikeButton = () => {
    dispatch(likePost(postId))
  }
  const onDislikeButton = () => {
    dispatch(dislikePost(postId))
  }

  return (
    <li className={styles.post}>
      <img className={styles.img} src={imgUrl ?? 'https://placehold.co/558x273'} alt="" />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.footer}>
          <ButtonReactionBlock likeNumber={likeNumber} dislikeNumber={dislikeNumber} reaction={reaction} onLike={onLikeButton} onDislike={onDislikeButton}/>
          <ButtonReadMore postPath={`/posts/${postId}`} />
        </div>
      </div>
    </li>
  )
}

export default PostPreview