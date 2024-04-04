import React from 'react'
import styles from './App.module.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import CurrentPost from './pages/CurrentPost/CurrentPost';


const App = () => {
  return (
    <div className={styles.container}>
      <BrowserRouter basename='/posts'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/:postId' element={<CurrentPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
