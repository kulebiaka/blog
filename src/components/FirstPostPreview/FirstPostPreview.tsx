import React from 'react'
import styles from './FirstPostPreview.module.css'
import ButtonReadMore from '../ButtonReadMore/ButtonReadMore'
import ButtonReactionBlock from '../ButtonsReactionBlock/ButtonReactionBlock'
import { dislikePost, likePost } from '../../redux/postSlice'
import { useAppDispatch } from '../../redux'

type Rating = {
  likeNumber: number,
  dislikeNumber: number,
  reaction?: 'like' | 'dislike',
}

type Post = {
  imgUrl?: string,
  title: string,
  id: string,
  body: string,
  rating: Rating
}

function FirstPostPreview({ post }: { post: Post }) {
  const { title, id, body, imgUrl, rating } = post
  const dispatch = useAppDispatch()

  const onLikeButton = () => {
    dispatch(likePost(id))
  }
  const onDislikeButton = () => {
    dispatch(dislikePost(id))
  }

  return (<article className={styles.post}>
      <img className={styles.img} src={imgUrl ?? 'https://placehold.co/1140x600'} alt="" />
      <div className={styles.info}>
        <div className={styles.head}>
          <h2 className={styles.title}>{title}</h2>
          <ButtonReactionBlock likeNumber={rating?.likeNumber} dislikeNumber={rating?.dislikeNumber} reaction={rating?.reaction} onLike={onLikeButton} onDislike={onDislikeButton} />
        </div>
        <div className={styles.text}>{body}</div>
        <div className={styles.footer}>
          <ButtonReadMore postPath={`/posts/${id}`} />
        </div>
      </div>
    </article>
  )
}

export default FirstPostPreview