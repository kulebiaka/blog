import React from 'react'
import styles from './App.module.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import CurrentPost from './pages/CurrentPost/CurrentPost';


const App = () => {
  return (
    <div className={styles.container}>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Navigate to={'/posts'}/>}/>
          <Route path='/posts' element={<Home />} />
          <Route path='/posts/:postId' element={<CurrentPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
