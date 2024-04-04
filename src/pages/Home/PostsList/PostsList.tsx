import React from 'react';
import styles from './PostsList.module.css'
import PostPreview from '../../../components/PostPreview/PostPreview';
import FirstPostPreview from '../../../components/FirstPostPreview/FirstPostPreview';
import { Post, Rating } from '../../../redux/postSlice';

type PropsType={
  posts: Array<Post>
  ratings: Array<Rating>
}

const PostsList = ({ posts, ratings }: PropsType) => {

  const firstPost = {...posts[0], rating: ratings[+posts[0]?.id-1]}

  return (
    <>
      <FirstPostPreview post={firstPost}/>
      <ul className={styles.list}>
        {posts?.slice(1).map((p: Post, index: number) => <PostPreview key={index} postId={p.id} rating={ratings[+p?.id - 1]} title={p.title} imgUrl={p.imgUrl} />)}
      </ul>
      {posts.length === 0 && <div>К сожалению, по данному запросу ничего не найдено </div>}
    </>
  );
};

export default PostsList