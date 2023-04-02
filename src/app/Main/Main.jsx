import React from "react";
import { Route, Routes } from 'react-router-dom';
import Catalog from "../../pages/Catalog";
import UIPage from "../../pages/UIPage";
import styles from './main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <Routes>
          <Route path="/" element={<Catalog />} /> 
          <Route path="/ui" element={<UIPage />} />
          {/* <Route path="/error"></Route>  */}
        </Routes>
      </div>
    </main>
  );
};

export default Main;