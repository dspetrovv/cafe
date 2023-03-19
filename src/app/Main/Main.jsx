import React from "react";
import { Route, Routes } from 'react-router-dom';
import Catalog from "../../pages/Catalog";
import UIPage from "../../pages/UIPage";
import styles from './main.module.scss';

const Main = () => {
  return (
    <main className={styles['main']}>
      <Routes>
        <Route path="/ui" element={<UIPage />} />
        <Route path="/catalog" element={<Catalog />} /> 
        {/* <Route path="/error"></Route>  */}
      </Routes>
    </main>
  );
};

export default Main;