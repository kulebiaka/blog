import React from 'react';
import styles from './PostsList.module.css'
import PostPreview from '../PostPreview/PostPreview';

const PostsList = ({ posts }: any) => {
  return (
    <ul className={styles.list}>
      {posts.map((p: any) => <PostPreview key={p.id} id={p.id} likeNumber={p.likeNumber} dislikeNumber={p.dislikeNumber} title={p.title} imgUrl={p.imgUrl} />)}
    </ul>
  );
};

export default PostsList