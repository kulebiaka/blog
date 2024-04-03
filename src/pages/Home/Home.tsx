import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import PostPreview from '../../components/PostPreview/PostPreview';
import PostsList from '../../components/PostsList/PostsList';
import { mockPosts } from '../../App';
import { getPosts } from '../../api';

const Home = () => {

  const [posts, setPosts] = useState<any>([])

  useEffect(() => {
    (async function(){
      const posts = await getPosts()
      setPosts(posts)
    }())
  }, [])

  return (
    <div>
      <header>
        <h1 className={styles.title}>Блог</h1>
        <p className={styles.description}>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
        <div className={styles.search}>
          <img src="/assets/search-icon.png" alt="" className={styles.search_icon} />
          <input className={styles.search_input} type="text" placeholder='Поиск по названию статьи' />
        </div>
      </header>
      <main>
        <PostsList posts={posts} />
      </main>
    </div>
  );
};

export default Home