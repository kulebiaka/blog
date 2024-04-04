import React, { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import PostsList from './PostsList/PostsList';
import { useAppDispatch, useAppSelector } from '../../redux';
import { getPosts, getPostsByFilter, setPosts } from '../../redux/postSlice';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const dispatch = useAppDispatch()
  const [filter, setFilter] = useState('')
  const debounceRef = useRef<ReturnType<typeof setTimeout>>()

  const posts = useAppSelector(state => state.postsSlice.posts)
  const isPending = useAppSelector(state => state.postsSlice.isPending)
  const ratings = useAppSelector(state => state.postsSlice.ratings)

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => setFilter(e.target.value), 300)
  }

  useEffect(() => {
    if(filter.length == 0){
      dispatch(getPosts())
    } else{
      dispatch(getPostsByFilter(filter))
    }

    return () => {dispatch(setPosts([]))}
  }, [filter])

  return (
    <div>
      <header>
        <h1 className={styles.title}>Блог</h1>
        <p className={styles.description}>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
        <div className={styles.search}>
          <img src="/assets/search-icon.png" alt="" className={styles.search_icon} />
          <input className={styles.search_input} onChange={onFilterChange} type="text" placeholder='Поиск по названию статьи' />
        </div>
      </header>
      <main>
        {posts.length === 0 ?
        isPending ? <Loader /> :
        <div>К сожалению, по вашему запросу ничего не найдено </div> :
        <PostsList posts={posts} ratings={ratings} />
      }
      </main>
    </div>
  );
};

export default Home