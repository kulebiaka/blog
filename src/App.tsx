import React, { useEffect, useReducer, useState } from 'react'
import styles from './App.module.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import CurrentPost from './pages/CurrentPost/CurrentPost';

export const mockPosts = [
  {title: 'SourceMap', likeNumber: 32, dislikeNumber: 18, id:1, imgUrl:'https://placehold.co/558x273'},
  {title: 'SourceMap kjlkjlkjlkjhlkjhlkjhlkjhlkjhljkh hlkjhlkjhlkjhlkjhljhlkjhlkjhl lkjhlkh ', likeNumber: 32, dislikeNumber: 18, id:2, imgUrl:'https://placehold.co/558x273'},
  {title: 'SourceMap', likeNumber: 32, dislikeNumber: 18, id:3, imgUrl:'https://placehold.co/558x273'},
  {title: 'SourceMap', likeNumber: 32, dislikeNumber: 18, id:4, imgUrl:'https://placehold.co/558x273'},
  {title: 'SourceMap', likeNumber: 32, dislikeNumber: 18, id:5, imgUrl:'https://placehold.co/558x273'},
  {title: 'SourceMap', likeNumber: 32, dislikeNumber: 18, id:6, imgUrl:'https://placehold.co/558x273'},
]

const App = () => {


  // const [state, dispatch] = useReducer(first, second, third)

  return (
    <div className={styles.container}>
      <BrowserRouter basename='/posts'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/:postId' element={<CurrentPost title={'some'} body={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quod!'}/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
