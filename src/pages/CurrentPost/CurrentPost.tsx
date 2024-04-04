import React, { useEffect, useState } from 'react'
import styles from './CurrentPost.module.css'
import { NavLink, useParams } from 'react-router-dom'
import { dislikePost, getPostById, likePost } from '../../redux/postSlice'
import ButtonReactionBlock from '../../components/ButtonsReactionBlock/ButtonReactionBlock'
import { useAppDispatch, useAppSelector } from '../../redux'
import Loader from '../../components/Loader/Loader'

const CurrentPost = () => {

  const dispatch = useAppDispatch()
  const postId = useParams().postId ?? '1'
  const [post, setPost] = useState<any>()
  const reaction = useAppSelector(state => state.postsSlice.ratings[+(postId)-1]?.reaction)
  const likeNumber = useAppSelector(state => state.postsSlice.ratings[+(postId)-1]?.likeNumber)
  const dislikeNumber = useAppSelector(state => state.postsSlice.ratings[+(postId)-1]?.dislikeNumber)

  useEffect(() => {
    dispatch(getPostById(postId)).then(post => setPost({...post}))
  }, [postId])

  const onLikeButton = () => {
    dispatch(likePost(postId))
  }
  const onDislikeButton = () => {
    dispatch(dislikePost(postId))
  }

  if(!post) return <Loader />

  return (
    <div>
      <div className={styles.head}>
        <NavLink to={'/'} className={styles.link}>
          <span className={styles.arrow}>&#8592;</span>
          <span className={styles.back_to_post}>Вернуться к статьям</span>
        </NavLink>
        <ButtonReactionBlock likeNumber={likeNumber} dislikeNumber={dislikeNumber} reaction={reaction} onDislike={onDislikeButton} onLike={onLikeButton}/>
      </div>

      <h1 className={styles.title}>
        {post.title}
      </h1>

      <div className={styles.picture} >
        <img src={post?.imgUrl ?? 'https://placehold.co/848x477'} alt="" />
      </div>

      <div className={styles.text}>
        {post.body}
      </div>

    </div>
  )
}

export default CurrentPost